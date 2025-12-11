<template>
  <main class="login-page">
    <div class="login-container">
      <div class="login-form-container">
        <div class="logo">
          <img src="/images/logo.svg" alt="TaskFlow Logo">
          <span>TaskFlow</span>
        </div>
        <h2>Вход в систему</h2>
        <p>Пожалуйста, введите ваши данные для входа.</p>
        <form class="login-form" @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="email">Email или Логин</label>
            <input type="text" id="email" name="email" required v-model="email">
          </div>
          <div class="form-group">
            <label for="password">Пароль</label>
            <input type="password" id="password" name="password" required v-model="password">
          </div>
          <div class="form-options">
            <label class="remember-me">
              <input type="checkbox" name="remember"> Запомнить меня
            </label>
            <a href="#" class="forgot-password">Забыли пароль?</a>
          </div>
          <button type="submit" class="btn btn--primary btn--xlarge">Войти</button>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

function handleLogin() {
  // Mock login logic
  console.log('Logging in with:', email.value, password.value);
  // On successful login, you would typically redirect
  alert('Вход выполнен (симуляция)! Перенаправление на главную страницу.');
  router.push('/');
}
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 150px); /* Adjust based on header/footer height */
  background-color: var(--bg-gray);
}

.login-container {
  width: 100%;
  max-width: 450px;
  margin: 40px 0;
}

.login-form-container {
  background: var(--bg-light);
  padding: 40px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  text-align: center;
}

.login-form-container .logo {
  justify-content: center;
  margin-bottom: 20px;
}

.login-form-container h2 {
  margin-bottom: 10px;
  font-size: 1.8rem;
}

.login-form-container p {
  margin-bottom: 30px;
  color: var(--text-light);
}

.login-form {
  text-align: left;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 1rem;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  font-size: 0.9rem;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.forgot-password {
  color: var(--primary-color);
  text-decoration: none;
}
.forgot-password:hover {
  text-decoration: underline;
}

.login-form button {
  width: 100%;
}
</style>
