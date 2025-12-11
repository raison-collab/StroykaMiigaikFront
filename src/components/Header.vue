<template>
  <header class="header">
    <div class="container header__container">
      <div class="logo">
        <img src="/images/logo.svg" alt="TaskFlow Logo">
      </div>
      <!-- Меню-бургер для мобильных -->
      <button class="menu-toggle" :class="{ active: isMenuActive }" @click="toggleMenu" aria-label="Открыть меню">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <!-- Навигация -->
      <nav class="main-nav" :class="{ active: isMenuActive }">
        <ul class="nav-list">
          <li v-if="isPublicPage"><router-link to="/planning" @click="closeMenu">Планирование</router-link></li>
          <li v-if="isPublicPage"><router-link to="/monitoring" @click="closeMenu">Контроль</router-link></li>
          <li v-if="isPublicPage"><router-link to="/documents" @click="closeMenu">Документы</router-link></li>
          <li v-if="isPublicPage"><router-link to="/demo" @click="closeMenu">Запросить демо</router-link></li>
          <li v-if="!isPublicPage"><router-link to="/dashboard" @click="closeMenu">Главная</router-link></li>
          <li v-if="!isPublicPage"><router-link to="/projects" @click="closeMenu">Проекты</router-link></li>
          <li v-if="!isPublicPage"><router-link to="/tasks" @click="closeMenu">Задачи</router-link></li>
          <li v-if="!isPublicPage"><router-link to="/documents" @click="closeMenu">Документы</router-link></li>
          <li v-if="!isPublicPage"><router-link to="/calendar" @click="closeMenu">Календарь</router-link></li>
          <li v-if="!isPublicPage"><router-link to="/reports" @click="closeMenu">Отчёты</router-link></li>
          <li v-if="!isPublicPage"><router-link to="/settings" @click="closeMenu">Настройки</router-link></li>
        </ul>
      </nav>
      <div class="header-actions">
        <router-link v-if="isPublicPage" to="/login" class="btn btn--outline">Войти</router-link>
        <router-link v-if="isPublicPage" to="/demo" class="btn btn--primary">Запросить демо</router-link>
        <router-link v-if="!isPublicPage" to="/login" class="btn btn--outline">Выйти</router-link>
        <div v-if="!isPublicPage" class="user-profile">
          <img src="/images/avatar1.jpg" alt="Иван Петров" class="user-avatar">
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { ref, computed } from 'vue';

const isMenuActive = ref(false);
const route = useRoute();

const isPublicPage = computed(() => {
  const publicPages = ['/', '/demo', '/planning', '/monitoring', '/login'];
  return publicPages.includes(route.path);
});

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value;
}

function closeMenu() {
  isMenuActive.value = false;
}
</script>

