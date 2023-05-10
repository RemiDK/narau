// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import AllKanjiCards from '../components/kanjis/AllKanjiCards.vue'
import KanjiCard from '../components/kanjis/KanjiCard.vue'
import KanjiExerciseOptions from '../components/kanjis/KanjiExerciseOptions.vue'
import KanjiExercise from '../components/kanjis/KanjiExercise.vue'
import AllVocabularyCards from '../components/vocabulary/AllVocabularyCards.vue'
import VocabularyExerciseOptions from '../components/vocabulary/VocabularyExerciseOptions.vue'
import VocabularyExercise from '../components/vocabulary/VocabularyExercise.vue'

const routes = [
  {
    path: '/',
    name: "Home",
    component: Home,
  },
  {
    path: '/kanjis/all',
    name: "AllKanjiCards",
    component: AllKanjiCards,
  },
  {
    path: '/kanjis/card/:jlptNumber/:selectedKanjiId',
    name: "KanjiCard",
    component: KanjiCard,
    props: true
  },
  {
    path: '/kanjis/ExerciseOptions',
    name: "KanjiExerciseOptions",
    component: KanjiExerciseOptions,
  },
  {
    path: '/kanjis/kanjiExercise/:jlptLevel/:prononciation',
    name: "KanjiExercise",
    component: KanjiExercise,
    props: true
  },
  {
    path: '/vocabulary/all',
    name: "AllVocabularyCards",
    component: AllVocabularyCards,
  },
  {
    path: '/vocabulary/ExerciseOptions',
    name: "VocabularyExerciseOptions",
    component: VocabularyExerciseOptions,
  },
  {
    path: '/vocabulary/VocabularyExercise/:selectedType/:jlptLevel',
    name: "VocabularyExercise",
    component: VocabularyExercise,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
