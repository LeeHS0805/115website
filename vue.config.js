let cdn = {
    css: [

    ],
    js: [
        // vue must at first!
        'https://cdn.jsdelivr.net/npm/vue@2.6/dist/vue.min.js', // vuejs
        // vue-router
        'https://unpkg.com/vue-router/dist/vue-router.js',
        // axios
        'https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.min.js',
        // Vuex
        'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js'

    ]
}
let externals={
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'axios': 'axios',
    'vuex': 'Vuex',
}

module.exports={
    // publicPath:'/',
    lintOnSave: false,
    runtimeCompiler: true,
    configureWebpack:{
        externals:externals
    },
    chainWebpack (config) {
        config.plugin('html').tap(args => {
            args[0].cdn = cdn
            return args
        })
    }
}