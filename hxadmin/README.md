# admin

> 后台管理系统


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

