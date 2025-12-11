<template>
  <main class="page-content">
    <section class="page-hero">
        <div class="container">
            <h1>Задачи</h1>
            <p>Управляйте задачами по проектам и проектам</p>
        </div>
    </section>

    <section class="tasks-section">
        <div class="container">
            <div class="tasks-header">
                <div class="search-box">
                    <input type="text" placeholder="Поиск по задачам..." v-model="searchQuery">
                    <button class="btn btn--outline">🔍</button>
                </div>
                <button class="btn btn--primary">+ Создать задачу</button>
            </div>

            <div class="tasks-filters">
                <div class="filter-group">
                    <label>Проект:</label>
                    <select v-model="selectedProject">
                        <option>Все</option>
                        <option>ЖК "Солнечный"</option>
                        <option>Офисный центр</option>
                        <option>ТЦ "Мега"</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label>Статус:</label>
                    <select v-model="selectedStatus">
                        <option>Все</option>
                        <option>Новая</option>
                        <option>В работе</option>
                        <option>Завершена</option>
                        <option>Просрочена</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label>Исполнитель:</label>
                    <select v-model="selectedExecutor">
                        <option>Все</option>
                        <option>Петров И.А.</option>
                        <option>Сидорова М.В.</option>
                        <option>Козлов А.Н.</option>
                    </select>
                </div>
            </div>

            <div class="tasks-list">
                <div class="task-item">
                    <div class="task-header">
                        <div class="task-checkbox">
                            <input type="checkbox" checked>
                        </div>
                        <div class="task-info">
                            <h4>Монтаж фундамента</h4>
                            <p>Проект: ЖК "Солнечный"</p>
                        </div>
                        <div class="task-actions">
                            <button class="btn btn--outline btn--small">Редактировать</button>
                            <button class="btn btn--primary btn--small">Открыть</button>
                        </div>
                    </div>
                    <div class="task-meta">
                        <div class="meta-item">
                            <span class="meta-label">Исполнитель:</span>
                            <span class="meta-value">Петров И.А.</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Срок:</span>
                            <span class="meta-value">15.06.2025</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Статус:</span>
                            <span class="meta-value status-active">В работе</span>
                        </div>
                    </div>
                </div>

                <div class="task-item">
                    <div class="task-header">
                        <div class="task-checkbox">
                            <input type="checkbox">
                        </div>
                        <div class="task-info">
                            <h4>Заливка бетона</h4>
                            <p>Проект: ЖК "Солнечный"</p>
                        </div>
                        <div class="task-actions">
                            <button class="btn btn--outline btn--small">Редактировать</button>
                            <button class="btn btn--primary btn--small">Открыть</button>
                        </div>
                    </div>
                    <div class="task-meta">
                        <div class="meta-item">
                            <span class="meta-label">Исполнитель:</span>
                            <span class="meta-value">Сидорова М.В.</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Срок:</span>
                            <span class="meta-value">10.06.2025</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Статус:</span>
                            <span class="meta-value status-review">На согласовании</span>
                        </div>
                    </div>
                </div>

                <div class="task-item">
                    <div class="task-header">
                        <div class="task-checkbox">
                            <input type="checkbox">
                        </div>
                        <div class="task-info">
                            <h4>Подписание договора</h4>
                            <p>Проект: ТЦ "Мега"</p>
                        </div>
                        <div class="task-actions">
                            <button class="btn btn--outline btn--small">Редактировать</button>
                            <button class="btn btn--primary btn--small">Открыть</button>
                        </div>
                    </div>
                    <div class="task-meta">
                        <div class="meta-item">
                            <span class="meta-label">Исполнитель:</span>
                            <span class="meta-value">Козлов А.Н.</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Срок:</span>
                            <span class="meta-value">05.06.2025</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Статус:</span>
                            <span class="meta-value status-draft">Черновик</span>
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
import '../assets/styles/tasks.css';

const searchQuery = ref('');
const selectedProject = ref('Все');
const selectedStatus = ref('Все');
const selectedExecutor = ref('Все');
</script>

