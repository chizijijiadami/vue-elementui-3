import router from 'router'
import store from 'store'
import { pagesRouterList } from 'router'
import { filterRouter } from './filter'
import getPageTitle from '../utils/getPageTitle'

router.beforeEach(async (to, from, next) => {
    document.title = getPageTitle(to.meta.title)
    if (store.getters.app.menu.list.length === 0) {
        store.dispatch("setMenuList", filterRouter(pagesRouterList))
        next({ ...to, replace: true })
    } else {
        next()
    }
})
router.afterEach(to => {
    if (store.getters.app.crumbs.isShow) {
        //很多场景下，Crumbs的值这么设置是不符合实际需要的，这里后面抽时间来补上。
        store.dispatch('setCrumbs', to.matched)
    }
    if (store.getters.app.tabs.isShow) {
        store.dispatch('setTabsList', to)
        store.dispatch('setTabsActivetab', to.name)
    }
})