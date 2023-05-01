<template>
  <v-app-bar color="teal-darken-4" :elevation="2">
    <template>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title class="pl-10">Kanjis JLPT</v-app-bar-title>
    <v-btn @click="changeKanjiLevel(1)">
      JLPT 1
    </v-btn>
    <v-btn @click="changeKanjiLevel(2)">
      JLPT 2
    </v-btn>
    <v-btn @click="changeKanjiLevel(3)">
      JLPT 3
    </v-btn>
    <v-btn @click="changeKanjiLevel(4)">
      JLPT 4
    </v-btn>
    <v-btn @click="changeKanjiLevel(5)">
      JLPT 5
    </v-btn>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script setup lang="ts">

  const emit = defineEmits(['changeLevel'])

  function changeKanjiLevel(selectedKanjiLevel: number) {
    emit('changeLevel', selectedKanjiLevel)
  }
</script>
