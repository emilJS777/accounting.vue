<template>
    <div class="firm_edit">
        <h3 class="title">Խմբագրել ընկերությունը</h3>
        <v-firm-edit-form/>
    </div>
</template>

<script>
    import VFirmEditForm from "@/components/firm/v-firm-edit-form";
    export default {
        name: "v-firm-edit",
        components: {VFirmEditForm}
    }
</script>

<style scoped>

</style>