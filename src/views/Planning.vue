<template>
  <main class="page-content">
    <section class="page-hero">
        <div class="container">
            <h1>Планирование строительных проектов</h1>
            <p>Создавайте детальные графики работ, назначайте задачи и контролируйте сроки с помощью интерактивной диаграммы Ганта.</p>
        </div>
    </section>

    <section class="planning-section">
        <div class="container">
            <div class="planning-tools">
                <div class="tool-card">
                    <h3>Календарь проектов</h3>
                    <p>Визуализируйте все задачи и вехи в удобном календарном виде.</p>
                    <img src="/images/calendar-view.png" alt="Календарь проектов">
                </div>
                <div class="tool-card">
                    <h3>Диаграмма Ганта</h3>
                    <p>Перетаскивайте задачи, изменяйте сроки, видите зависимости между этапами.</p>
                    <img src="/images/gantt-chart.png" alt="Диаграмма Ганта">
                </div>
            </div>

            <div class="task-management">
                <div class="task-header">
                    <h2>Список задач</h2>
                    <button class="btn btn--primary">+ Создать задачу</button>
                </div>
                <div class="task-filters">
                    <button class="filter-btn active">Все</button>
                    <button class="filter-btn">Активные</button>
                    <button class="filter-btn">Завершённые</button>
                    <button class="filter-btn">Просроченные</button>
                </div>
                <div class="task-list">
                    <div class="task-item">
                        <input type="checkbox">
                        <div class="task-info">
                            <h4>Подготовка площадки</h4>
                            <p>Проект: ЖК “Солнечный”, срок: до 15.05.2025, ответственный: Петров И.А.</p>
                        </div>
                        <div class="task-meta">
                            <span class="priority high">Высокий</span>
                            <span class="date">15.05.2025</span>
                        </div>
                    </div>
                    <div class="task-item">
                        <input type="checkbox">
                        <div class="task-info">
                            <h4>Закупка материалов</h4>
                            <p>Проект: Офисный центр, срок: до 20.05.2025, ответственный: Сидорова М.В.</p>
                        </div>
                        <div class="task-meta">
                            <span class="priority medium">Средний</span>
                            <span class="date">20.05.2025</span>
                        </div>
                    </div>
                    <div class="task-item completed">
                        <input type="checkbox" checked>
                        <div class="task-info">
                            <h4>Разработка сметы</h4>
                            <p>Проект: ТЦ “Мега”, срок: до 10.04.2025, ответственный: Козлов А.Н.</p>
                        </div>
                        <div class="task-meta">
                            <span class="priority low">Низкий</span>
                            <span class="date">10.04.2025</span>
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
