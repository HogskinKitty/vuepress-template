import {hopeTheme} from "vuepress-theme-hope"

import {enNavbar, zhNavbar} from "./navbar";
import {enSidebar, zhSidebar} from "./sidebar";

export default hopeTheme({
    // 域名
    hostname: "https://your-domain.com",
    // logo
    logo: "/logo.png",
    // favicon
    favicon: "/favicon.ico",
    // Git 仓库和编辑链接
    repo: "/HogskinKitty/vuepress-template",
    repoLabel: "GitHub",
    docsDir: "docs",
    // 仓库分支名
    docsBranch: "master",
    // 是否全局启用路径导航
    // breadcrumb: false,
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
        email: "<EMAIL>",
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
        },
    },
})