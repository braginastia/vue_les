<template>
    <div>
        <h1>Список пользователей</h1>
        <ul>
            <li v-for="user in users" :key="user?.id">
                {{ user?.name }} - {{ user?.email }}
            </li>
        </ul>
        <button @click="fetchUser" style="border-radius: 1px solid #fff;">Получить пользователей</button>
    </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
    name: 'admin',
    data() {
        return {
            users: []
        }
    },
    methods: {
        async fetchUser() {
            try {
                const response = await axios.get('http://localhost:8080/api/users');
                this.users = response.data; 
            } catch (error) {
                console.error('Ошибка получения пользователей', error)
            }
        }
    },
    mounted() {
       this.fetchUser();
    }
    
}
</script>

<style scoped>
</style>