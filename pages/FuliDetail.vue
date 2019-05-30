<template>
    <div>
        <div class="detail-wrapper" v-if="url">
            <img :src="url" referrerpolicy="no-referrer" />
        </div>
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
    created() {
        this.url = this.$route.query.url
        this.$store.dispatch('appShell/appHeader/setAppHeader', {
            show: false
        })
    },
};
</script>

<style scoped>

.detail-wrapper{height: 100%;background: #fff;}
.detail-wrapper img{width:100%;}
</style>
