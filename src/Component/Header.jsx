import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(){
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/create'>Create</Link>
        </nav>
    )
}