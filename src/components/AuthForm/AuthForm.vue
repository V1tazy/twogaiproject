<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div>
            <h1 class="text-2xl font-semibold">Авторизация</h1>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div class="relative">
                <input v-model="email" autocomplete="off" id="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none" placeholder="Email address" />
                <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Логин</label>
              </div>
              <div class="relative">
                <input v-model="password" autocomplete="off" id="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none" placeholder="Password" />
                <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Пароль</label>
              </div>
              <div class="relative">
                <button @click="login" class="bg-cyan-500 text-white rounded-md px-2 py-1">Войти</button>
              </div>
              <p v-if="errorMessage" class="text-red-500 text-xs">{{ errorMessage }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
  async login() {
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.email,
          password: this.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        this.errorMessage = errorData.error || 'Произошла ошибка';
        return;
      }

      const data = await response.json();
      console.log('Успешная авторизация:', data.message);
      console.log('Токен:', data.token);

      // Сохраняем токен
      localStorage.setItem('authToken', data.token);

      // Перенаправляем пользователя на главную страницу
      this.$router.push({ name: 'MainPage' });
    } catch (error) {
      this.errorMessage = 'Ошибка соединения с сервером';
      console.error(error);
    }
  },
}}

</script>
