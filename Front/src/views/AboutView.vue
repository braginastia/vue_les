<template>
  <div class="stats shadow" style="display: flex; justify-content: center; width: 80dvw; margin: 10dvh auto; box-shadow: 5px 5px 5px 1px rgba(65, 184, 131, .4);">

    <div class="stat">
      <div class="avatar placeholder">
        <div class="bg-neutral text-neutral-content rounded-full w-32 h-32 center">
          <span class="text-3xl">{{ user?.name }}</span>
        </div>
      </div>
    </div>

    <!-- <div class="stat">
      <div class="stat-value">{{ user?.email }}</div>
      <div class="stat-desc">Email пользователя</div>
    </div> -->

    <div class="stat">
      <div class="stat-value">{{ user?.id }}</div>
      <div class="stat-desc">ID пользователя</div>
      <div class="stat-value">{{ user?.uid }}</div>
      <div class="stat-desc">UID пользователя</div>
      <div class="stat-value">{{ user?.role }}</div>
      <div class="stat-desc">Role пользователя</div>
    </div>

    <div class="stat">
      <div class="stat-title">Серверная информация</div>
      <div class="stat-value">{{ user?.createdAt }}</div>
      <div class="stat-desc">Создан</div>
      <div class="stat-value">{{ user?.updatedAt }}</div>
      <div class="stat-desc">Обновлен</div>
    </div>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import PostCreate from '@/components/PostCreate.vue'
import PostList from '@/components/PostList.vue';

export default {
  name: 'about',
  data() {
    return {
      posts: []
    }
  },  
  methods: {
    ...mapActions({
      getUserByUid: 'user/getUserByUid'
    }),
    createPost(post) {
      this.posts.unshift(post)
    }
  },
  mounted() {
    this.getUserByUid()
  },
  computed: {
    user() {
      return this.$store.state.user.user
    }
  },
  components: {
    PostCreate,
    PostList
  }
}
</script>
