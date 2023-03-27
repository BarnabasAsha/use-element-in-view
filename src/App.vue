<script setup>
import ImageBox from './components/ImageBox.vue'
import data from './assets/data.json' 
import { computed } from 'vue'

const imageList = computed(() => {
  return data
})
</script>

<template>
  <main class="main">
    <header class="header">
      <h1>Use Element In View</h1>
    </header>

    <div class="container">
      <ImageBox
        v-for="item in imageList.images"
        :title="item.description"
        :alt="item.alt_description"
        :url="item.urls.regular"
      />
    </div>
  </main>
</template>

<style scoped>
.main {
  background-color: beige;
  color: #0e0c0c;
  min-height: 100vh;
}
.header {
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header h1 {
  font-size: 2rem;
  line-height: 1.9;
  font-weight: bold;
}

.container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
</style>
