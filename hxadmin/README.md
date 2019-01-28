# admin

> 后台管理系统

## 运行前执行一次npm run bootstrap

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 项目说明

├── ./build                          # 生成配置文件目录
│   ├── ./build/build.js
│   ├── ./build/check-versions.js
│   ├── ./build/dev-client.js
│   ├── ./build/dev-server.js
│   ├── ./build/utils.js
│   ├── ./build/vue-loader.conf.js
│   ├── ./build/webpack.base.conf.js
│   ├── ./build/webpack.dev.conf.js
│   ├── ./build/webpack.prod.conf.js
│   └── ./build/webpack.test.conf.js
├── ./config                         # webpack配置目录
│   ├── ./config/dev.env.js
│   ├── ./config/dev.mock.js
│   ├── ./config/index.js
│   ├── ./config/prod.env.js
│   └── ./config/test.env.js
├── ./index.html                    # 入口文件，由于是多页开发，这个文件无用，为保存webpack正常运行必须保留
├── ./package.json                  # 项目信息
├── ./src                           # 静态资源源文件
│   ├── ./src/assets                # 需要打包的静态文件
│   │   └── ./src/assets/logo.png
│   ├── ./src/components            # 公用的组件
│   │   └── ./src/components/Hello.vue
│   ├── ./src/main.js               # 主入口脚本
│   ├── ./src/mock                  # Mock数据源
│   │   ├── ./src/mock/advs.mock.js
│   │   ├── ./src/mock/index.js
│   │   ├── ./src/mock/products.baseFn.js
│   │   └── ./src/mock/products.mock.js
│   └── ./src/pages                # 页面源代码
|       └── booking                #订房模块
│           ├── prices             #订房子模块价格代码
│           │   ├── ./src/pages/booking/prices/app.vue  # 页面级的模板
│           │   ├── ./src/pages/booking/prices/index.html  # 页面入口
│           │   └── ./src/pages/booking/prices/index.js    # 页面脚本
├── ./static                                  # 需要打包的静态文件，比如字体
└── ./test                                    # 单元测试，暂未使用
    ├── ./test/e2e
    │   ├── ./test/e2e/custom-assertions
    │   │   └── ./test/e2e/custom-assertions/elementCount.js
    │   ├── ./test/e2e/nightwatch.conf.js
    │   ├── ./test/e2e/runner.js
    │   └── ./test/e2e/specs
    │       └── ./test/e2e/specs/test.js
    └── ./test/unit
        ├── ./test/unit/index.js
        ├── ./test/unit/karma.conf.js
        └── ./test/unit/specs
            └── ./test/unit/specs/Hello.spec.js


### http方法说明
对axios进行封装处理，确保then回调函数中的参数一定是http的status为200或304且data.status为1000的值，其余值全部进入catch回调函数中
    -  status为200或304
        +  data.status为1000，resolve(res.data)进入then待处理
        +  data.status为1001，集中处理，用element的`Notification`组件进行处理，可以在axios中传入`{REJECTERRORCONFIG: {duration: number}}`自定义弹框持续时间，传入`{REJECTERRORCONFIG:{serveError: true}}`不进行集中处理
        +  data.status大于1001，集中处理，用element的`MessageBox`组件进行弹框处理，并将messagebox的promise对象附着在catch函数的error参数上，通过error.$msgbox进行后续处理，传入`{REJECTERRORCONFIG:{serveError: true}}`不进行集中处理
    -  状态值大于400的处理
        集中处理，用element的`MessageBox`组件进行弹框处理，并将messagebox的promise对象附着在catch函数的error参数上，通过error.$msgbox进行后续处理，传入`{REJECTERRORCONFIG:{serveError: true}}`不进行集中处理


