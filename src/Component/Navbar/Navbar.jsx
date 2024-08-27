import c from "./Navbar.module.css"


function Navbar() {
    return <nav className={c.nav}>
        <div className={c.imag}>
            <img className={c.images}
                 src="https://avatars.dzeninfra.ru/get-zen_doc/3396902/pub_5ea045dd8c23a2339ecf0e90_5ea96e2ad1669d6032e8da8c/scale_1200"
                 alt=""/>
            <a href="/" className={c.site_title}>Бижутерик</a>
        </div>

        <ul className={c.title}>
            <li className={c.sites}>
                <a href="/onas" className={c.site}>О нас</a>
            </li>
            <li className={c.sites}>
                <a href="/kolca" className={c.site}>Кольца</a>
            </li>
            <li className={c.sites}>
                <a href="/serejki" className={c.site}>Сережки</a>
            </li>
            <li className={c.sites}>
                <a href="/braslety" className={c.site}>Браслеты</a>
            </li>
            <li className={c.sites}>
                <a href="/podveski" className={c.site}>Подвески</a>
            </li>
        </ul>
    </nav>
}

export default Navbar;