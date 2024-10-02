<template>
  <div class="container-fluid d-flex align-items-center justify-content-center">
    <section id="home" class="text-start">
      <h1 data-bs-toggle="tooltip" data-bs-placement="top" title="Dica: Aqui está a introdução!">{{ displayedIntroduce }}</h1>
      <h2>{{ $t('home.dev') }}</h2>
      <p class="mt-4">
        {{ $t('home.phrase') }} 
        <span 
          class="reveal-word" 
          @mouseenter="handleMouseEnter" 
          @mouseleave="handleMouseLeave"
        >{{ $t('home.reveal') }}</span>.
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      displayedIntroduce: this.$t('home.introduce'), // Inicializa com a frase de introdução
    };
  },
  methods: {
    handleMouseEnter() {
      this.displayedIntroduce = this.$t('home.joking').replace('[sugestão]', 'William'); // Alterar para a mensagem de brincadeira
    },
    handleMouseLeave() {
      this.displayedIntroduce = this.$t('home.introduce'); // Retorna à frase original
    },
  },
  watch: {
    '$i18n.locale'() {
      // Quando a linguagem mudar, redefine displayedIntroduce
      this.displayedIntroduce = this.$t('home.introduce');
    },
  },
});
</script>

<style scoped>
h1, h2, p {
  color: #DEDEDE; /* Cor do texto */
  margin: 0; /* Remove margens padrões */
  font-family: "Inter Tight", sans-serif;
}

h1 {
  font-size: 3.5rem;
  letter-spacing: -0.6px;
  font-weight: 400;
  font-style: normal;
}

h2 {
  font-size: 3.5rem;
  letter-spacing: -0.6px;
  font-weight: normal;
  color: #858588;
}

p {
  font-size: 1.25rem;
  letter-spacing: -0.6px;
  font-weight: 400; 
  color: #858588;
}

.reveal-word {
  color: #f39c12; /* Cor da palavra "revela" */
  cursor: pointer; /* Cursor de mão ao passar por cima */
  text-decoration: underline; /* Sublinhado para indicar interatividade */
}

.container-fluid {
  height: 70vh; /* Para ocupar toda a altura da tela */
}
</style>
