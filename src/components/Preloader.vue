<template>
    <div v-if="isVisible" id="preloader" :class="{ 'slide-out': isSlidingOut }">
      <div id="greeting" :class="{ slide: !isFading, fade: isFading }">{{ currentGreeting }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, defineEmits } from 'vue';
  
  const emit = defineEmits(['finished']);
  const greetings = ["Olá", "Hello", "こんにちは"];
  const currentGreeting = ref(greetings[0]);
  const isVisible = ref(true);
  const isFading = ref(false);
  const isSlidingOut = ref(false);
  let index = 0;
  
  const showNextGreeting = () => {
    isFading.value = true; // Inicia a animação de fade-out
  
    setTimeout(() => {
      index++;
      if (index < greetings.length) {
        currentGreeting.value = greetings[index];
        isFading.value = false; // Remove o fade-out
      }
    }, 250); // Tempo do fade-out reduzido
  };
  
  // Mudar saudação a cada 1 segundo
  onMounted(() => {
    const intervalId = setInterval(showNextGreeting, 1000); // Tempo total do intervalo reduzido
  
    setTimeout(() => {
      clearInterval(intervalId);
      isFading.value = true; // Inicia a animação de fade-out final
  
      setTimeout(() => {
        isSlidingOut.value = true; // Inicia a animação de saída
      }, 250); // Tempo do fade-out final reduzido
  
      setTimeout(() => {
        isVisible.value = false; // Esconde a preloader
        emit('finished'); // Emite evento de finalização
      }, 750); // Tempo total da animação de saída reduzido
    }, greetings.length * 1000); // Tempo total reduzido
  });
  </script>
  
  <style scoped>
  #preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000; /* Fundo escuro */
    z-index: 9999;
    transition: transform 0.5s ease; /* Transição para a animação de saída */
  }
  
  #preloader.slide-out {
    transform: translateY(-100%); /* Sobe o preloader para fora da tela */
  }
  
  #greeting {
    font-size: 3rem;
    color: #fff;
    transition: transform 0.5s ease, opacity 0.5s ease; /* Transições para slide e fade */
    transform: translateY(-30px); /* Inicialmente fora da tela */
  }
  
  .slide {
    transform: translateY(0); /* Efeito de slide-in */
    opacity: 1; /* Opacidade plena */
  }
  
  .fade {
    opacity: 0; /* Efeito de fade-out */
  }
  </style>
  