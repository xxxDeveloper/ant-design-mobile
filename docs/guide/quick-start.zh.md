# 快速上手

## 安装

```bash
$ npm install --save antd-mobile@next
# or
$ yarn add antd-mobile@next
```

<Alert> 在 beta 阶段我们有可能会在后续的新版本中发布 break change，所以强烈建议使用 lockfile 锁定版本或手动锁定版本</Alert>

## 引入

直接引入组件即可，antd-mobile 会自动为你加载 css 样式文件：

```js
import { Button } from 'antd-mobile'
```

如果你开发的是阿里/蚂蚁内部项目，那么请额外阅读一下[这篇指引](https://yuque.antfin.com/antd-mobile/kfcgs3/md4or5)。

### 关于兼容性

目前的兼容性标准为 iOS Safari >= 10 和 Chrome >= 49。

但是需要你在项目中进行 Babel 配置：

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "49",
          "ios": "10"
        }
      }
    ]
  ]
}
```

当然，你也可以根据自己项目中的实际需要对 `targets` 进行配置或者不进行 babel 编译。

## 在线体验

如果你不想在本地配置环境，也可以直接在 [codesandbox](https://codesandbox.io/s/antd-mobile-snrxr?file=/package.json) 上进行体验。
