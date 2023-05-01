<template>
    <v-container class="kanji-exercise" v-if="currentCard && shuffledCards.length > 0 && kanjiList.length > 0">
        <div class="answer-card">
            <div class="answer-card__event answer-card__event--kanji">{{ currentCard.kanji }}</div>
            <v-row class="answer-card__buttons-row">
                <v-col cols="5" v-for="(card, index) in shuffledCards" v-bind:key="index">
                    <v-btn height="100px" block class="answer-card__btn"
                    v-if="answers[index].color"
                    :color="answers[index].color"
                    @click="checkAnswer(card.id)">
                        <span v-if="props.prononciation === 'onyomi'">{{ card.onyomi }}</span>
                        <span v-if="props.prononciation === 'kunyomi'">{{ card.kunyomi }}</span>
                    </v-btn>
                </v-col>
            </v-row>
            <div v-if="displayExamples != false">
                <div class="answer-card__example__title">Exemple(s)</div>
                <div  v-if="props.prononciation === 'onyomi'" >
                    <div v-for="(example, index) in currentCard.onyomiExample"
                v-bind:key="index">
                        <div class="answer-card__example__row">
                            <div>{{ example.example }}</div>
                            <div>{{ example.translation }}</div>
                        </div>
                    </div>
                </div>
                <div v-if="props.prononciation === 'kunyomi'" >
                    <div v-for="(example, index) in currentCard.kunyomiExample"
                v-bind:key="index">
                        <div class="answer-card__example__row">
                            <v-col>{{ example.example }}</v-col>
                            <v-col>{{ example.translation }}</v-col>
                        </div>
                    </div>
                </div>
                <v-btn @click="changeKanji()">
                        Un autre !
                </v-btn>
            </div>
        </div>
    </v-container>
</template>

<script setup lang="ts">

import { onMounted, Ref, ref } from 'vue';
import { kanjiInterface } from '../../interfaces/kanjiInterface';
import { getThreeRandomKanjiNumbers } from '../../services/kanjis/getThreeRandomKanjiNumbers';
import { importJlptLevel } from '../../services/kanjis/importJlptLevel';
import { selectCardNumber } from '../../services/selectCardNumber';
import { shuffleCards} from '../../services/shuffleCards';
import { checkIfAnswerCorrect } from '../../services/checkIfAnswerCorrect';

const props = defineProps({
    jlptLevel: String,
    prononciation: String
})

let kanjiList: Ref<kanjiInterface[]> = ref([])
let notDisplayedKanji: Ref<kanjiInterface[]> = ref([])
let currentCard: Ref<kanjiInterface | undefined> = ref()
let currentCardNumber: number
let otherResponses: Set<number> = new Set
let cardsToDisplay: kanjiInterface[] = []
let shuffledCards: Ref = ref()
let answers: Ref<{cardId: number, color: string}[]> = ref([
  {
    cardId: 0,
    color: '#ffffff'
  },
  {
    cardId: 1,
    color: '#ffffff'
  },
  {
    cardId: 2,
    color: '#ffffff'
  },
  {
    cardId: 3,
    color: '#ffffff'
  }
])
let displayExamples: Ref<boolean> = ref(false)
        
onMounted(async () => {
    if (props.jlptLevel) {
        kanjiList.value = (await importJlptLevel(props.jlptLevel)).default
        notDisplayedKanji.value = kanjiList.value
        }
    if (kanjiList.value.length > 4) {
        getAnswers()
    }
})

async function getAnswers() {
    if(kanjiList.value.length < 8) {
        if (props.jlptLevel) {
            kanjiList.value = (await importJlptLevel(props.jlptLevel)).default
        }
    }
    currentCardNumber = selectCardNumber(notDisplayedKanji.value.length)
    cardsToDisplay.push(notDisplayedKanji.value[currentCardNumber])
    currentCard.value = notDisplayedKanji.value[currentCardNumber]
    notDisplayedKanji.value.filter(kanji => kanji.id === currentCard.value?.id)

    if (props.prononciation) {
        otherResponses = getThreeRandomKanjiNumbers(kanjiList.value, currentCard.value, props.prononciation)
        otherResponses.forEach((responseNumber: number) => {
            const otherKanji = kanjiList.value.find(kanji => kanji.id === responseNumber)
            if(otherKanji) {
                cardsToDisplay.push(otherKanji)
            }
        })

        shuffledCards.value = shuffleCards(cardsToDisplay)
        for(let i = 0; i < shuffledCards.value.length; i++) {
            answers.value[i].cardId = shuffledCards.value[i].id
        }
    }
}

function checkAnswer(selectedAnswerId: number) {
    if (currentCard.value?.id) {
        if(checkIfAnswerCorrect(selectedAnswerId, currentCard.value?.id)) {
            answers.value.forEach(card => {
                if (card.cardId === selectedAnswerId) {
                    card.color = '#76db84'
                    displayExamples.value = true
                }
            })
        } else {
            answers.value.forEach(card => {
                if (card.cardId === selectedAnswerId) {
                    card.color = '#cc5e6b'
                }
            }) 
        }
    }
}

function changeKanji() {
    displayExamples.value = false
    answers.value.forEach(answer => {
        answer.color = '#ffffff'
    });
    shuffledCards.value = []
    cardsToDisplay = []
    getAnswers()
}

</script>