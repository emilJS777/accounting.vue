<template>
    <div class="firm_add">
        <h3 class="title">Ավելացնել ընկերություն</h3>
        <v-firm-add-form/>
    </div>
</template>

<script>
    import VFirmAddForm from "@/components/firm/v-firm-add-form";
    export default {
        name: "v-firm-add",
        components: {VFirmAddForm}
    }
</script>

<style scoped>

</style>