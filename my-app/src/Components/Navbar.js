import React from 'react'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark  " style={{backgroundColor:"grey" }}>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="/">Home</a>
                    <a class="nav-item nav-link" href="/">News</a>
                    <a class="nav-item nav-link" href="/">Contact</a>
                    <a class="nav-item nav-link" href="/">About</a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;