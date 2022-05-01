<template>
    <form>
        <div class="form_standard">
            <label>Անվանումը</label>
            <input type="text" placeholder="***" v-model="form.title">
        </div>
        <div class="form_standard">
            <label>նկարագրություն</label>
            <input type="text" placeholder="***" v-model="form.description">
        </div>
        <div class="form_standard">
            <label>Էլ․ փոստ</label>
            <input type="text" placeholder="***" v-model="form.email_address">
        </div>
        <div class="form_standard">
            <label>Իրավ․ Հասցե</label>
            <input type="text" placeholder="***" v-model="form.legal_address">
        </div>
        <div class="form_standard">
            <label>Գործ․ հասցե</label>
            <input type="text" placeholder="***" v-model="form.activity_address">
        </div>
        <div class="form_standard">
            <label>Հեռախոս</label>
            <input type="text" placeholder="***" v-model="form.phone_number">
        </div>
    </form>

    <h3 class="title"> Համարներ </h3>

    <form>
        <div class="form_standard">
            <label>ՀՎՀՀ</label>
            <input type="text" placeholder="***" v-model="form.hvhh">
        </div>
        <div class="form_standard">
            <label>հարկային տարածքի կոդ</label>
            <input type="text" placeholder="***" v-model="form.tax_payer_number">
        </div>
        <div class="form_standard">
            <label>Պետ․ ռեգ․ գրանցման N</label>
            <input type="text" placeholder="***" v-model="form.state_register_number">
        </div>
        <div class="form_standard">
            <label>Ապահովագրողի հաշվի համարը.</label>
            <input type="text" placeholder="***" v-model="form.insurer_account_number">
        </div>
    </form>

    <div class="btn_block">
        <button class="btn_standard" @click="update_firm">Պահպանել</button>
    </div>

</template>

<script>

    export default {
        name: "v-firm-edit-form",
        data(){
            return{
                form: {
                    id: null,
                    title: null,
                    description: null,
                    activity_address: null,
                    legal_address: null,
                    phone_number: null,
                    email_address: null,
                    tax_payer_number: null,
                    state_register_number: null,
                    insurer_account_number: null,
                    hvhh: null,
                    leader_position: null,
                    leader_full_name: null,
                    accountant_position: null,
                    accountant_full_name: null,
                    cashier_full_name: null
                }
            }
        },
        mounted(){
            this.form.id = parseInt(this.$route.query.firm_id)

            this.$store.dispatch("firm/GET_FIRM_BY_ID", parseInt(this.$route.query.firm_id)).then(data => {
                if(data.success){
                    for(const data_key in data.obj){
                        for(const form_key in this.form){
                            if(data_key === form_key){
                                this.form[form_key] = data.obj[data_key]
                            }
                        }
                    }
                }
            })
        },
        methods:{
            update_firm(){
                this.$store.dispatch("firm/UPDATE_FIRM", this.form).then(data => {
                    this.emitter.emit("msg-modal", data);
                })
            }
        }
    }
</script>

<style scoped>
    form{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 50px;
        width: max-content;
    }
    .btn_block{
        margin-top: 60px;
        display: flex;
        grid-gap: 25px;
    }
</style>