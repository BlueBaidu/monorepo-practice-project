# 文件夹介绍

`utils` 文件夹下是手写实现常用的js代码
`packages` 文件夹下是具体的项目部分


# 新建共享包的流程(monorepo)

1. 新建一个文件夹 比如 `test`

2. 进入到test目录下 执行 pnpm init 会创建一个package.json文件

3. 在 package.json 文件中修改一些参数
    1. `name`  表示的是公用块的名字，引入的时候会用这个名字引入，例如改为`@common/test`
    2. `version` 表示当前块的版本，一般改动一次会更新一下版本的信息
    3. `main` 表示的是当前块的入口文件，一般默认是`index.js` 如果是ts文件，需要手动修改文件后缀名为`.ts`
    4. 添加配置项`"private":true` 标识这个包是私有的，不会被上传到pnpm仓库上
4. 具体公用函数的导出和使用说明
    1. 在test文件夹下的具体文件，比如`test1.js`文件中编写公用的函数，然后导出这个函数
    2. 在`index` 入口文件中导出刚才的文件，例如`export * from "./test1"`，如果没有导出，则不能使用
    3. 在其他模块中需要用到公用函数的时候导入即可，例如`import { xxx } from "@common/test"`
5. 其他注意事项：
    1. 在根目录中安装依赖之后，每个子模块下不需要再重复安装这个依赖，例如在根目录执行了`pnpm i react react-dom -w` 之后，子目录直接使用`import react from 'react'` 就行
    2. 使用`pnpm i react -r`在根目录安装依赖之后，每个子目录都会安装这个依赖
    3. 使用`pnpm i react -r --filter @common/test` 在根目录执行之后只有 `@common/test` 这个项目才会安装这个依赖
