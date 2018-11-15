<template>
    <div>
        <div class="content">
            <div class="tags">
                <a class="_tag" href="https://refined-x.com/" target="_blank">
                    <v-btn fab dark color="primary">
                        <v-icon dark>create</v-icon>
                    </v-btn>
                </a>
                <a class="_tag" href="https://frontend-weekly.com/" target="_blank">
                    <v-btn fab dark color="orange">
                        <v-icon dark>book</v-icon>
                    </v-btn>
                </a>
                <a class="_tag" href="https://wx.zsxq.com/mweb/views/joingroup/join_group.html?group_id=8452545882" target="_blank">
                    <v-btn fab dark color="cyan">
                        <v-icon dark>monetization_on</v-icon>
                    </v-btn>
                </a>
                <router-link class="_tag" to="/intro">
                    <v-btn fab dark color="light-green">
                        <v-icon dark>camera</v-icon>
                    </v-btn>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'index',
    metaInfo: {
        title: '看风景'
    },
    middleware: ["login-client"],
    async asyncData({store, route}) {
        store.dispatch('appShell/appHeader/setAppHeader', {
            show: true,
            showMenu: true,
            showBack: false,
            showLogo: false,
            actions: [
                // {
                //     icon: 'search',
                //     route: '/search'
                // }
            ]
        });
    }
};
</script>

<style lang="stylus" scoped>
.content
    position relative
    height 100%
.tags
    position absolute
    left 0
    bottom 0
    width 100%
    padding 1rem 0
    text-align center
    ._tag
        display inline-block
        text-decoration none
</style>
