<template>
    <div>
        <div class="content">
            <div v-for="(item, index) in list" :key="index">
                
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
