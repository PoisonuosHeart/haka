import {useHistory} from 'react-router-dom'
export const Header = () => {
    const history = useHistory()
    
    const forBusines = () => {
        history.push("/sendtarget")
    }
    return (
        <header>
        <ul className="nav__list">
                <li className="nav__item"><a href="/" className="nav__link">Кто мы?</a></li>
                <li className="nav__item"><a href="/" className="nav__link">Загрузить фото</a></li>
                <li className="nav__item" onClick={forBusines}><a href="/sendtarget" className="nav__link">Для Бизнеса</a></li>
            </ul>
            </header>
    )
}