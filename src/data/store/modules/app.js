const app={
    state: {
        system:{
            title:"大米工厂"
        },
        menu: {
            isCollapse: false,
            location: "V",   //V、VH、H三个值，V表示在左侧，VH表示横跨头部，H表示在头部
            list: [],
            obj:{}
        },
        tabs: {
            isShow: true
        },
        crumbs: {
            isShow: true
        },
        footer: {
            isShow: false
        }
    },
    mutations: {
        SET_MENU_ISCOLLAPSE: state => {
            state.menu.isCollapse = !state.menu.isCollapse
        },
        SETMENU_LIST: (state,menuList) => {
            state.menu.list=menuList
        }
    },
    actions: {
        setMenuIsCollapse({ commit }) {
            commit('SET_MENU_ISCOLLAPSE')
        },
        setMenuList({ commit },menuList) {
            commit('SETMENU_LIST', menuList)
        }
    }
}
export default app