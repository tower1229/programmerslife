<template>
    <div>
        <div class="content">
            <div>
                <p>准备了一些好东西，如果你看不到，就太可惜了，扫码关注：programmerslife，探寻程序员们的生活琐事</p>
                <img src="https://refined-x.com/asset/wechat.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import axios from 'axios';

function setState(store) {
    store.dispatch('common/setLogin', true);
}

export default {
    name: 'meizi',
    metaInfo: {
        title: '“福利”',
        titleTemplate: '%s - 看风景',
        meta: [
            {name: 'keywords', content: '福利'},
            {name: 'description', content: '福利-看风景'}
        ]
    },
    data() {
        return {
            list: []
        }
    },
    methods: {
        fetchData: function(){
            
            
        }
    },
    created: function(){
        this.fetchData()
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
