<template>
    <div class="navbar">
        <ul>
            <li v-bind:class="this.$route.path === '/home' ? 'active' : ''">
                <router-link to="/home" >
                    <img src="@/assets/icons/home.svg" alt="">
                    Գլխավոր էջ
                </router-link>
            </li>
            <li>
                <router-link to="#" @click="()=>this.firms_menu_open = !this.firms_menu_open"
                             v-bind:class="this.$route.path === '/firm/add' && !this.firms_menu_open ||
                             this.$route.path === '/firms' && !this.firms_menu_open ? 'active' : ''">

                    <img src="@/assets/icons/firm-add.svg" alt="">
                    Ընկերություններ
                    <span v-bind:class="this.firms_menu_open ? 'open' : ''"> &#8249; </span>

                </router-link>

                <ul v-if="this.firms_menu_open" class="sub_menu">
                    <li v-bind:class="this.$route.path === '/firms' ? 'active' : ''">
                        <router-link to="/firms">
                            <i></i>
                            Դիտել Ընկերությունները
                        </router-link>
                    </li>
                    <li v-bind:class="this.$route.path === '/firm/add' ? 'active' : ''">
                        <router-link to="/firm/add">
                            <i></i>
                            Ավելացնել Ընկերություն
                        </router-link>
                    </li>
                </ul>
            </li>

            <li v-bind:class="this.$route.path === '/storage' ? 'active' : ''">
                <router-link to="#">
                    <img src="@/assets/icons/storage.svg" alt="">
                    Պահեստներ
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "v-navbar",
        data(){
            return{
                firms_menu_open: false
            }
        }
    }
</script>

<style scoped>
    .navbar{
        margin: 20px;
    }
    a{
        color: inherit;
        text-decoration: none;
        display: grid;
        align-items: center;
        grid-gap: 1em;
        padding: 13px 21px;
        position: relative;
        grid-template-columns: 1fr 6fr;
    }
    .active{
        background-color: #5369b6;
    }

    a > span{
        position: absolute;
        right: 15px;
        top: 10px;
        font-size: 30px;
        transform: rotate(-90deg);
        transition: .2s;
    }
    span.open{
        transform: rotate(90deg);
        right: 8px;
    }
    .sub_menu{
        animation-duration: .1s;
        animation-name: sub-menu-toggle;
        border-bottom: 1px solid#999;
    }
    @keyframes sub-menu-toggle {
        from{
            margin-top: -20px;
        }
        to{
            margin-top: 0;
        }
    }
</style>