import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [],
    "/guide/": [
        {
            text: "指南",
            icon: "creative",
            children: "structure",
            collapsible: true,
        }
    ],
    "/example/": [
        {
            text: "侧边栏示例",
            icon: "creative",
            children: "structure",
            collapsible: true,
        }
    ],
});