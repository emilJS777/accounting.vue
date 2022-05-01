<template>
    <div class="add_block" @click="()=>this.$router.push(this.route)">
        <img src="@/assets/icons/plus.svg" alt="">
        <span>{{this.description}}</span>
    </div>
</template>

<script>
    export default {
        name: "v-add-block",
        props: ['description', 'route']
    }
</script>

<style scoped>
    .add_block{
        background-color: #F5F7FA;
        border-radius: 8px;
        display: block;
        width: 240px;
        padding-top: 28px;
        padding-bottom: 28px;
        cursor: pointer;
        color: #999;
        font-size: 14px;
        text-align: center;
    }
    .add_block > *{
        display: block;
        margin: 0 auto;
    }
    .add_block > img{
        margin-bottom: 19px;
    }
</style>