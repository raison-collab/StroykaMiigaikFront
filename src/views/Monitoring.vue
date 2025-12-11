<template>
  <main class="page-content">
    <section class="page-hero">
        <div class="container">
            <h1>Контроль этапов строительства</h1>
            <p>Отслеживайте прогресс по каждому объекту в реальном времени. Вовремя выявляйте отставания и управляйте рисками.</p>
        </div>
    </section>

    <section class="dashboard-section">
        <div class="container">
            <div class="dashboard-cards">
                <div class="stat-card">
                    <div class="stat-value">24</div>
                    <div class="stat-label">Активных проектов</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">87%</div>
                    <div class="stat-label">Средний прогресс</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">3</div>
                    <div class="stat-label">Просроченных задачи</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">12</div>
                    <div class="stat-label">Завершено на этой неделе</div>
                </div>
            </div>

            <div class="chart-container">
                <h2>Прогресс по проектам</h2>
                <div class="chart-placeholder">
                    <!-- Здесь будет график (на фронте — Chart.js) -->
                    <img src="/images/chart-progress.png" alt="График прогресса по проектам">
                </div>
            </div>

            <div class="recent-activities">
                <h2>Последние обновления</h2>
                <div class="activity-list">
                    <div class="activity-item">
                        <div class="activity-status status-done"></div>
                        <div class="activity-content">
                            <h4>Заливка фундамента — Завершено</h4>
                            <p>Проект “Офисный центр на Ленина”, ответственный: Иванов А.П.</p>
                            <time>Сегодня, 14:30</time>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-status status-delayed"></div>
                        <div class="activity-content">
                            <h4>Монтаж кровли — Задержка</h4>
                            <p>Проект “ЖК “Солнечный”, срок сдвинут на 3 дня из-за погоды.</p>
                            <time>Вчера, 16:15</time>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-status status-planned"></div>
                        <div class="activity-content">
                            <h4>Сдача в эксплуатацию — Запланировано</h4>
                            <p>Проект “Торговый центр “Мега”, дата: 15.06.2025</p>
                            <time>10.04.2025</time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </main>
</template>

<script setup>
</script>
