<template>
    <div class="home">
        <h3 class="title">Ընդհանուր գործիքներ</h3>
        <div class="add_blocks">
            <v-add-block description="Ավելացրեք ընկերություն" route="/firm/add"/>
            <v-add-block description="Ավելացրեք օգտատիրոջ"/>
        </div>

        <div class="table_block">
            <v-firm-table/>
        </div>
    </div>
</template>

<script>
    import VAddBlock from "@/components/home/v-add-block";
    import VFirmTable from "@/components/firm/v-firm-table";
    export default {
        name: "v-home",
        components: {VFirmTable, VAddBlock}
    }
</script>

<style scoped>
    .add_blocks{
        display: flex;
        align-items: center;
        grid-gap: 2em;
    }
    .table_block{
        margin-top: 80px;
    }
</style>