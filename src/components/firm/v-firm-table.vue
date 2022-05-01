<template>
    <div class="table_standard">
        <div class="thead">
            <div class="tr">
                <div class="th">Անվանում</div>
                <div class="th">Գործ․ հասցե</div>
                <div class="th">Իրավ․ Հասցե</div>
                <div class="th">Հեռախոս</div>
                <div class="th"></div>
            </div>
        </div>
        <div class="tbody">
            <div class="tr" v-for="firm in this.firms" :key="firm.id">
                <div class="td">{{firm.title}}</div>
                <div class="td">{{firm.activity_address}}</div>
                <div class="td">{{firm.legal_address}}</div>
                <div class="td">{{firm.phone_number}}</div>


                <div class="menu">
                    <ul>
                        <li>
                            <router-link :to="'/firm/edit?firm_id='+firm.id">
                                <img src="@/assets/icons/edit.png" alt="">
                                Խմբագրել
                            </router-link>
                        </li>
                        <li>
                            <a href="#">
                                <img src="@/assets/icons/delete.png" alt="">
                                Հեռացնել
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-firm-table",
        data(){
            return{
                firms: []
            }
        },
        mounted(){
            this.$store.dispatch("firm/GET_FIRM_IDS").then(data => {
                if(data.success)
                    data.obj.forEach(firm_id => {
                        this.get_firm_by_id(firm_id)
                    })
            })
        },
        methods:{
            get_firm_by_id(firm_id){
                this.$store.dispatch("firm/GET_FIRM_BY_ID", firm_id).then(data => {
                    if(data.success)
                        this.firms.push(data.obj)
                })
            }
        }
    }
</script>

<style scoped>
.tr{
    grid-template-columns: 1fr 1fr 1fr 1fr .1fr;
}
</style>