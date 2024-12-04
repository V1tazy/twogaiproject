<template>
  <div class="flex flex-col min-h-screen">
    <!-- Main Content -->
    <main class="flex-1 bg-gray-100 p-6">
      <h2 class="text-xl font-semibold mb-4">Карта возможностей</h2>
      <p class="text-gray-600 mb-4">
        Отметь время, когда ты хочешь работать. Если не заполнишь ячейки, значит готов выйти на
        смену в любое время.
      </p>

      <!-- Month Selector -->
      <div class="flex items-center space-x-4 mb-6">
        <button
          @click="prevMonth"
          class="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded shadow"
        >
          ←
        </button>
        <span class="text-lg font-medium">{{ months[currentMonth] }} {{ currentYear }}</span>
        <button
          @click="nextMonth"
          class="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded shadow"
        >
          →
        </button>
      </div>

      <!-- Schedule -->
      <div>
        <!-- Weekdays -->
        <div class="grid grid-cols-7 gap-2 text-center font-semibold text-gray-700 mb-2">
          <div v-for="day in weekdays" :key="day">{{ day }}</div>
        </div>

        <!-- Days -->
        <div class="grid grid-cols-7 gap-2">
          <div
            v-for="(day, index) in daysInMonth"
            :key="index"
            class="border p-3 rounded-lg text-center bg-white shadow-sm hover:shadow-md"
          >
            {{ day }}
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      weekdays: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
      months: [
        "январь",
        "февраль",
        "март",
        "апрель",
        "май",
        "июнь",
        "июль",
        "август",
        "сентябрь",
        "октябрь",
        "ноябрь",
        "декабрь",
      ],
    };
  },
  computed: {
    // Автоматическая генерация дней текущего месяца
    daysInMonth() {
      const days = [];
      const date = new Date(this.currentYear, this.currentMonth, 1);
      while (date.getMonth() === this.currentMonth) {
        days.push(new Date(date).toLocaleDateString("ru-RU"));
        date.setDate(date.getDate() + 1);
      }
      return days;
    },
  },
  methods: {
    prevMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
  },
};
</script>