import {viteBundler} from "@vuepress/bundler-vite"
import {defineUserConfig} from "vuepress"
import theme from "./theme";

export default defineUserConfig({
    // 打包方式
    bundler: viteBundler(),

    // 主题
    theme,

    // 多语言配置
    locales: {
        "/": {
            lang: "zh-CN",
            title: "vuepress-template",
            description: "一个 vuepress 模板",
        },
        "/en/": {
            lang: "en-US",
            title: "vuepress-template",
            description: "A vuepress template",
        }
    }
})
