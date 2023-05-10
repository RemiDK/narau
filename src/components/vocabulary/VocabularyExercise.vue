<template>
    <v-container>
        
    </v-container>
</template>

<script setup lang="ts">
import { vocabularyInterface } from '@/interfaces/vocabularyInterface';
import { importSelectedList } from '@/services/vocabulary/importSelectedList';
import { Ref, onMounted, ref } from 'vue';
import { selectCardNumber } from '../../services/selectCardNumber';

const props = defineProps({
    selectedType: String,
    jlptLevel: String
});

let vocabularyList: Ref<vocabularyInterface[]> = ref([])
let notDisplayedVocabulary: Ref<vocabularyInterface[]> = ref([])
let currentCard: Ref<vocabularyInterface | undefined> = ref()
let currentCardNumber: number
let otherResponses: Set<number> = new Set
let cardsToDisplay: vocabularyInterface[] = []
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
    if (props.selectedType == '0') {
        if (props.jlptLevel) {
            vocabularyList.value = (await importSelectedList(props.jlptLevel)).default
            notDisplayedVocabulary.value = vocabularyList.value
        }
        if (vocabularyList.value.length > 4) {
            getAnswers()
        }
    }
    else {
        getAnswers()
    }
});

async function getAnswers() {
    if(vocabularyList.value.length < 8) {
        if (props.selectedType == '0') {
            if (props.jlptLevel) {
                vocabularyList.value = (await importSelectedList(props.jlptLevel)).default
            }
        }
        else {
            vocabularyList.value = (await importSelectedList('0')).default 
        }
    }
    currentCardNumber = selectCardNumber(notDisplayedVocabulary.value.length)
    cardsToDisplay.push(notDisplayedVocabulary.value[currentCardNumber])
    currentCard.value = notDisplayedVocabulary.value[currentCardNumber]
    notDisplayedVocabulary.value.filter(vocabulary => vocabulary.id === currentCard.value?.id)


    otherResponses = getThreeRandomKanjiNumbers(kanjiList.value, currentCard.value, props.prononciation)
    otherResponses.forEach((responseNumber: number) => {
        const otherKanji = vocabularyList.value.find(vocabulary => vocabulary.id === responseNumber)
        if(otherKanji) {
            cardsToDisplay.push(otherKanji)
        }
    })

    shuffledCards.value = shuffleCards(cardsToDisplay)
    for(let i = 0; i < shuffledCards.value.length; i++) {
        answers.value[i].cardId = shuffledCards.value[i].id
    }

}

</script>