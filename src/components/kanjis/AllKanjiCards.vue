<template>
  <v-container>
    <Kanji-navbar @change-level="(level: number) => selectedKanjiLevel = level"></Kanji-navbar>
    <div v-if="kanjiList" class="all-kanji-cards">
      <div v-for="(kanji, index) in kanjiList" v-bind:key="index">
        <div v-if="selectedKanjiLevel === kanji.level" class="custom-card"
        @click="router.push({ name: 'KanjiCard', params: {jlptNumber: kanji.level, selectedKanjiId: kanji.id} })">
        <p class="custom-card__kanji">
          {{ kanji.kanji }}
        </p>
        <p>
          {{ kanji.meaning }}
        </p>
      </div>  
    </div>
  </div>
</v-container>
</template>

<script setup lang="ts">
import jlpt5 from "../../cardsData/kanjis/JLPT5Card.json";
import jlpt4 from "../../cardsData/kanjis/JLPT4Card.json";
import router from "../../router";
import {onMounted, ref, Ref} from "vue";
import {kanjiInterface} from "../../interfaces/kanjiInterface";
import KanjiNavbar from "../navbars/KanjiNavbar.vue";

let kanjiList: Ref<kanjiInterface[] | undefined> = ref()
let selectedKanjiLevel: Ref<number> = ref(5)
  
  onMounted(() => {
    const allJlptLevels: kanjiInterface[] = [...jlpt5, ...jlpt4]
    kanjiList.value = allJlptLevels
  })
</script>
