import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <div>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">소개</Link></li>
                <li><Link to="/menu">메뉴목록</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;