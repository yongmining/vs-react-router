import menus from '../data/menu-detail.json';

// 전체 메뉴 리스트 조회
export function getMenuList() {

    return menus;
}

export function getMenuDetail(menuCode) {
    
    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0];
}

export function searchMenu(menuName) {

    return menus.filter(menu => menu.menuName.match(menuName));
}