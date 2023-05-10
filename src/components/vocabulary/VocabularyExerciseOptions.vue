<template>
    <v-container>
        <v-row>
            <v-radio-group v-model="exerciseOption">
                <v-radio label="Jlpt level" value="0" color="primary"></v-radio>
                <v-radio label="Custom" value="1" color="primary"></v-radio>
            </v-radio-group>
        </v-row>
        <v-row>
            <div v-if="exerciseOption == 0">
                <h3>Niveau Jlpt :</h3>
                <v-radio-group v-model="jlptLevel">
                    <v-radio
                    v-for="(jlptLevel, index) in allJlptLevels" :color="jlptLevel.color" :label="jlptLevel.level"
                    :value="jlptLevel.value" v-bind:key="index"></v-radio>
                </v-radio-group>
            </div>
        </v-row>
        <v-row>
            <v-btn @click="router.push({ name: 'VocabularyExercise', params: {selectedType: exerciseOption, jlptLevel: jlptLevel}})">
                C'est parti !
            </v-btn>
        </v-row>
    </v-container>
</template>


<script setup lang="ts">

import router from '@/router';
import { Ref, ref } from 'vue';

let exerciseOption: Ref<number> = ref(0);
let allJlptLevels: { level: string, value: string, color: string }[] = [{ level: 'Jlpt5', value: '5', color: '#37d466' },
{ level:'Jlpt4', value: '4', color: '#60b6db' }, { level:'Jlpt3', value: '3', color: '#d1ca49' },
{ level: 'Jlpt2', value: '2', color: '#bf1b2b' }, { level: 'Jlpt1', value: '1', color: '#0f0506' }]
let jlptLevel: Ref<string> = ref('5')
    
</script>