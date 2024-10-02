<template>
  <nav id="navbar" class="navbar fixed-top navbar-expand-lg">
    <div class="container-fluid d-flex justify-content-between">
      <a class="navbar-brand text-light ms-92" href="#"><img src="/logo.svg" alt=""> </a>
      <ul class="nav justify-content-center flex-grow-1">
        <li class="nav-item">
          <a class="nav-link" href="#">{{ $t('navbar.home') }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">{{ $t('navbar.about') }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects">{{ $t('navbar.projects') }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">{{ $t('navbar.contact') }}</a>
        </li>
      </ul>
    </div>
    <div class="dropdown me-92">
      <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <img class="langicon" :src="langIcon" alt="Ícone de idioma" />
      </button>
      <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
        <li>
          <a class="dropdown-item" href="#" @click.prevent="changeLanguage('pt_br')">
            <img class="flag me-2 mt-1" :src="br_empire" alt="">{{ $t('navbar.portuguese') }}
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#" @click.prevent="changeLanguage('en')">
            <img class="flag me-2 mt-1" :src="english" alt="">{{ $t('navbar.english') }}
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#" @click.prevent="changeLanguage('jp')">
            <img class="flag me-2 mt-1" :src="japanese" alt="">{{ $t('navbar.japanese') }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  height: 96px;
  z-index: 9999;
  font-size: 16px;
  font-family: "Inter Tight", sans-serif;
  background-color: rgba(0, 0, 0, 0.6); /* Preto com 60% de opacidade */
  backdrop-filter: blur(10px); /* Aplica um desfoque */
  -webkit-backdrop-filter: blur(10px); /* Suporte para navegadores WebKit */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Opcional: uma borda sutil para destaque */

}

.nav-link {
  color: white;
  opacity: 80%;
}

.nav-link.active {
  color: #007bff; /* Cor da seção ativa */
}

.flag {
  height: auto;
  width: 30px;
  opacity: 80%;
}

.dropdown-menu {
  background-color: rgba(15, 15, 16, 0.1);
}

.navbar-brand img {
  height: 35px;
  width: auto;
}

.langicon {
  height: 20px;
  width: auto;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue';
import langIcon from '../assets/icons/lang-icon.svg';
import br_empire from '../assets/icons/br-empire.svg';
import english from '../assets/icons/gb.svg';
import japanese from '../assets/icons/jp.svg';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { locale } = useI18n();
     

    const changeLanguage = (lang: string) => {
      console.log('Mudando idioma para:', lang); // Adicione isso para depuração
      locale.value = lang;
    };

    return { langIcon, br_empire, english, japanese, changeLanguage };
  },
});
</script>