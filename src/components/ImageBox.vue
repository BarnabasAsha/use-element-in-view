<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useElementInView } from '../composables/useElementInView'

const props = defineProps({
  title: String,
  url: String,
  alt: String
})

const boxRef = ref({})

const handleElementIntersect = (target) => {
  console.info('Hello Target Element is Intersecting')
}

const { isElementIntersecting, observer } = useElementInView(handleElementIntersect, {
  threshold: 0.5,
  rootMargin: '20%'
})

onMounted(() => {
  observer.observe(boxRef.value)
})

onUnmounted(() => {
  observer.disconnect()
})
</script>

<template>
  <div class="box-image" :class="isElementIntersecting ? 'moveUp' : ''" ref="boxRef">
    <img :src="url" :alt="alt" />

    <div class="title">{{ title }}</div>
  </div>
</template>

<style scoped>
.box-image {
  position: relative;
  width: 100%;
  height: auto;
  border: 2px solid black;
  transform: translateY(15%);
  transition: all ease-in 0.5s;
  opacity: 0;
}

.moveUp {
  transform: translateY(0%);
  opacity: 1;
}

.box-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.334);
  z-index: 5;
}

.title {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 8;
  font-size: 1.1rem;
  font-weight: 500;
  color: white;
  text-transform: lowercase;
}
</style>
