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
            <img src="../assets/like_739231.png" alt="dislike" width="32px">
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

<style>
  .window {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 70vw;
    height: 300px;
    background-color: #42b983;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    row-gap: 15px;
  }
  .window-label {
    font-size: 1.5rem;
  }
  .btns {
    display: flex;
    flex-direction: row;
    column-gap: 15px;
    background-color: #fff;
    border-radius: 6px;
  }
  .btn {
    padding: 10px;
    cursor: pointer;
    border: #000 1px solid;
    border-radius: 6px;
  }
  .dislike img {
    transform: rotate(180deg);
  }
</style>