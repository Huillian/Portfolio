<template>
  <nav class="navbar-inicial">
    <a href="#" class="navbar-brand">{{ $t('navbar.name') }}</a>
    <ul class="navigation-tabs">
      <li><a href="#home">{{ $t('navbar.home') }}</a></li>
      <li><a href="#about">{{ $t('navbar.about') }}</a></li>
      <li><a href="#projects">{{ $t('navbar.projects') }}</a></li>
      <li><a href="#contact">{{ $t('navbar.contact') }}</a></li>
    </ul>
    <div class="language-selector" @click="toggleDropdown">
      <div class="dropdown-button">
        <img class="filter-white" :src="langIcon" alt="Ícone de idioma" />
      </div>
      <div class="dropdown-content" v-if="dropdownOpen">
        <a href="#" @click.prevent="changeLanguage('pt_br')">
          <img :src="br_empire" alt="">{{ $t('navbar.portuguese') }}</a>
        <a href="#" @click.prevent="changeLanguage('en')"><img :src="english" alt="">{{ $t('navbar.english') }}</a>
        <a href="#" @click.prevent="changeLanguage('jp')"><img :src="japanese" alt="">{{ $t('navbar.japanese') }}</a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import langIcon from '../assets/icons/lang-icon.svg';
import br from '../assets/icons/br.svg';
import english from '../assets/icons/gb.svg';
import japanese from '../assets/icons/jp.svg';
import br_empire from  '../assets/icons/br-empire.svg';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { locale } = useI18n();
    const dropdownOpen = ref(false); // Controla o estado de abertura do dropdown

    const toggleDropdown = () => {
      dropdownOpen.value = !dropdownOpen.value; // Alterna o estado do dropdown
    };

    const closeDropdown = (event: MouseEvent) => {
      const dropdown = document.querySelector('.language-selector');
      if (dropdown && !dropdown.contains(event.target as Node)) {
        dropdownOpen.value = false; // Fecha o dropdown se o clique foi fora dele
      }
    };

    // Adiciona e remove o evento global de clique
    onMounted(() => {
      window.addEventListener('click', closeDropdown);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('click', closeDropdown);
    });

    const changeLanguage = (lang: string) => {
      locale.value = lang;
      dropdownOpen.value = false; // Fecha o dropdown após selecionar o idioma
    };

    return { langIcon, br, br_empire, english, japanese, dropdownOpen, toggleDropdown, changeLanguage };
  },
});
</script>

<style scoped>
.navbar-inicial {
  height: 96px;
  display: flex;
  position: fixed;
  top: 30px;
  left: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
}

.navigation-tabs {
  margin: auto;
  list-style-type: none;
  display: flex;
  gap: 20px;
  font-size: 16px;
  font-weight: 500;
  color: #BDC1C7;
}

.navigation-tabs a {
  color: white;
  opacity: 80%;
  cursor: pointer;
  &:hover {
    opacity: 100%;
  }
}

.navbar-brand {
  margin-left: 150px;
  align-self: center;
  font-weight: bold;
  font-size: 20px;
  color: #FFFFFF;
}

.language-selector {
  margin-right: 150px;
  align-self: center;
  color: white;
  font-size: 16px;
  position: relative; /* Adicionado para posicionamento do dropdown */
}

.dropdown-button {
  cursor: pointer; /* Torna o botão clicável */
}

.dropdown-content {
  display: block; /* Garanta que o dropdown seja exibido quando 'v-if' é verdadeiro */
  position: absolute;
  background-color: rgba(15, 15, 16, 0.1);
  
  width: auto;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 100%;
  right: 0;
}

.dropdown-content a {
  color: white;
  background-color: rgba(15, 15, 16, 0.1);
  opacity: 80%;
  padding: 10px;
  text-decoration: none;
  display: flex; /* Mantém os itens em linha */
  align-items: center; /* Alinha verticalmente o texto e a imagem */
  white-space: nowrap; /* Evita quebra de linha */

}

.dropdown-content img {
  height: auto;
  width: 30px;
  margin-right: 10px;
}

.dropdown-content a:hover {
  opacity: 100%;
  background-color: #0f0f10; /* Estilo hover para os links do dropdown */
}

.dropdown-content a:hover {
  background-color: #0f0f10; /* Estilo hover para os links do dropdown */
  

}
</style>
