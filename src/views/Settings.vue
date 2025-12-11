<template>
  <main class="page-content">
    <section class="page-hero">
        <div class="container">
            <h1>Настройки</h1>
            <p>Управляйте профилем, уведомлениями и настройками системы</p>
        </div>
    </section>

    <section class="settings-section">
        <div class="container">
            <div class="settings-tabs">
                <button class="tab-btn" :class="{ active: activeTab === 'profile' }" @click="activeTab = 'profile'">Профиль</button>
                <button class="tab-btn" :class="{ active: activeTab === 'notifications' }" @click="activeTab = 'notifications'">Уведомления</button>
                <button class="tab-btn" :class="{ active: activeTab === 'security' }" @click="activeTab = 'security'">Безопасность</button>
                <button class="tab-btn" :class="{ active: activeTab === 'integrations' }" @click="activeTab = 'integrations'">Интеграции</button>
            </div>

            <!-- Профиль -->
            <div class="tab-content" v-show="activeTab === 'profile'">
                <div class="profile-card">
                    <div class="profile-header">
                        <img src="/images/avatar1.jpg" alt="Иван Петров" class="profile-avatar">
                        <div class="profile-info">
                            <h3>Иван Петров</h3>
                            <p>TaskFlow</p>
                        </div>
                    </div>
                    <div class="profile-form">
                        <div class="form-group">
                            <label for="name">Имя</label>
                            <input type="text" id="name" v-model="profile.name">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" v-model="profile.email">
                        </div>
                        <div class="form-group">
                            <label for="phone">Телефон</label>
                            <input type="tel" id="phone" v-model="profile.phone">
                        </div>
                        <div class="form-group">
                            <label for="timezone">Часовой пояс</label>
                            <select id="timezone" v-model="profile.timezone">
                                <option value="UTC+3">Москва (UTC+3)</option>
                                <option value="UTC+2">Санкт-Петербург (UTC+2)</option>
                                <option value="UTC+1">Минск (UTC+3)</option>
                                <option value="UTC+0">Лондон (UTC+0)</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="language">Язык</label>
                            <select id="language" v-model="profile.language">
                                <option value="ru">Русский</option>
                                <option value="en">English</option>
                            </select>
                        </div>
                        <div class="form-actions">
                            <button class="btn btn--primary" @click="saveProfile">Сохранить изменения</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Уведомления -->
            <div class="tab-content" v-show="activeTab === 'notifications'">
                <div class="notifications-card">
                    <h3>Уведомления</h3>
                    <div class="notifications-list">
                        <div class="notification-item">
                            <div class="notification-content">
                                <h4>Уведомления о задачах</h4>
                                <p>Получать уведомления при назначении задач</p>
                            </div>
                            <div class="notification-toggle">
                                <label class="switch">
                                    <input type="checkbox" v-model="notifications.tasks">
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                        <div class="notification-item">
                            <div class="notification-content">
                                <h4>Уведомления о документах</h4>
                                <p>Получать уведомления при загрузке документов</p>
                            </div>
                            <div class="notification-toggle">
                                <label class="switch">
                                    <input type="checkbox" v-model="notifications.documents">
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                        <div class="notification-item">
                            <div class="notification-content">
                                <h4>Уведомления о проектах</h4>
                                <p>Получать уведомления при изменении статуса проекта</p>
                            </div>
                            <div class="notification-toggle">
                                <label class="switch">
                                    <input type="checkbox" v-model="notifications.projects">
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                        <div class="notification-item">
                            <div class="notification-content">
                                <h4>Уведомления о календаре</h4>
                                <p>Получать уведомления о близких датах</p>
                            </div>
                            <div class="notification-toggle">
                                <label class="switch">
                                    <input type="checkbox" v-model="notifications.calendar">
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Безопасность -->
            <div class="tab-content" v-show="activeTab === 'security'">
                <div class="security-card">
                    <h3>Безопасность</h3>
                    <div class="security-item">
                        <div class="security-content">
                            <h4>Пароль</h4>
                            <p>Изменить пароль для входа в систему</p>
                        </div>
                        <button class="btn btn--outline">Изменить</button>
                    </div>
                    <div class="security-item">
                        <div class="security-content">
                            <h4>Двухфакторная аутентификация</h4>
                            <p>Включить двухфакторную аутентификацию для защиты аккаунта</p>
                        </div>
                        <div class="security-toggle">
                            <label class="switch">
                                <input type="checkbox" v-model="security.twoFactor">
                                <span class="slider"></span>
                            </label>
                        </div>
                    </div>
                    <div class="security-item">
                        <div class="security-content">
                            <h4>История входов</h4>
                            <p>Просмотреть последние входы в систему</p>
                        </div>
                        <button class="btn btn--outline">Просмотреть</button>
                    </div>
                </div>
            </div>

            <!-- Интеграции -->
            <div class="tab-content" v-show="activeTab === 'integrations'">
                <div class="integrations-card">
                    <h3>Интеграции</h3>
                    <div class="integrations-list">
                        <div class="integration-item">
                            <div class="integration-content">
                                <img src="/images/integrations/google-calendar.svg" alt="Google Calendar" class="integration-icon">
                                <div class="integration-info">
                                    <h4>Google Calendar</h4>
                                    <p>Синхронизировать задачи и события</p>
                                </div>
                            </div>
                            <button class="btn btn--outline">Синхронизировать</button>
                        </div>
                        <div class="integration-item">
                            <div class="integration-content">
                                <img src="/images/integrations/outlook.svg" alt="Outlook" class="integration-icon">
                                <div class="integration-info">
                                    <h4>Outlook</h4>
                                    <p>Синхронизировать задачи и события</p>
                                </div>
                            </div>
                            <button class="btn btn--outline">Синхронизировать</button>
                        </div>
                        <div class="integration-item">
                            <div class="integration-content">
                                <img src="/images/integrations/slack.svg" alt="Slack" class="integration-icon">
                                <div class="integration-info">
                                    <h4>Slack</h4>
                                    <p>Получать уведомления в Slack</p>
                                </div>
                            </div>
                            <button class="btn btn--outline">Синхронизировать</button>
                        </div>
                        <div class="integration-item">
                            <div class="integration-content">
                                <img src="/images/integrations/zoom.svg" alt="Zoom" class="integration-icon">
                                <div class="integration-info">
                                    <h4>Zoom</h4>
                                    <p>Создавать встречи в Zoom</p>
                                </div>
                            </div>
                            <button class="btn btn--outline">Синхронизировать</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import '../assets/styles/settings.css';

const activeTab = ref('profile');

const profile = ref({
  name: 'Иван Петров',
  email: 'ivan.petrov@example.com',
  phone: '+7 (999) 123-45-67',
  timezone: 'UTC+3',
  language: 'ru'
});

const notifications = ref({
  tasks: true,
  documents: true,
  projects: false,
  calendar: true
});

const security = ref({
  twoFactor: true
});

function saveProfile() {
  alert('Профиль сохранён!');
}
</script>

