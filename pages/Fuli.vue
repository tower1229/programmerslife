<template>
    <div style="width:100%;overflow:hidden">
        <div class="toggle" @click="changeClass">切</div>
        <div class="content" :class="{size1: classIndex==1,size2: classIndex==2,size3: classIndex==3}">
            <div class="items" v-for="(item, index) in list" :key="index" @click="$router.push({name:'fuliDetail', params: {url: item}})">
                <div class="rect-133">
                    <div class="_full">
                        <img :src="item" />
                    </div>
                </div>
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
            list: [],
            classIndex: 1
        }
    },
    methods: {
        changeClass: function(){
            if(this.classIndex<3){
                this.classIndex++
            }else{
                this.classIndex = 1;
            }
        },
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

<style scoped>
.toggle{position: fixed;right:0;bottom:2em;z-index: 99;width:4em;height: 4em;text-align: center;line-height: 4em;overflow:hidden;background:#e40013;color:#fff;
border-radius: 2em;}
.content{margin-right:-2%;height: 100%;overflow:scroll;}
.content .items{float: left;width:23%;margin-right:2%;}
.content .items img{width:100%;}
.content.size2 .items{width:48%;}
.content.size3 .items{width:98%;}

</style>
