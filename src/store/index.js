import vue from 'vue';
import vuex from 'vuex';
import orgShow from './modules/orgShow.js'

vue.use(vuex);

import timelineImg from '@/assets/timeline.jpg'

export default new vuex.Store({
    state: {
        //首页部分
        bannerImgList: [
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3689085212,1065717883&fm=26&gp=0.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599489167734&di=c1f5b2a0326285887066f3ea849a2638&imgtype=0&src=http%3A%2F%2Fimg.gaokaozy.cn%2Fschool%2Fphoto%2F1%2F58d3a5e9aea10.jpg"
        ],
        //更改后续首页图片，目前使用静态
        bannerImg: '',
        timelineImg: timelineImg,
        introduction: {
            title: "组织简介",
            content: [
                "学生创新实践中心(SIPC)是天津理工大学一个技术类学生组织。因中心实验室机房在理工大学主校区七号楼115室，所以又称115工作室。始建于2009年9月，前身为602工作室",
                "中心旨在培养大学生创新意识，指导并组织学生进行科技创新，积极参与科技科技竞赛以及科研项目。在学校、学院的大力支持下，学生创新实践中心于2010年12月挂牌成立，拥有150平米的专属机房及实验室。拥有包括服务器、台式机、等在内的设备近三十台。"
            ]
        },

        //联系我们部分
        contactAddress: "天津理工大学计算机科学与工程学院7-115",
        contactEmail: "sipc115@sina.com"
    },
    mutations: {
        GetBannerImgList(state, data) {
            state.bannerImgList = data;
        },
        GetBannerImg(state, data) {
            state.bannerImg = data;
        }
    },
    actions: {

    },
    getters: {

    },
    modules: {
        orgShow: orgShow
    }
})