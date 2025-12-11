import './Header.css'
import ToyotaLogo from './assets/Toyota-logo.png'

export function Header() {
    return(
        <header className='Header'>
            <h1>Kanban</h1>
            <img className="ToyotaLogo" src={ToyotaLogo} alt="Toyota Logo" />
        </header>
    )
}