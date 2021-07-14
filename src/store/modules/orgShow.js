const state = {
    hoverShowBoxDetails: {
        environment: {
            imgUrl: 'https://tva1.sinaimg.cn/large/008i3skNly1gsehbutnbrj31900u04at.jpg',
            content: '中心环境真嗯~ o(*￣▽￣*)o!'
        },
        resource: {
            imgUrl: 'https://tva1.sinaimg.cn/large/008i3skNly1gsehrpq1nlj30w00nex6p.jpg',
            content: '中心学习资源真顶d=====(￣▽￣*)b'
        },
        activity: {
            imgUrl: 'https://tva1.sinaimg.cn/large/008i3skNly1gsehus654tj31ew0u0b2h.jpg',
            content: '中心团建活动真帮(๑•̀ㅂ•́)و✧'
        },
        communication: {
            imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1774062346,267123895&fm=26&gp=0.jpg',
            content: '中心交流真得劲O(∩_∩)O'
        },
        competition: {
            imgUrl: 'https://tva1.sinaimg.cn/large/008i3skNly1gsehsowundj313z0u0x6v.jpg',
            content: '中心比赛真┗|｀O′|┛ 嗷~~力给'
        },
        smriti: {
            imgUrl: 'https://tva1.sinaimg.cn/large/008i3skNly1gsei0ezdukj31400u0he2.jpg',
            content: '中心传承真牛( ఠൠఠ )ﾉ'
        },
        birthday: {
            imgUrl: 'https://tva1.sinaimg.cn/large/008i3skNly1gsei6o64inj30z80nin5f.jpg',
            content: '中心生日真盛大♪(^∇^*)'
        }
    },
    directionIntro: [
        {
            en: 'Font-End',
            cn: '前端',
            intro:'前端组负责产品的前端实现，提供合理的前端架构。他们手握HTML、CSS、Javascript，将需求消化落实为具体的开发工作，生产出美观的UI、合理的交互界面。为用户提供人性化的体验是他们最高追求。'
        },
        {
            en: 'Back-End',
            cn: '后端',
            intro: '后端组奔走于数据库、服务器、API之间，在用户看不见的地方辛勤耕耘。他们与前端进行数据交互及网站数据的保存和读取，力图完美实现底层业务逻辑并保证平台的稳定性与性能。'
        },
        {
            en: 'Android',
            cn: '安卓开发',
            intro:'移动组根据需求文档设计稿进行功能设计、编码，实现参与项目技术方案的制定，负责开发Android移动端产品'
        },
        {
            en: 'iOS',
            cn: 'iOS开发',
            intro:'iOS组根据需求文档设计稿进行功能设计、编码，实现参与项目技术方案的制定，负责开发iOS移动端产品'
        },
        {
            en: 'Product',
            cn: '产品',
            intro:'产品组察觉生活中的潜在需求，抓住用户最真实的痛点，将奇思妙想落地成人人可使用的软件。小组负责产品上线后的推广宣传工作，让每个人看见我们的产品。此外，产品组还对已有产品进行多渠道运营，跟进用户反馈并分析数据，持续优化已有功能.'
        },
        {
            en: 'Algorithm',
            cn: '算法',
            intro:'算法组的同学通过数据结构与算法解决各种学术和工业界问题，包括项目中后端算法接口的实现以及机器学习，人工智能等算法专业的研究。并将它们应用到实际项目中。'
        },
        {
            en: 'Security',
            cn: '安全',
            intro:'安全组负责对信息和信息系统进行保护。防止未授权的访问使用线路中断，修改，破坏，并以此提供保密性，完整性和可用性.'
        }]
}

const mutations = {}

const actions = {}

const getters = {}

export default {
    namespaces: true,
    state,
    mutations,
    actions,
    getters
}