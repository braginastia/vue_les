<template>
    <div class="home">
        <form @submit.prevent="">
            <input type="email" class="form-input" placeholder="Введите email" v-model="email">
            <input type="password" class="form-input" placeholder="Введите пароль" v-model="password">
            <button type="submit" class="form-button">Войти</button>
            <span>Нет аккаунта? <a href="/register">Зарегистрироваться</a></span>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            name: ''
        }
    }
}
</script>
<style>

.home {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100dvh;
}
form {
    display: flex;
    flex-direction: column;
    width: 400px;
    row-gap: 20px;
}

</style>