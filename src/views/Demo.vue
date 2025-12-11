<template>
  <main class="demo-page">
    <section class="demo-hero">
        <div class="container">
            <h1>Запросите персональную демо-версию</h1>
            <p>Оставьте свои контакты, и наш менеджер свяжется с вами в течение 15 минут, чтобы организовать демонстрацию системы.</p>
        </div>
    </section>

    <section class="demo-form-section">
        <div class="container">
            <div class="form-container">
                <form class="demo-form" @submit.prevent="submitDemoForm">
                    <div class="form-group">
                        <label for="name">Ваше имя *</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="company">Компания *</label>
                        <input type="text" id="company" name="company" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Телефон *</label>
                        <input type="tel" id="phone" name="phone" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Комментарий</label>
                        <textarea id="message" name="message" rows="4" placeholder="Расскажите, какие задачи вы хотите решить с помощью TaskFlow"></textarea>
                    </div>
                    <button type="submit" class="btn btn--primary btn--xlarge">Отправить заявку</button>
                </form>
            </div>
        </div>
    </section>
  </main>
</template>

<script setup>
function submitDemoForm(event) {
  alert('Спасибо! Ваша заявка отправлена. Менеджер свяжется с вами в ближайшее время.');
  event.target.reset();
}
</script>
