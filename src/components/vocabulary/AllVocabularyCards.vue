<template>
    <v-container>
        <Vocabulary-navbar></Vocabulary-navbar>
        <div v-if="vocabularyList">
            <div v-for="(vocabulary, index) in vocabularyList" v-bind:key="index">
                <div class="custom-card">
                    <div class="custom-card__vocabulary-word">{{ vocabulary.word }}</div>
                    <div>{{ vocabulary.kana }}</div>
                    <div>{{ vocabulary.translation }}</div>
                    <div class="custom-card__vocabulary-example"
                     v-for="(example, index) in vocabulary.example" v-bind:key="index">
                        <div>
                            {{ example.sentence }}
                        </div>
                        <div>
                            {{ example.translation }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import customVocabulary from "../../cardsData/vocabulary/customVocabulary1.json";
import {vocabularyInterface} from "../../interfaces/vocabularyInterface";
import VocabularyNavbar from '../navbars/VocabularyNavbar.vue';

let vocabularyList: Ref<vocabularyInterface[] | undefined> = ref(customVocabulary);

</script>