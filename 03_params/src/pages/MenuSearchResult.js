import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMenu } from '../apis/MenuAPI';
import boxStyle from './Menu.module.css';
import MenuItem from '../components/MenuItem';

function MenuSearchResult() {

    const [searchParams] = useSearchParams();

    const [menuList, setMenuList] = useState([]);

    const menuName = searchParams.get('menuName')

    useEffect(
        () => {
            setMenuList(searchMenu(menuName));
        },
        [menuName]
    );

    return (
        <div>
            <h1>검색된 메뉴</h1>
            <div className={ boxStyle.MenuBox }>
                { menuList.map(menu => <MenuItem key={ menu.menuCode} menu={ menu }/> )}
            </div>
        </div>
    );
}

export default MenuSearchResult;