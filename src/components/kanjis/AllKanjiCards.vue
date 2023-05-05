<template>
  <v-container>
    <Kanji-navbar @change-level="(level: number) => selectedKanjiLevel = level"></Kanji-navbar>
    <div v-if="kanjiList" class="all-kanji-cards">
      <div v-for="(kanji, index) in kanjiList" v-bind:key="index">
        <div v-if="selectedKanjiLevel === kanji.level" class="custom-card">
          <p class="custom-card__kanji">
            {{ kanji.kanji }}
          </p>
          <p>
            {{ kanji.meaning }}
          </p>
          <div class="custom-card__hover-display">
            <div class="custom-card__separation"></div>
            <div class="custom-card__onyomi">
              <p class="custom-card__onyomi__title">音読み</p>
              <p class="custom-card__prononciation">{{ kanji.onyomi }}</p>
            </div>
            <div v-for="(onyoumiExample, index) in kanji.onyomiExample" v-bind:key="index">
              <div>{{ onyoumiExample.example }}</div>
              <div>{{ onyoumiExample.translation }}</div>
            </div>

            <div class="custom-card__separation"></div>
            <div class="custom-card__kunyomi">
              <p class="custom-card__kunyomi__title">訓読み</p>
              <p class="custom-card__prononciation">{{ kanji.kunyomi }}</p>
            </div>
            <div class="custom-card__example__item"
            v-for="(kunyoumiExample, index) in kanji.kunyomiExample" v-bind:key="index">
              <div>{{ kunyoumiExample.example }}</div>
              <div>{{ kunyoumiExample.translation }}</div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import jlpt5 from "../../cardsData/kanjis/JLPT5Card.json";
import jlpt4 from "../../cardsData/kanjis/JLPT4Card.json";
import jlpt3 from "../../cardsData/kanjis/JLPT3Card.json";
import router from "../../router";
import {onMounted, ref, Ref} from "vue";
import {kanjiInterface} from "../../interfaces/kanjiInterface";
import KanjiNavbar from "../navbars/KanjiNavbar.vue";

let kanjiList: Ref<kanjiInterface[] | undefined> = ref()
let selectedKanjiLevel: Ref<number> = ref(5)
  
  onMounted(() => {
    const allJlptLevels: kanjiInterface[] = [...jlpt5, ...jlpt4, ...jlpt3]
    kanjiList.value = allJlptLevels
  })
</script>
