<template>
  <div class="about">
    <h2>Данные о пользователе</h2>
    
    <div class="main">
      <div class="main-info">
        <div class="main-info-1">
          <h3>Основные</h3>
          <div class="user-name">
            <span>Имя пользователя: {{ user?.name }}</span>
          </div>
          <div class="user-email">
            <span>Email пользователя: {{ user?.email }}</span>
          </div>
        </div>
        <div class="main-info-2">
          <h3>Не основные</h3>
          <div class="user-uid">
            <span>UID пользователя: {{ user?.uid }}</span>
          </div>
          <div class="user-id">
            <span>ID пользователя: {{ user?.id }}</span>
          </div>
        </div>
    </div>

      <div class="dop-info">
        <h3>Дополнительная информация</h3>
        <div class="user-role">
        <span>Role пользователя: {{ user?.role }}</span>
        </div>
        <div class="user-created">
          <span>CreatedAt пользователя: {{ user?.createdAt }}</span>
        </div>
        <div class="user-updated">
          <span>UpdatedAt пользователя: {{ user?.updatedAt }}</span>
        </div>
      </div>
    </div>

    <div class="likes">
      <div class="user-likes">
        <span>Количество лайков: <img src="../assets/like_739231.png" alt="like">{{ user?.likes }}</span>
      </div>
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

<style>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5dvh;
  font-size: 1.5rem;
}
.main {
  display: flex;
  flex-direction: column;
  row-gap: 2dvh;
  justify-content: flex-start;
  align-items: start;
  text-align: left;
}
.main-info {
  display: flex;
  flex-direction: row;
  column-gap: 4dvh;
}
.main-info-1, .main-info-2 {
  border: solid 2px #000;
  border-radius: 15px;
  padding: 2dvh 2dvw;
  width: 40dvw;
}
.main-info-1 h3, .main-info-2 h3 {
  border-bottom: solid 2px #000;
}
.dop-info {
  width: 86dvw;
  border: solid 2px #000;
  border-radius: 15px;
  padding: 2dvh 2dvw;
}
.dop-info h3 {
  border-bottom: solid 2px #000;
}
.likes {
  display: flex;
  justify-content: start;
  align-items: start;
  border: solid 2px #000;
  border-radius: 15px;
  width: 86dvw;
  padding: 2dvh 2dvw;
}
.user-likes span {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.likes img {
  height: 48px;
  padding-left: 2dvw;
  padding-right: 2dvw;
}
</style>