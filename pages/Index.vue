<template>
    <div>
        <div class="content">
            <div>
                <v-card>
                    <v-card-title primary-title>
                        <div>
                            <h2 class="headline">看风景</h2>
                            <div>
                                Author: <a href="mailto:admin@refined-x.com">admin@refined-x.com</a>
                            </div>
                        </div>
                    </v-card-title>
                    
                </v-card>
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
    display flex
    align-items center
    justify-content center
    height 100%
    flex-wrap wrap
    
</style>
