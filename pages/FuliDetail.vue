<template>
    <div class="detail-wrapper" v-if="url">
        <img :src="url" />
    </div>
</template>

<script>

export default {
    name: 'fuliDetail',
    metaInfo() {
        return {
            title: `Detail`,
            titleTemplate: '%s - 看风景'
        }
    },
    data() {
        return {
            url: null
        }
    },
    activated() {
        
    },
    created() {
        this.url = this.$route.params.url
    },
};
</script>

<style scoped>
.detail-wrapper img{width:100%;}
</style>
