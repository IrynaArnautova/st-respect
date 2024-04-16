<template>
  <div ref="textContainer" class="text-container" v-text-reveal-animation>
    <span v-for="(char, index) in text" :key="index" class="js_char">{{ char }}</span>
  </div>
</template>

<script setup>
  import { ref, defineProps, onMounted } from 'vue';
  import TextRevealAnimation from '@/directives/TextRevealAnimation';

  const props = defineProps({
    textProp: String
  });

  const text = ref(props.textProp);

  const textContainer = ref(null);

  onMounted(() => {
    TextRevealAnimation.mounted(textContainer.value);
  });
</script>

<style>
  .js_char {
    display: inline-block;
    white-space: pre;
  }
</style>