<template>
    <div>
        <div class="content">
            <div v-for="(item, index) in list" :key="index">
                <img :src="item" />
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
            axios.get(`https://gank.io/api/history/content/12/1`).then(res => {
                let response = res.data.results;
                if(Array.isArray(response)){
                    let imgList = [];
                    response.forEach(function(e){
                        let content = decodeURI(e.content);
                        let src = content.match(/<img src="([^"]+)"/);
                        if(src){
                            imgList.push(src[1]);
                        }
                    });
                    this.list = this.list.concat(imgList);
                }
            });
            
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
