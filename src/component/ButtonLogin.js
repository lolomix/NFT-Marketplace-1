import { Link } from "react-router-dom"

export default function ButtonLogin () {
    return (
        <div>
            <div className="pt-2">
                <Link to="/login" style={{textDecoration: 'none'} } class="nav-item btn-solid-login border px-4 border-white">Login</Link>
            </div>
        </div>
    )
}