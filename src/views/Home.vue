<template>
  <main>
    <!-- Главный баннер (Hero Section) -->
    <section class="hero">
        <div class="container hero__container">
            <div class="hero__content">
                <h1 class="hero__title">Управляйте строительными проектами эффективно и без стресса</h1>
                <p class="hero__subtitle">Единая платформа для планирования, контроля, управления ресурсами и документацией. Повысьте прозрачность и сдайте объекты в срок.</p>
                <div class="hero__cta">
                    <router-link to="/demo" class="btn btn--primary btn--large">Запросить демо</router-link>
                </div>
            </div>
            <div class="hero__image">
                <img src="/images/hero-dashboard.png" alt="Интерфейс TaskFlow">
            </div>
        </div>
    </section>

    <!-- Преимущества -->
    <section class="features">
        <div class="container">
            <h2 class="section-title">Все в одном месте</h2>
            <p class="section-subtitle">Забудьте о бесконечных email-переписках и потерянных файлах. TaskFlow объединяет все процессы.</p>
            <div class="features__grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </div>
                    <h3 class="feature-title">Планирование проектов</h3>
                    <p class="feature-desc">Создавайте детальные графики работ, ставьте задачи и контролируйте сроки с помощью диаграмм Ганта.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v8m0 0V2m0 8h8m-8 0H4m16 4a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 class="feature-title">Контроль этапов</h3>
                    <p class="feature-desc">Отслеживайте прогресс в реальном времени. Видите, что сделано, а что требует внимания.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 010-5H20v-5z"></path></svg>
                    </div>
                    <h3 class="feature-title">Документооборот</h3>
                    <p class="feature-desc">Храните, подписывайте и находите все документы мгновенно. Версионность и доступ по ролям.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Как это работает -->
    <section class="how-it-works">
        <div class="container">
            <h2 class="section-title">Как начать работать с TaskFlow?</h2>
            <div class="steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <h3 class="step-title">Запросите демо</h3>
                    <p class="step-desc">Оставьте заявку, и наш менеджер свяжется с вами для демонстрации системы.</p>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <h3 class="step-title">Настройте систему</h3>
                    <p class="step-desc">Мы поможем настроить TaskFlow под ваши процессы и импортируем ваши данные.</p>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <h3 class="step-title">Обучите команду</h3>
                    <p class="step-desc">Проведем обучение для ваших сотрудников. Начните работать эффективнее уже на следующей неделе.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Отзывы -->
    <section class="testimonials">
        <div class="container">
            <h2 class="section-title">Что говорят наши клиенты</h2>
            <div class="testimonials__grid">
                <div class="testimonial-card">
                    <p class="testimonial-text">«С TaskFlow мы сократили сроки отчетности на 40% и полностью прозрачно видим статус каждого проекта. Это революция в нашем управлении!»</p>
                    <div class="testimonial-author">
                        <img src="/images/avatar1.jpg" alt="Иван Петров" class="author-avatar">
                        <div class="author-info">
                            <h4 class="author-name">Иван Петров</h4>
                            <p class="author-position">Руководитель проектов, СК "Горизонт"</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">«Наконец-то все документы в одном месте! Больше не нужно искать нужный акт по десятку папок. Экономия времени колоссальная.»</p>
                    <div class="testimonial-author">
                        <img src="/images/avatar2.jpg" alt="Мария Сидорова" class="author-avatar">
                        <div class="author-info">
                            <h4 class="author-name">Мария Сидорова</h4>
                            <p class="author-position">Главный бухгалтер, СК "СтройГрад"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Призыв к действию (CTA) -->
    <section class="cta">
        <div class="container cta__container">
            <h2 class="cta__title">Готовы оптимизировать управление проектами?</h2>
            <p class="cta__subtitle">Запросите бесплатную демо-версию и убедитесь, как TaskFlow может изменить ваш бизнес.</p>
            <router-link to="/demo" class="btn btn--primary btn--xlarge">Запросить демо сейчас</router-link>
        </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
