<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__logo-section">
        <div class="logo">
          <img src="/images/logo.svg" alt="TaskFlow Logo">
          <span>TaskFlow</span>
        </div>
        <p class="footer__description">Проектная система для строительных компаний. Планируйте, контролируйте, управляйте.</p>
      </div>
      <div class="footer__links">
        <div class="footer__column">
          <h4 class="footer__column-title">Продукт</h4>
          <ul class="footer__list">
            <li><router-link to="/planning">Планирование</router-link></li>
            <li><router-link to="/monitoring">Контроль</router-link></li>
            <li><router-link to="/documents">Документы</router-link></li>
          </ul>
        </div>
        <div class="footer__column">
          <h4 class="footer__column-title">Компания</h4>
          <ul class="footer__list">
            <li><a href="#">О нас</a></li>
            <li><a href="#">Блог</a></li>
            <li><a href="#">Поддержка</a></li>
          </ul>
        </div>
        <div class="footer__column">
          <h4 class="footer__column-title">Контакты</h4>
          <address class="footer__address">
            <p>г. Москва, ул. Строителей, д. 1</p>
            <p><a href="tel:+74951234567">+7 (495) 123-45-67</a></p>
            <p><a href="mailto:info@taskflow.ru">info@taskflow.ru</a></p>
          </address>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container">
        <p class="copyright">&copy; 2025 TaskFlow. Все права защищены.</p>
        <div class="social-links">
          <a href="#" aria-label="ВКонтакте"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 2C6.49 2 2 6.49 2 12.017s4.49 10.017 10.017 10.017c2.47 0 4.72-.893 6.47-2.39l-2.39-2.39c-1.16.95-2.74 1.52-4.4 1.52-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5h-3.5v3.5h6V8.5l-3.5 3.5z"/></svg></a>
          <a href="#" aria-label="Telegram"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.6 11.5l-2.4 6.5-1.3-4.5-5.5-3.5 10.7-4.5z"/></svg></a>
          <a href="#" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 6.4c0-.6-.2-1.1-.7-1.4C18.5 4.7 18 4.5 17.4 4.5c-1.5 0-7.2 0-7.2 0S4.5 4.5 3 4.5c-.6 0-1.1.2-1.4.7-.3.4-.5.9-.5 1.5 0 1.1 0 6.6 0 6.6s0 5.5 0 6.6c0 .6.2 1.1.7 1.4.4.3.9.5 1.5.5 1.5 0 7.2 0 7.2 0s5.7 0 7.2 0c.6 0 1.1-.2 1.4-.7.3-.4.5-.9.5-1.5 0-1.1 0-6.6 0-6.6s0-5.5 0-6.6zM9.5 16.5v-7l6.5 3.5-6.5 3.5z"/></svg></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

