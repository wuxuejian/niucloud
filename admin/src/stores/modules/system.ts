import { defineStore } from 'pinia'
import storage from '@/utils/storage'
import { useCssVar } from '@vueuse/core'
import {getWebConfig, getWebsiteLayout} from '@/app/api/sys'

interface System {
    menuIsCollapse: boolean,
    menuDrawer: boolean,
    dark: boolean,
    theme: string,
    lang: string,
    sidebar: string,
    sidebarStyle: string,
    currHeadMenuName: any,
    website: Object,
    layoutConfig: Object
}

const theme = storage.get('theme') ?? {}

const useSystemStore = defineStore('system', {
    state: (): System => {
        return {
            menuIsCollapse: false,
            menuDrawer: false,
            dark: theme.dark ?? false,
            theme: theme.theme ?? '#273de3',
            sidebar: theme.sidebar ?? 'oneType',
            lang: storage.get('lang') ?? 'zh-cn',
            sidebarStyle: theme.sidebarStyle ?? 'threeType',
            currHeadMenuName: '',
            website: {},
            layoutConfig: {}
        }
    },
    actions: {
        setHeadMenu(value: any) {
            this.currHeadMenuName = value
        },
        setTheme(state: string, value: any) {
            this[state] = value
            theme[state] = value
            storage.set({ key: 'theme', data: theme })
        },
        toggleMenuCollapse(value: boolean) {
            this.menuIsCollapse = value
            storage.set({ key: 'menuiscollapse', data: value })
            useCssVar('--aside-width').value = value ? 'calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2)' : '210px'
        },
        async getWebsiteInfo() {
            await getWebConfig().then(({ data }) => {
                this.website = data
            }).catch()
        },
        async getWebsiteLayout() {
            await getWebsiteLayout().then(({ data }) => {
                this.layoutConfig = data
            }).catch()
        }
    }
})

export default useSystemStore
