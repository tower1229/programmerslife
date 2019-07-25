<template>
    <div>
        <v-carousel class="detail-wrapper" v-if="list && list.length"
            height="100%"
            :value="index"
            :interval="1e4"
            :continuous="false"
            :mandatory="false"
            hide-controls
            hide-delimiters
        >
            <v-carousel-item
            v-for="(src,i) in list"
            :key="i"
            :src="src"
            :value="i"
            ></v-carousel-item>
        </v-carousel>
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
            list: null,
            index: 0
        }
    },
    created() {
        this.list = this.$route.params.list;
        this.index = this.$route.params.index;

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
