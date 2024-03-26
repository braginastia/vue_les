<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'MyButton'
}
</script>

<style scoped>
.btn {
    padding: 10px;
    cursor: pointer;
    background-color: #fff;
    border-radius: 10px;
}
</style>