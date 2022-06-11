import { Link } from "react-router-dom"

export default function ButtonLogin () {
    return (
        <div>
            <div className="p-2">
                <Link to="/login" style={{textDecoration: 'none'} } class="nav-item btn-solid-login">Login</Link>
            </div>
        </div>
    )
}