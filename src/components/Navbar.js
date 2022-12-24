import React , {useState} from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const [active , setActive] = useState(0)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{padding:"15px 10%"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">PERN</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${active == 0 ? "active" : ""}`} onClick={() => setActive(0)} aria-current="page" to="/" >Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${active == 1 ? "active" : ""}`} onClick={() => setActive(1)} to="/add">Add product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${active == 2 ? "active" : ""}`} onClick={() => setActive(2)} to="/about">About me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar