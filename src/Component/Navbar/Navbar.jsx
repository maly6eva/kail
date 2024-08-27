import c from "./Navbar.module.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom"


function Navbar() {

    return <nav className={c.nav}>
        <div className={c.imag}>
            <img className={c.images}
                 src="https://avatars.dzeninfra.ru/get-zen_doc/3396902/pub_5ea045dd8c23a2339ecf0e90_5ea96e2ad1669d6032e8da8c/scale_1200"
                 alt="img"/>
            <Link  to="/" className={c.site_title}>Бижутерик</Link>
        </div>

        <ul className={c.title}>
            <li className={c.sites}>
                <CustomLink to="/onas" className={c.site}>О нас</CustomLink>
            </li>
            <li className={c.sites}>
                <CustomLink to="/kolca" className={c.site}>Кольца</CustomLink>
            </li>
           <li className={c.sites}>
               <CustomLink to="/serejki" className={c.site}>Сережки</CustomLink>
           </li>
            <li className={c.sites}>
                <CustomLink to="/braslety" className={c.site}>Браслеты</CustomLink>
            </li>
            <li className={c.sites}>
                <CustomLink to="/podveski" className={c.site}>Подвески</CustomLink>
            </li>

        </ul>
    </nav>
}


function CustomLink({ to, children, ...props}) {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({path: resolvePath.pathname, end: true})
    return (
        <li className={isActive ? "active" : "" }>
            <Link  to={to} {...props}>{children}</Link>
        </li>
    )
}




export default Navbar;