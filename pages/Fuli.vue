<template>
<div>
    <div class="white_wrap">
        <template v-if="!gank.length">
        <v-progress-circular
        style="margin-top:10rem"
        :size="70"
        indeterminate
        ></v-progress-circular>
        </template>
        <template v-else>
        <div class="toggle" @click="changeClass">切</div>
        <div class="content" :class="{size1: classIndex==1,size2: classIndex==2,size3: classIndex==3}">
            
            <div class="items" v-for="(item, index) in gank" :key="index" @click="$router.push({name:'fuliDetail', query: {url: item}})">
                <div class="rect-100">
                    <div class="_full">
                        <img :src="item" referrerpolicy="no-referrer" />
                    </div>
                </div>
            </div>

            <div class="tips">
                内容抓取自“干货集中营”，妹子虽好，不要贪杯哦
            </div>
        </div>
        </template>
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex';

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
            classIndex: 1
        }
    },
    computed: {
        ...mapState('common', [
            'gank'
        ])
    },
    async asyncData({store, route}) {
        store.dispatch('common/getGank');
    },
    methods: {
        changeClass: function(){
            if(this.classIndex<3){
                this.classIndex++
            }else{
                this.classIndex = 1;
            }
        }
    },
    created: function(){
        this.$store.dispatch('appShell/appHeader/setAppHeader', {
            show: true
        })
    }
};
</script>

<style scoped>
.toggle{position: fixed;right:0;bottom:2em;z-index: 99;width:4em;height: 4em;text-align: center;line-height: 4em;overflow:hidden;background:#e40013;color:#fff;
border-radius: 2em;}
.content{margin-right:-2%;height: 100%;overflow:scroll;}
.content .items{float: left;width:23%;margin-right:2%;margin-bottom: 2%;}
.content .items img{width:100%;}
.content.size2 .items{width:48%;}
.content.size3 .items{width:98%;}
.content .tips{clear: left; padding:1em;}
</style>
