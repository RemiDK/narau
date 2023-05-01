<template>
    <KanjiExerciseNavbar></KanjiExerciseNavbar>
    <v-container class="kanji-exercise-options">
        <v-row>
            <v-col cols="6" class="kanji-exercise-options__col">
                <h3 class="kanji-exercise-options__section-title">Niveau Jlpt :</h3>
                <v-radio-group v-model="jlptLevel">
                    <v-radio 
                    v-for="jlptLevel in allJlptLevels" :color="jlptLevel.color" :label="jlptLevel.level" :value="jlptLevel.value">
                    </v-radio>
                </v-radio-group>
            </v-col>
            <v-col cols="6" class="kanji-exercise-options__col">
                <h3 class="kanji-exercise-options__section-title">Lecture :</h3>
                <v-radio-group v-model="prononciation">
                    <v-radio label="Onyomi" value="onyomi"></v-radio>
                    <v-radio label="Kunyomi" value="kunyomi"></v-radio>
                </v-radio-group>
            </v-col>
        </v-row>
        <v-row class="kanji-exercise-options__btn">
            <v-btn @click="router.push({ name: 'KanjiExercise', params: {jlptLevel: jlptLevel, prononciation: prononciation}})">
                C'est parti !
            </v-btn>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import KanjiExerciseNavbar from '../navbars/KanjiExerciseNavbar.vue';
import router from "../../router";

let allJlptLevels: { level: string, value: string, color: string }[] = [{ level: 'Jlpt5', value: '5', color: '#37d466' },
{ level:'Jlpt4', value: '4', color: '#60b6db' }, { level:'Jlpt3', value: '3', color: '#d1ca49' },
{ level: 'Jlpt2', value: '2', color: '#bf1b2b' }, { level: 'Jlpt1', value: '1', color: '#0f0506' }]
let jlptLevel: Ref<string> = ref('5')
let prononciation: Ref<string> = ref('onyomi')
</script>