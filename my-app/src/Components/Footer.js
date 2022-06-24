import React from 'react'

export default function Footer() {
    return (
        <footer class="page-footer font-small special-color-dark pt-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <form id="newsletter" class="form-inline">
                            <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
                                aria-label="Search"></input>
                                <i class="fas fa-search" aria-hidden="true"></i>
                        </form>
                    </div>
                    <div class="col-md-6 mb-4">
                        <form class="input-group">
                            <input type="text" id="email" class="form-control form-control-sm" placeholder="Your email"
                                aria-label="Your email" aria-describedby="basic-addon2"></input>
                                <div class="input-group-append">
                                    <button id="submit" class="btn btn-sm btn-outline-white my-0" type="button">Sign up</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="footer-copyright text-center py-3">© 2022 Copyright:
                <a href="/"> outfitters.com</a>
            </div>
        </footer>
    )
}
