import {sidebar} from "vuepress-theme-hope";

export const enSidebar = sidebar({
    "/en/": [],
    "/en/guide/": [
        {
            text: "guide",
            icon: "creative",
            children: "structure",
            collapsible: true,
        }
    ],
    "/en/example/": [
        {
            text: "sidebar example",
            icon: "",
            children: "structure",
            collapsible: true,
        },
    ],
});