<template>
  <v-container>
    <v-row class="kanji-card">
      <v-col class="kanji-card__col" cols="5" v-if="selectedKanji">
        <div class="kanji-card__level">JLPT {{ selectedKanji.level }}</div>
        <div class="kanji-card__kanji">{{ selectedKanji.kanji }}</div>
        <div class="kanji-card__separation">{{ selectedKanji.meaning }}</div>
        <div class="kanji-card__onyomi">
          <p class="kanji-card__onyomi__title">音読み</p>
          <p class="kanji-card__prononciation">{{ selectedKanji.onyomi }}</p>
        </div>
        <div v-if="selectedKanji.onyomiExample.length > 0" class="kanji-card__example">Exemple :</div>
        <div v-for="onyoumiExample in selectedKanji.onyomiExample">
          <div>{{ onyoumiExample.example }}</div>
          <div>{{ onyoumiExample.translation }}</div>
        </div>
        <div class="kanji-card__separation"></div>
        <div class="kanji-card__kunyomi">
          <p class="kanji-card__kunyomi__title">訓読み</p>
          <p class="kanji-card__prononciation">{{ selectedKanji.kunyomi }}</p>
        </div>
        <div v-if="selectedKanji.kunyomiExample.length > 0" class="kanji-card__example">Exemple :</div>
        <div class="kanji-card__example__item" v-for="kunyoumiExample in selectedKanji.kunyomiExample">
          <div>{{ kunyoumiExample.example }}</div>
          <div>{{ kunyoumiExample.translation }}</div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {onMounted, ref, Ref} from "vue";
import { kanjiInterface } from "../../interfaces/kanjiInterface";
import { importJlptLevel } from "../../services/kanjis/importJlptLevel";

const props = defineProps({
  selectedKanjiId: String,
  jlptNumber: String
})

let selectedKanji: Ref<kanjiInterface | undefined> = ref()
  
  onMounted(async () => {
    if(props.selectedKanjiId && props.jlptNumber) {
      const kanjiList = await importJlptLevel(props.jlptNumber)
      getKanjiInJson(kanjiList)
    }
  })
  
  function getKanjiInJson(json: { default: kanjiInterface[] }) {
    json.default.forEach(kanji => {
      if (props.selectedKanjiId) {
        if(kanji.id == parseInt(props.selectedKanjiId)) {
          selectedKanji.value = kanji
        }
      }
    })
  }
</script>
