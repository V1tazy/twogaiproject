<template>
  <div class="bg-gray-100 min-h-screen">
    <!-- Main Content -->
    <div class="container mx-auto p-6">
      <h1 class="text-xl font-bold mb-4">График смены</h1>

      <!-- Info Block -->
      <div class="bg-blue-50 p-4 rounded border border-blue-200 mb-6">
        По всем вопросам графика смен обращайтесь:
        <strong>Недорезов Игорь Вячеславович</strong> /
        <a href="mailto:lnedorezov719@gmail.com" class="text-blue-600 underline">
          lnedorezov719@gmail.com
        </a>
      </div>

      <!-- Date Selector -->
      <div class="flex items-center space-x-4 mb-6">
        <input type="date" class="border rounded px-4 py-2" />
        <button class="bg-blue-500 text-white px-4 py-2 rounded">→</button>
      </div>

      <!-- Schedule Table -->
      <div class="grid grid-cols-7 gap-4">
        <div
          v-for="(day, index) in weekDays"
          :key="index"
          class="text-center border rounded p-2"
        >
          <h3 class="font-bold">{{ day.date }}</h3>
          <p class="text-sm">{{ day.shift }}</p>
        </div>
      </div>

      <!-- Shift Details -->
      <div class="mt-6">
        <h2 class="font-bold text-lg mb-4">Чита-1</h2>
        <table class="w-full border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-200">
              <th class="border border-gray-300 px-4 py-2">Время</th>
              <th class="border border-gray-300 px-4 py-2">Сотрудник</th>
              <th class="border border-gray-300 px-4 py-2">Роль</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="shift in shifts" :key="shift.id">
              <td class="border border-gray-300 px-4 py-2">{{ shift.time }}</td>
              <td class="border border-gray-300 px-4 py-2">{{ shift.employee }}</td>
              <td class="border border-gray-300 px-4 py-2">{{ shift.role }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weekDays: [
        { date: "18 ноября", shift: "" },
        { date: "19 ноября", shift: "" },
        { date: "20 ноября", shift: "10:00 — 18:00" },
        { date: "21 ноября", shift: "7:30 — 16:00" },
        { date: "22 ноября", shift: "" },
        { date: "23 ноября", shift: "7:30 — 16:00" },
        { date: "24 ноября", shift: "12:00 — 20:00" },
      ],
      shifts: [
        { id: 1, time: "7:15 — 18:00", employee: "Козлов Михаил", role: "Менеджер" },
        { id: 2, time: "7:15 — 16:00", employee: "Недорезов Игорь", role: "Менеджер" },
        {
          id: 3,
          time: "15:15 — 00:00",
          employee: "Игнатьева Елизавета",
          role: "Менеджер",
        },
        { id: 4, time: "7:30 — 20:00", employee: "Бабкин Артём", role: "Горячий цех" },
        { id: 5, time: "8:00 — 19:45", employee: "Ермакова Ольга", role: "Горячий цех" },
        { id: 6, time: "12:00 — 20:00", employee: "Макуни Гай", role: "Горячий цех" },
      ],
    };
  },
};
</script>

<style>
/* Tailwind уже содержит большинство необходимых стилей */
</style>
