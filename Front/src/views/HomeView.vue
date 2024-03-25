<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="window">
        <div class="window-label">
          Количество лайков: {{ likes }}
        </div>
        <div class="btns">
          <div class="btn like" @click="addLike">
            <img src="../assets/like_739231.png" alt="like" width="32px">
            Поставить лайк
          </div>
          <div class="btn dislike" @click="addDislike">
            <img src="../assets/like_739231.png" alt="dislike" width="32px" style="rotate: 180deg;">
            Поставить дизлайк
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data() {
    return {
      likes: 0
    }
  },
  methods: {
    addLike() {
      this.likes += 1
    },
    addDislike() {
      this.likes -= 1
    },
  },
  watch: {
    likes() {
      if(this.likes < 0) {
        this.likes = 0
      }
    }
  },
  components: {
    
  }
}
</script>
