<template>
  <main class="page-content">
    <section class="page-hero">
        <div class="container">
            <h1>Дашборд</h1>
            <p>Обзор текущего состояния всех ваших проектов и задач</p>
        </div>
    </section>

    <section class="dashboard-section">
        <div class="container">
            <div class="dashboard-stats">
                <div class="stat-card">
                    <div class="stat-value">5</div>
                    <div class="stat-label">Активных проектов</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">3</div>
                    <div class="stat-label">Просроченных задач</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">7</div>
                    <div class="stat-label">Документов на согласовании</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">15.06.2025</div>
                    <div class="stat-label">Ближайший дедлайн</div>
                </div>
            </div>

            <div class="recent-activities">
                <h2>Последние действия</h2>
                <div class="activity-list">
                    <div class="activity-item">
                        <div class="activity-icon status-done"></div>
                        <div class="activity-content">
                            <h4>Завершена задача: Монтаж кровли</h4>
                            <p>Проект: ЖК "Солнечный"</p>
                            <time>Сегодня, 14:30</time>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon status-review"></div>
                        <div class="activity-content">
                            <h4>Новый документ: Смета_v4.pdf</h4>
                            <p>Проект: Офисный центр</p>
                            <time>Вчера, 16:15</time>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon status-draft"></div>
                        <div class="activity-content">
                            <h4>Новая задача: Подписание договора</h4>
                            <p>Проект: ТЦ "Мега"</p>
                            <time>10.04.2025</time>
                        </div>
                    </div>
                </div>
            </div>

            <div class="projects-grid">
                <h2>Ваши проекты</h2>
                <div class="project-card" @click="openProjectModal(1)">
                    <div class="project-header">
                        <h3>ЖК "Солнечный"</h3>
                        <div class="project-status status-active">В работе</div>
                    </div>
                    <div class="project-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 65%;"></div>
                        </div>
                        <div class="progress-text">65% завершено</div>
                    </div>
                    <div class="project-meta">
                        <div class="meta-item">
                            <span class="meta-label">Ответственный:</span>
                            <span class="meta-value">Петров И.А.</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Срок:</span>
                            <span class="meta-value">15.06.2025</span>
                        </div>
                    </div>
                    <div class="project-actions">
                        <button class="btn btn--outline btn--small" @click.stop>Редактировать</button>
                        <button class="btn btn--primary btn--small" @click.stop>Открыть</button>
                    </div>
                </div>

                <div class="project-card" @click="openProjectModal(2)">
                    <div class="project-header">
                        <h3>Офисный центр на Ленина</h3>
                        <div class="project-status status-paused">Приостановлен</div>
                    </div>
                    <div class="project-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 30%;"></div>
                        </div>
                        <div class="progress-text">30% завершено</div>
                    </div>
                    <div class="project-meta">
                        <div class="meta-item">
                            <span class="meta-label">Ответственный:</span>
                            <span class="meta-value">Сидорова М.В.</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Срок:</span>
                            <span class="meta-value">10.05.2025</span>
                        </div>
                    </div>
                    <div class="project-actions">
                        <button class="btn btn--outline btn--small" @click.stop>Редактировать</button>
                        <button class="btn btn--primary btn--small" @click.stop>Открыть</button>
                    </div>
                </div>

                <div class="project-card" @click="openProjectModal(3)">
                    <div class="project-header">
                        <h3>ТЦ "Мега"</h3>
                        <div class="project-status status-completed">Завершён</div>
                    </div>
                    <div class="project-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 100%;"></div>
                        </div>
                        <div class="progress-text">100% завершено</div>
                    </div>
                    <div class="project-meta">
                        <div class="meta-item">
                            <span class="meta-label">Ответственный:</span>
                            <span class="meta-value">Козлов А.Н.</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Срок:</span>
                            <span class="meta-value">05.04.2025</span>
                        </div>
                    </div>
                    <div class="project-actions">
                        <button class="btn btn--outline btn--small" @click.stop>Редактировать</button>
                        <button class="btn btn--primary btn--small" @click.stop>Открыть</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Модальное окно проекта -->
    <div class="modal-overlay" v-if="showModal" @click="closeModal">
        <div class="modal-content" @click.stop>
            <div class="modal-header">
                <h3>{{ selectedProjectName }}</h3>
                <button class="modal-close" @click="closeModal" aria-label="Закрыть модальное окно">×</button>
            </div>
            <div class="modal-body">
                <div class="modal-section">
                    <h4>Общая информация</h4>
                    <div class="modal-info">
                        <div class="info-item">
                            <span class="info-label">Статус:</span>
                            <span class="info-value status-active">В работе</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Ответственный:</span>
                            <span class="info-value">Петров И.А.</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Срок:</span>
                            <span class="info-value">15.06.2025</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Бюджет:</span>
                            <span class="info-value">120 млн руб.</span>
                        </div>
                    </div>
                </div>

                <div class="modal-section">
                    <h4>Прогресс</h4>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 65%;"></div>
                    </div>
                    <div class="progress-text">65% завершено</div>
                </div>

                <div class="modal-section">
                    <h4>Задачи</h4>
                    <ul class="task-list">
                        <li class="task-item">
                            <input type="checkbox" checked>
                            <span class="task-text">Монтаж фундамента</span>
                            <span class="task-status status-done">Выполнено</span>
                        </li>
                        <li class="task-item">
                            <input type="checkbox">
                            <span class="task-text">Заливка бетона</span>
                            <span class="task-status status-active">В работе</span>
                        </li>
                        <li class="task-item">
                            <input type="checkbox">
                            <span class="task-text">Подписание договора</span>
                            <span class="task-status status-review">На согласовании</span>
                        </li>
                    </ul>
                </div>

                <div class="modal-section">
                    <h4>Документы</h4>
                    <ul class="doc-list">
                        <li class="doc-item">
                            <span class="doc-icon">📄</span>
                            <span class="doc-name">Смета_ЖК_Солнечный_v3.pdf</span>
                            <span class="doc-status status-signed">Подписан</span>
                        </li>
                        <li class="doc-item">
                            <span class="doc-icon">📄</span>
                            <span class="doc-name">Акт_приемки_ТЦ_Мега_этап1.pdf</span>
                            <span class="doc-status status-draft">Черновик</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn--outline" @click="closeModal">Закрыть</button>
                <button class="btn btn--primary">Редактировать проект</button>
            </div>
        </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import '../assets/styles/dashboard.css';

const showModal = ref(false);
const selectedProjectName = ref('ЖК "Солнечный"');

function openProjectModal(projectId) {
  const projectNames = {
    1: 'ЖК "Солнечный"',
    2: 'Офисный центр на Ленина',
    3: 'ТЦ "Мега"'
  };
  selectedProjectName.value = projectNames[projectId] || 'Проект';
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
</script>

