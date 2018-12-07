<template>
    <div>
        <div class="content">
            <div class="tags">
                <a href="http://host.refined-x.com/bing.php" download="bing-wallpaper.jpg" target="_blank">
                    下载Bing壁纸
                </a>
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
    
</style>
