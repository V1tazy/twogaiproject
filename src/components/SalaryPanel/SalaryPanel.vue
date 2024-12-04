<template>
    <div class="p-6 bg-gray-100 min-h-screen">
      <!-- Заголовок -->
      <header class="mb-6">
        <h1 class="text-2xl font-bold text-gray-800">Отчет по зарплате</h1>
      </header>
  
      <!-- Фильтры -->
      <div class="bg-white p-4 rounded-md shadow-md flex items-center justify-between mb-6">
        <div class="flex gap-4">
          <div>
            <label for="pizzeria" class="block text-sm font-medium text-gray-700">Пиццерия</label>
            <select id="pizzeria" class="mt-1 block w-full p-2 border rounded-md">
              <option>Все</option>
              <option>Чита-1</option>
            </select>
          </div>
          <div>
            <label for="date-from" class="block text-sm font-medium text-gray-700">С</label>
            <input
              type="date"
              id="date-from"
              class="mt-1 block w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label for="date-to" class="block text-sm font-medium text-gray-700">По</label>
            <input
              type="date"
              id="date-to"
              class="mt-1 block w-full p-2 border rounded-md"
            />
          </div>
        </div>
        <button class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Построить</button>
      </div>
  
      <!-- Таблица -->
      <div class="overflow-x-auto bg-white rounded-md shadow-md">
        <table class="w-full text-sm text-gray-700">
          <thead class="bg-gray-50 text-gray-600 uppercase text-xs font-bold">
            <tr>
              <th class="p-3 text-left">Дата</th>
              <th class="p-3 text-left">Пиццерия</th>
              <th class="p-3 text-left">Категория</th>
              <th class="p-3 text-left">Часы</th>
              <th class="p-3 text-left">Зарплата</th>
              <th class="p-3 text-left">Ночь</th>
              <th class="p-3 text-left">Заказы</th>
              <th class="p-3 text-left">Километраж</th>
              <th class="p-3 text-left">Поездки</th>
              <th class="p-3 text-left">За стаж</th>
              <th class="p-3 text-left">Премия</th>
              <th class="p-3 text-left">Всего</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="(row, index) in rows" :key="index" class="hover:bg-gray-100">
              <td class="p-3">{{ row.date }}</td>
              <td class="p-3">{{ row.pizzeria }}</td>
              <td class="p-3">{{ row.category }}</td>
              <td class="p-3">{{ row.hours }}</td>
              <td class="p-3">{{ row.salary }}</td>
              <td class="p-3">{{ row.night }}</td>
              <td class="p-3">{{ row.orders }}</td>
              <td class="p-3">{{ row.kilometers }}</td>
              <td class="p-3">{{ row.trips }}</td>
              <td class="p-3">{{ row.seniority }}</td>
              <td class="p-3">{{ row.bonus }}</td>
              <td class="p-3 font-bold">{{ row.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        rows: [
          {
            date: "04 ноября, 11:15 — 04 ноября, 20:00",
            pizzeria: "Чита-1",
            category: "Пиццамейкер",
            hours: "08:45",
            salary: "2,098.50 ₽",
            night: "02:00",
            orders: 0,
            kilometers: 0,
            trips: 0,
            seniority: "131 ₽",
            bonus: "0 ₽",
            total: "2,098.50 ₽",
          },
          // Добавь больше строк данных...
        ],
      };
    },
  };
  </script>
  
  <style>
  body {
    font-family: 'Inter', sans-serif;
  }
  </style>
  