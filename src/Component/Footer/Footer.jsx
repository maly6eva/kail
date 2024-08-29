import c from "./Footer.module.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom"


function Footer() {

    return <nav className={c.nav}>
        <div>
            <p>ИП Малышева Ксения Анатольевна УНП192966119</p>
            <p>Интернет-магазин 26.07.2010 внесен в торговый реестр РБ за №422330</p>

        </div>

        <div className={c.ssylky}>
            <a href="https://www.instagram.com/pobriakushka.bel/">
                <img className={c.ssy}
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png"
                     alt=""/>
            </a>
            <a href="https://m.vk.com/lovestory_minsk?own=1">
                <img className={c.ssy}
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/800px-VK_Compact_Logo_%282021-present%29.svg.png"
                     alt=""/>
            </a>
            <a href="https://img.freepik.com/free-psd/3d-square-with-facebook-logo_125540-1565.jpg">
                <img className={c.ssy}
                     src="https://cdn.icon-icons.com/icons2/4048/PNG/512/facebook_logo_icon_257007.png"
                     alt=""/>
            </a>
        </div>


        <ul className={c.title}>
            <li className={c.sites}>
                <CustomLink to="/nashistati" className={c.site}>Связаться с нами</CustomLink>
            </li>
            <li className={c.sites}>
                <CustomLink to="/obijuterii" className={c.site}>О бижутерии</CustomLink>
            </li>


        </ul>

    
    </nav>
}


function CustomLink({to, children, ...props}) {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({path: resolvePath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}


export default Footer;