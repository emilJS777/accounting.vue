<template>
    <div class="firms">
        <h3 class="title">Վերջինս ավելացրած ընկերությունները</h3>
        <v-firm-table/>
    </div>
</template>

<script>
    import VFirmTable from "@/components/firm/v-firm-table";
    export default {
        name: "v-firms",
        components: {VFirmTable}
    }
</script>

<style scoped>

</style>