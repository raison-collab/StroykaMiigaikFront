<template>
  <main class="page-content">
    <section class="page-hero">
        <div class="container">
            <h1>Календарь</h1>
            <p>Визуализация сроков и задач по проектам</p>
        </div>
    </section>

    <section class="calendar-section">
        <div class="container">
            <div class="calendar-header">
                <div class="calendar-nav">
                    <button class="btn btn--outline" @click="prevMonth">←</button>
                    <h2>{{ currentMonth }}</h2>
                    <button class="btn btn--outline" @click="nextMonth">→</button>
                </div>
                <div class="calendar-view-switch">
                    <button class="btn btn--outline" :class="{ active: view === 'day' }" @click="view = 'day'">День</button>
                    <button class="btn btn--outline" :class="{ active: view === 'week' }" @click="view = 'week'">Неделя</button>
                    <button class="btn btn--primary" :class="{ active: view === 'month' }" @click="view = 'month'">Месяц</button>
                </div>
            </div>

            <div class="calendar-grid">
                <!-- Дни недели -->
                <div class="calendar-day-header">
                    <div class="day-name">Пн</div>
                    <div class="day-name">Вт</div>
                    <div class="day-name">Ср</div>
                    <div class="day-name">Чт</div>
                    <div class="day-name">Пт</div>
                    <div class="day-name">Сб</div>
                    <div class="day-name">Вс</div>
                </div>

                <!-- Клетки календаря -->
                <div 
                    v-for="(day, index) in calendarDays" 
                    :key="index" 
                    class="calendar-day"
                    :class="{ 'calendar-day--today': day.isToday }"
                >
                    <div v-if="day.date" class="calendar-date">{{ day.date }}</div>
                    <div v-if="day.event" class="calendar-event">{{ day.event }}</div>
                </div>
            </div>
        </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import '../assets/styles/calendar.css';

const view = ref('month');
const currentDate = ref(new Date()); // Текущая дата

const currentMonth = computed(() => {
  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  return `${months[currentDate.value.getMonth()]} ${currentDate.value.getFullYear()}`;
});

const calendarDays = computed(() => {
  const days = [];
  const today = new Date();
  const firstDay = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), 1);
  const lastDay = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 0);
  const startDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // Понедельник = 0
  
  // Заполняем пустые дни в начале месяца
  for (let i = 0; i < startDayOfWeek; i++) {
    days.push({ date: null, event: null, isToday: false });
  }
  
  // Заполняем дни месяца
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const dayDate = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), i);
    const isToday = 
      dayDate.getDate() === today.getDate() &&
      dayDate.getMonth() === today.getMonth() &&
      dayDate.getFullYear() === today.getFullYear();
    
    days.push({
      date: i,
      event: i === 1 ? 'Начало работ' : i === 2 || i % 3 === 0 ? 'Совещание' : i === 29 ? 'Заказ материалов' : i === 30 ? 'Совещание' : null,
      isToday: isToday
    });
  }
  
  // Заполняем оставшиеся дни до 42 клеток (6 недель) - дни следующего месяца
  const totalCells = 42;
  const remainingDays = totalCells - days.length;
  const nextMonth = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);
  for (let i = 1; i <= remainingDays; i++) {
    days.push({ date: i, event: null, isToday: false, isNextMonth: true });
  }
  
  return days;
});

function prevMonth() {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1);
}

function nextMonth() {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);
}
</script>

