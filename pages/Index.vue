<template>
    <div>
        <div class="content">
            <div>
                <h2>看风景</h2>
                <h4>探寻程序员们的生活琐事</h4>
                <router-link to="/intro">
                    <v-btn color="success">Readme</v-btn>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
function setState(store) {
    store.dispatch('appShell/appHeader/setAppHeader', {
        show: true,
        showMenu: true,
        showBack: false,
        showLogo: false,
        actions: [
            {
                icon: 'search',
                route: '/search'
            }
        ]
    });
}

export default {
    name: 'index',
    metaInfo: {
        title: '微站',
        titleTemplate: '%s - 看风景'
    },
    middleware: ["login-client"],
    async asyncData({store, route}) {
        setState(store);
    },
    activated() {
        setState(this.$store);
    }
};
</script>

<style lang="stylus" scoped>
.content
    display flex
    align-items center
    justify-content center
    height 100%
    flex-wrap wrap
    h2
        font-size 46px
        font-weight 500
</style>
