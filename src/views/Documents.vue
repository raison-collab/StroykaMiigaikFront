<template>
  <main class="page-content">
    <section class="page-hero">
        <div class="container">
            <h1>Документы</h1>
            <p>Управляйте документооборотом по проектам</p>
        </div>
    </section>

    <section class="documents-section">
        <div class="container">
            <div class="documents-header">
                <div class="search-box">
                    <input type="text" placeholder="Поиск по документам..." v-model="searchQuery">
                    <button class="btn btn--outline">🔍</button>
                </div>
                <button class="btn btn--primary">+ Загрузить документ</button>
            </div>

            <div class="documents-filters">
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
                    <label>Тип:</label>
                    <select v-model="selectedType">
                        <option>Все</option>
                        <option>Смета</option>
                        <option>Акт</option>
                        <option>Договор</option>
                        <option>Чертеж</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label>Статус:</label>
                    <select v-model="selectedStatus">
                        <option>Все</option>
                        <option>Черновик</option>
                        <option>На согласовании</option>
                        <option>Подписан</option>
                    </select>
                </div>
            </div>

            <div class="documents-list">
                <div class="doc-item" @click="openDocumentModal('Смета_ЖК_Солнечный_v3.pdf')">
                    <div class="doc-header">
                        <div class="doc-icon">📄</div>
                        <div class="doc-info">
                            <h4>Смета_ЖК_Солнечный_v3.pdf</h4>
                            <p>Проект: ЖК "Солнечный"</p>
                        </div>
                        <div class="doc-actions">
                            <button class="btn btn--outline btn--small" @click.stop>Редактировать</button>
                            <button class="btn btn--primary btn--small" @click.stop>Открыть</button>
                        </div>
                    </div>
                    <div class="doc-meta">
                        <div class="meta-item">
                            <span class="meta-label">Ответственный:</span>
                            <span class="meta-value">Петров И.А.</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Дата:</span>
                            <span class="meta-value">12.04.2025</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Размер:</span>
                            <span class="meta-value">2.1 МБ</span>
                        </div>
                    </div>
                </div>

                <div class="doc-item" @click="openDocumentModal('Акт_приемки_ТЦ_Мега_этап1.pdf')">
                    <div class="doc-header">
                        <div class="doc-icon">📄</div>
                        <div class="doc-info">
                            <h4>Акт_приемки_ТЦ_Мега_этап1.pdf</h4>
                            <p>Проект: ТЦ "Мега"</p>
                        </div>
                        <div class="doc-actions">
                            <button class="btn btn--outline btn--small" @click.stop>Редактировать</button>
                            <button class="btn btn--primary btn--small" @click.stop>Открыть</button>
                        </div>
                    </div>
                    <div class="doc-meta">
                        <div class="meta-item">
                            <span class="meta-label">Ответственный:</span>
                            <span class="meta-value">Козлов А.Н.</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Дата:</span>
                            <span class="meta-value">05.04.2025</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Размер:</span>
                            <span class="meta-value">1.8 МБ</span>
                        </div>
                    </div>
                </div>

                <div class="doc-item" @click="openDocumentModal('Договор_подряда_Офис_Ленина.pdf')">
                    <div class="doc-header">
                        <div class="doc-icon">📄</div>
                        <div class="doc-info">
                            <h4>Договор_подряда_Офис_Ленина.pdf</h4>
                            <p>Проект: Офисный центр</p>
                        </div>
                        <div class="doc-actions">
                            <button class="btn btn--outline btn--small" @click.stop>Редактировать</button>
                            <button class="btn btn--primary btn--small" @click.stop>Открыть</button>
                        </div>
                    </div>
                    <div class="doc-meta">
                        <div class="meta-item">
                            <span class="meta-label">Ответственный:</span>
                            <span class="meta-value">Сидорова М.В.</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Дата:</span>
                            <span class="meta-value">20.03.2025</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Размер:</span>
                            <span class="meta-value">3.2 МБ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Модальное окно документа -->
    <div class="modal-overlay" v-if="showModal" @click="closeModal">
        <div class="modal-content" @click.stop>
            <div class="modal-header">
                <h3>{{ selectedDocumentName }}</h3>
                <button class="modal-close" @click="closeModal" aria-label="Закрыть модальное окно">×</button>
            </div>
            <div class="modal-body">
                <div class="modal-section">
                    <h4>Общая информация</h4>
                    <div class="modal-info">
                        <div class="info-item">
                            <span class="info-label">Проект:</span>
                            <span class="info-value">ЖК "Солнечный"</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Ответственный:</span>
                            <span class="info-value">Петров И.А.</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Дата:</span>
                            <span class="info-value">12.04.2025</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Размер:</span>
                            <span class="info-value">2.1 МБ</span>
                        </div>
                    </div>
                </div>

                <div class="modal-section">
                    <h4>Содержание</h4>
                    <ul class="doc-content-list">
                        <li>1. Общие сведения</li>
                        <li>2. Сметная стоимость</li>
                        <li>3. Смета по этапам</li>
                        <li>4. Приложения</li>
                    </ul>
                </div>

                <div class="modal-section">
                    <h4>Действия</h4>
                    <div class="doc-actions">
                        <button class="btn btn--outline">Скачать</button>
                        <button class="btn btn--primary">Открыть в PDF</button>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn--outline" @click="closeModal">Закрыть</button>
            </div>
        </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import '../assets/styles/documents.css';
import '../assets/styles/dashboard.css';

const showModal = ref(false);
const selectedDocumentName = ref('');
const searchQuery = ref('');
const selectedProject = ref('Все');
const selectedType = ref('Все');
const selectedStatus = ref('Все');

function openDocumentModal(documentName) {
  selectedDocumentName.value = documentName;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
</script>

