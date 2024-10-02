<template>
  <div id="app">
    <Preloader @finished="handlePreloaderFinish" />
    <transition name="fade">
      <div v-if="isContentVisible" class="content">
        
          <Navbar/>
          <Home />
          <Projects/>
          <NavbarCanva/>
          
        
        
        
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import Preloader from './components/Preloader.vue';
import Home from './components/Home.vue';
import Navbar from './components/Navbar.vue';
import Projects from './components/Projects.vue';


const isContentVisible = ref(false); // Controla a visibilidade do conteúdo

const handlePreloaderFinish = () => {
  isContentVisible.value = true; // Mostra o conteúdo principal
};
</script>

<style scoped>


.content {
  position: relative;
  z-index: 1; /* Coloca o conteúdo acima do preloader */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}




</style>
