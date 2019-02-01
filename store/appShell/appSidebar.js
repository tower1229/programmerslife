/**
 * @file appShell/appSidebar module
 * @author lavas
 */

export const SET_SIDEBAR_VISIBILITY = 'SET_SIDEBAR_VISIBILITY';

export const state = () => {
    return {
        show: false, // 是否显示sidebar

        // 头部条的相关配置
        title: {
            imageLeft: '',
            altLeft: '',
            iconLeft: 'home',
            text: '看风景',
            imageRight: '',
            altRight: '',
            iconRight: ''
        },

        // user: {
        //     name: 'Lavas',
        //     email: 'lavas@baidu.com',
        //     location: 'Shanghai'
        // },

        // 分块组
        blocks: [
            {
                sublistTitle: '值得买',
                list: [
                    {
                        text: '保险产品超市',
                        icon: 'security',
                        url: 'https://cps.qixin18.com/m/zt1029065/media-10453.html'
                    }, {
                        text: '前端技术咨询',
                        icon: 'monetization_on',
                        url: 'https://wx.zsxq.com/mweb/views/joingroup/join_group.html?group_id=8452545882'
                    }, {
                        text: '科学上网必备',
                        icon: 'network_check',
                        url: 'https://portal.shadowsocks.nu/aff.php?aff=19825'
                    }
                ]
            },
            {
                sublistTitle: '福利',
                list: [
                    {
                        text: '妹子十二',
                        icon: 'volume_off',
                        route: '/fuli'
                    }
                ]
            },
            {
                sublistTitle: '链接',
                list: [
                    {
                        text: '前端博客',
                        icon: 'create',
                        url: 'https://refined-x.com/'
                    },{
                        text: '前端周刊',
                        icon: 'book',
                        url: 'https://frontend-weekly.com/'
                    }
                ]
            },
            {
                sublistTitle: '关于',
                list: [
                    {
                        text: '公众号',
                        icon: 'camera',
                        route: '/intro'
                    }
                ]
            }
        ]
    };
};

export const mutations = {
    [SET_SIDEBAR_VISIBILITY](state, sidebarVisibility) {
        state.show = sidebarVisibility;
    }
};

export const actions = {

    /**
     * 展示侧边栏
     *
     * @param {Function} commit commit
     */
    showSidebar({commit}) {
        commit(SET_SIDEBAR_VISIBILITY, true);
    },

    /**
     * 隐藏侧边栏
     *
     * @param {Function} commit commit
     */
    hideSidebar({commit}) {
        commit(SET_SIDEBAR_VISIBILITY, false);
    }
};
