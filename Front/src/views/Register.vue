<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">Создать аккаунт</h1>
                <p class="py-6">Если у вас уже есть аккаунт, то перейдите по <a href="/login" style="font-style: italic;">этой ссылке</a> и выполните вход :-)</p>
            </div>
            <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form @submit.prevent="goRegister" class="card-body">

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" class="input input-bordered" v-model="email">
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Имя</span>
                        </label>
                        <input type="text" placeholder="Имя" class="input input-bordered" v-model="name">
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Пароль</span>
                        </label>
                        <input type="password" placeholder="Пароль" class="input input-bordered" v-model="password">
                    </div>

                    <div class="form-control mt-6">
                        <button type="submit" class="btn btn-primary">Регистрация</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            email: '',
            password: '',
            name: ''
        }
    },
    methods: {
        ...mapActions({
            register: 'auth/register'
        }
    ),
        goRegister(){
            const formData = {
                email: this.email,
                password: this.password,
                name: this.name
            }
            this.register(formData)
        }
    }
}
</script>
<style>

/* .home {
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
} */

</style>