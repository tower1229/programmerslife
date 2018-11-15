<template>
    <div>
        <div class="content">
            <v-card>
                <v-img
                src="https://refined-x.com/asset/wechat.jpg"
                aspect-ratio="1"
                ></v-img>

                <v-card-title primary-title>
                <div>
 
                    <div>扫码关注programmerslife，准备了一些好东西，如果你看不到，就太可惜了</div>
                </div>
                </v-card-title>

            </v-card>
            
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import axios from 'axios';

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
