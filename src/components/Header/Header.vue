<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

const user = ref(null);

onMounted(async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    try {
      const response = await fetch("http://localhost:3000/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        user.value = data.user; // Сохраняем данные пользователя
      } else {
        console.error("Ошибка получения профиля");
      }
    } catch (error) {
      console.error("Ошибка соединения с сервером", error);
    }
  }
});
</script>

<template>
  <header class="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
    <h1 class="text-lg font-semibold">Dodo IS → Кабинет сотрудника</h1>
    <nav class="space-x-4">
      <RouterLink class="text-sm hover:underline" to="/main">Мои возможности</RouterLink>
      <RouterLink class="text-sm hover:underline" to="/main/shift">График</RouterLink>
      <RouterLink class="text-sm hover:underline" to="/main/salary">Зарплата</RouterLink>
    </nav>
    <div class="flex items-center space-x-2">
      <span v-if="user">{{ user.firstname }} {{ user.surname }}</span>
      <img
        v-if="user"
        class="w-8 h-8 rounded-full border border-gray-500"
        :alt="user.firstname"
      />
    </div>
  </header>
</template>
