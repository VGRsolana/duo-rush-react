import './Nav.css';

function Nav() {
    return (
        <nav className="nav">
            <div className="logo">
                <img src="" alt="Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="">Link 1</a></li>
                <li><a href="">Link 2</a></li>
                <li><a href="">Link 3</a></li>
            </ul>
        </nav>
    );
}

export default Nav;