<template>
  <v-container class="home">
    <div class="home__row">
      <v-col class="category-box category-box__japanese-kanji">
        <div class="category-box__background">
          <div class="category-box__title">Kanjis</div>
          <div class="category-box__list">
            <v-btn to="/kanjis/all" variant="outlined" class="category-box__list__element">
              Cartes kanji
            </v-btn>
            <v-btn to="/kanjis/exerciseOptions" variant="outlined" class="category-box__list__element">
              Exercices kanji
            </v-btn>
          </div>
        </div>
      </v-col>
    </div>
    <div class="home__row">
      <v-col class="category-box category-box__japanese-vocabulary">
        <div class="category-box__background">
          <div class="category-box__title">Vocabulaire</div>
          <div class="category-box__list">
            <v-btn to="/vocabulary/VocabularyList" variant="outlined" class="category-box__list__element">Toutes les cartes</v-btn>
            <v-btn variant="outlined" class="category-box__list__element">Exercices</v-btn>
          </div>
        </div>
      </v-col>
      <v-col class="category-box category-box__japanese-grammar">
        <div class="category-box__background">
          <div class="category-box__title">Grammaire</div>
          <div class="category-box__list">
            <v-btn variant="outlined" class="category-box__list__element">Toutes les cartes</v-btn>
            <v-btn variant="outlined" class="category-box__list__element">Exercices</v-btn>
            <v-btn variant="outlined" class="category-box__list__element">Leçons</v-btn>
          </div>
        </div>
      </v-col>
    </div>
  </v-container>
</template>

<script setup lang="ts">

</script>
