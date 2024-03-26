<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="window" style="display: flex; justify-content: center; flex-direction: column; row-gap: 5dvh; align-items: center; padding-top: 6dvh;">
        <div class="window-label">
          {{ text }}
        </div>
        <div class="window-label">
          Количество лайков: {{ likes }}
        </div>
        <div class="btns">
          <my-button class="like" @click="addLike">
            <img src="../assets/like_739231.png" alt="like" width="32px">
            Поставить лайк
          </my-button>
          <my-button class="dislike" @click="addDislike">
            <img src="../assets/like_739231.png" alt="dislike" width="32px" style="rotate: 180deg;">
            Поставить дизлайк
          </my-button>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HomeView',
  data() {
    return {
      likes: 0,
      text: '',
      name: ''
    }
  },
  methods: {
    ...mapActions({
      updateLikes: 'user/updateLikes',
      getUserByUid: 'user/getUserByUid'
    }),
    addLike() {
      this.likes += 1
      if(this.uid) {
        this.updateLikes({likes: this.likes})
      }
    },
    addDislike() {
      this.likes -= 1
      if(this.uid) {
        this.updateLikes({likes: this.likes})
      }
    },
  },
  watch: {
    likes() {
      if(this.likes < 0) {
        this.likes = 0
      }
    }
  },
  async mounted() {
    this.uid = localStorage.getItem('uid')
    if(this.uid) {
      await this.getUserByUid()
      this.likes = this.$store.state.user.user?.likes || 0
      this.text = `Вы авторизованы как ${this.uid}`
    } else {
      this.text = `Вы не авторизованы, счетчик обнулен`
    }
  },
  components: {
    
  }
}
</script>
