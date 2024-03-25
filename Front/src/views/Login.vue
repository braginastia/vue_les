<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">Войти в аккаунт</h1>
                <p class="py-6">Если вы у нас впревые или не создавали аккаунт, то перейдите по <a href="/register" style="font-style: italic;">этой ссылке</a> и создайте его, а затем возращайтесь :-)</p>
            </div>
            <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form @submit.prevent="go_login" class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" class="input input-bordered" v-model="email">
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Пароль</span>
                        </label>
                        <input type="password" placeholder="пароль" class="input input-bordered" v-model="password">
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Войти</button>
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
            login: 'auth/login'
        }),
        go_login() {
            const formData = {
                email: this.email,
                password: this.password
            }
            this.login(formData)
        }
    }
}
</script>