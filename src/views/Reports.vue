<template>
  <main class="page-content">
    <section class="page-hero">
        <div class="container">
            <h1>Отчёты</h1>
            <p>Аналитика и отчёты по проектам</p>
        </div>
    </section>

    <section class="reports-section">
        <div class="container">
            <div class="reports-header">
                <div class="report-filters">
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
                        <label>Период:</label>
                        <select v-model="selectedPeriod">
                            <option>За месяц</option>
                            <option>За квартал</option>
                            <option>За год</option>
                        </select>
                    </div>
                </div>
                <button class="btn btn--primary">Создать отчёт</button>
            </div>

            <div class="reports-grid">
                <div class="report-card">
                    <div class="report-header">
                        <h3>Прогресс по проекту: ЖК "Солнечный"</h3>
                        <div class="report-date">Июнь 2025</div>
                    </div>
                    <div class="report-content">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 65%;"></div>
                        </div>
                        <div class="progress-text">65% завершено</div>
                        <div class="report-stats">
                            <div class="stat-item">
                                <div class="stat-label">Задачи выполнено</div>
                                <div class="stat-value">12/18</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-label">Сроки соблюдены</div>
                                <div class="stat-value">8/12</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-label">Бюджет</div>
                                <div class="stat-value">120 млн руб.</div>
                            </div>
                        </div>
                    </div>
                    <div class="report-actions">
                        <button class="btn btn--outline btn--small">Скачать PDF</button>
                        <button class="btn btn--primary btn--small">Открыть</button>
                    </div>
                </div>

                <div class="report-card">
                    <div class="report-header">
                        <h3>Финансовый отчёт: Офисный центр</h3>
                        <div class="report-date">Июнь 2025</div>
                    </div>
                    <div class="report-content">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 45%;"></div>
                        </div>
                        <div class="progress-text">45% завершено</div>
                        <div class="report-stats">
                            <div class="stat-item">
                                <div class="stat-label">Задачи выполнено</div>
                                <div class="stat-value">9/20</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-label">Сроки соблюдены</div>
                                <div class="stat-value">5/15</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-label">Бюджет</div>
                                <div class="stat-value">80 млн руб.</div>
                            </div>
                        </div>
                    </div>
                    <div class="report-actions">
                        <button class="btn btn--outline btn--small">Скачать PDF</button>
                        <button class="btn btn--primary btn--small">Открыть</button>
                    </div>
                </div>

                <div class="report-card">
                    <div class="report-header">
                        <h3>Отчёт по документам: ТЦ "Мега"</h3>
                        <div class="report-date">Июнь 2025</div>
                    </div>
                    <div class="report-content">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 100%;"></div>
                        </div>
                        <div class="progress-text">100% завершено</div>
                        <div class="report-stats">
                            <div class="stat-item">
                                <div class="stat-label">Документов загружено</div>
                                <div class="stat-value">32</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-label">Подписано</div>
                                <div class="stat-value">28</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-label">Черновики</div>
                                <div class="stat-value">4</div>
                            </div>
                        </div>
                    </div>
                    <div class="report-actions">
                        <button class="btn btn--outline btn--small">Скачать PDF</button>
                        <button class="btn btn--primary btn--small">Открыть</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import '../assets/styles/reports.css';

const selectedProject = ref('Все');
const selectedPeriod = ref('За месяц');
</script>

