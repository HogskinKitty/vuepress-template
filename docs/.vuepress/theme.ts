import {hopeTheme} from "vuepress-theme-hope"

import {enNavbar, zhNavbar} from "./navbar";
import {enSidebar, zhSidebar} from "./sidebar";

export default hopeTheme({
    // 网站部署域名
    hostname: "https://your-domain.com",

    // 导航栏图标
    logo: "/logo.png",

    // 站点图标
    favicon: "/favicon.ico",

    // 设置图标资源
    iconAssets: "iconify",

    // Git 仓库
    repo: "/HogskinKitty/vuepress-template",

    // 导航栏仓库按钮
    repoLabel: "GitHub",

    // 文档在仓库中的目录
    docsDir: "docs",

    // 文档所在分支
    docsBranch: "master",

    // 是否启用主题颜色选择器
    themeColor: true,

    // 多语言配置
    locales: {
        "/": {
            navbar: zhNavbar,
            sidebar: zhSidebar,
        },
        "/en/": {
            navbar: enNavbar,
            sidebar: enSidebar,
        },
    },

    // 全局作者信息
    author: {
        name: "HogskinKitty",
        url: "https://github.com/HogskinKitty",
        email: "EMAIL",
    },

    // 插件配置
    plugins: {
        // 搜索插件
        searchPro: {},

        // Markdown 增强插件
        mdEnhance: {
            // 提示
            alert: true,
            // 提示容器
            hint: true,
            // 选项卡
            tabs: true,
            // 自定义对齐
            align: true,
            // 是否启用属性支持
            attrs: true,
            // 图片标题
            figure: true,
            // 图片懒加载
            imgLazyload: true,
            // 图片尺寸
            imgSize: true,
            // Markdown 导入支持
            include: true,
        },
    },
})