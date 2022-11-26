export {
    rememberTab,
    getLastTab
}

function rememberTab(tab){
    window.localStorage.setItem('curTab', tab)
}

const getLastTab = () => {
    return window.localStorage.getItem('curTab')
}