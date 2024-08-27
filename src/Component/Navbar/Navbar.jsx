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
            <CustomLink href="/onas" className={c.site}>О нас</CustomLink>
            <CustomLink href="/kolca" className={c.site}>Кольца</CustomLink>
            <CustomLink href="/serejki" className={c.site}>Сережки</CustomLink>
            <CustomLink href="/braslety" className={c.site}>Браслеты</CustomLink>
            <CustomLink href="/onas" className={c.site}>О нас</CustomLink>
            <CustomLink href="/podveski" className={c.site}>Подвески</CustomLink>
        </ul>
    </nav>
}


function CustomLink({ href, children, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : "" }>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}




export default Navbar;