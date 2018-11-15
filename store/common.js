const SET_LOGIN = 'setLogin';
import axios from 'axios';

export const state = () => {
    return {
        gank: []
    };
};

export const mutations = {
    setGank (state, array) {
        state.gank = array;
    }
};

export const actions = {
    // 获取福利图片
    async getGank({commit, state}) {
        console.log(state.gank.length)
        if(!state.gank.length){
            axios.get(`https://gank.io/api/history/content/12/1`).then(res => {
                let response = res.data.results;
                if(Array.isArray(response)){
                    let imgList = [];
                    response.forEach(function(e){
                        let content = e.content;
                        let srcs = content.match(/src="([^"]+)"/);
                        if(srcs){
                            imgList.push(srcs[1]);
                        }
                    });
                    commit('setGank', imgList);
                }
            });
        }
    }
};