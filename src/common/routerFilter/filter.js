import { MessageBox } from 'element-ui'
import store from 'store'
export function filterRouter(pagesRouterList) {
    let mennuList = pagesRouterList.filter(ele => ele.meta && ele.meta.isShow)
    try {
        if (mennuList.length <= 0) throw "没有可用菜单";
        filterPage(mennuList)
        return mennuList;
    } catch (err) {
        MessageBox({
            message: err,
            showCancelButton: false,
            confirmButtonText: '确定',
            type: 'error'
        })
    }
}

function filterPage(mennuList, pathFull, joinSign) {
    let pathFullCurrent = pathFull || ""
    let joinSignCurrent = joinSign || ""
    for (let i = 0; i < mennuList.length; i++) {
        const ele = mennuList[i];
        ele.pathFull = pathFullCurrent + joinSignCurrent + ele.path
        ele.showChildren = []
        store.getters.app.menu.obj[ele.name] = ele
        if (ele.children && ele.meta.isShow) {
            ele.showChildren = ele.children.filter(ele2 => ele2.meta.isShow)
            filterPage(ele.children, ele.pathFull, "/")
        }
    }
}