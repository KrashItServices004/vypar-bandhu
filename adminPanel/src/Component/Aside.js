import React from 'react'
import { Link } from "react-router-dom";


const Aside = () => {

    return (
        <>
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/" >
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    {/* <!-- End Dashboard Nav --> */}

                    {/* <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="/">
                            <i className="bi bi-menu-button-wide"></i><span>Components</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to='/documents'>
                                    <i className="bi bi-circle"></i><span>Documents</span>
                                </Link>
                                <Link to='/Accordion'>
                                    <i className="bi bi-circle"></i><span>Accordion</span>
                                </Link>
                                <Link to='/Badges'>
                                    <i className="bi bi-circle"></i><span>Badges</span>
                                </Link>
                                <Link to='/Breadcrumbs'>
                                    <i className="bi bi-circle"></i><span>Breadcrumbs</span>
                                </Link>

                            </li>


                        </ul>
                    </li> */}
                    {/* <!-- End Components Nav --> */}

                    {/* <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/">
                            <i className="bi bi-journal-text"></i><span>Forms</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to='/forms-elements'>
                                    <i className="bi bi-circle " data-bs-target="#sidebar"></i><span>Form Elements</span>
                                </Link>
                            </li>

                        </ul>
                    </li> */}
                    {/* <!-- End Forms Nav --> */}
                    {/* 
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="/">
                            <i className="bi bi-layout-text-window-reverse"></i><span>Tables</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/GeneralTable">
                                    <i className="bi bi-circle"></i><span>General Table</span>
                                </Link>
                            </li>

                        </ul>
                    </li> */}
                    {/* <!-- End Tables Nav --> */}

                    {/* <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="/">
                            <i className="bi bi-bar-chart"></i><span>Charts</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="charts-nav" className="nav-content collapse     " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/Chart">
                                    <i className="bi bi-circle"></i><span>Chart.js</span>
                                </Link>
                            </li>

                        </ul>
                    </li> */}
                    {/* <!-- End Charts Nav --> */}

                    {/* <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="/">
                            <i className="bi bi-gem"></i><span>Icons</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/Icons">
                                    <i className="bi bi-circle"></i><span>Icons</span>
                                </Link>
                            </li>

                        </ul>
                    </li> */}
                    {/* <!-- End Icons Nav --> */}

                    <li className="nav-heading">Data Pages</li>
                    {/* 
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/Profile">
                            <i className="bi bi-person"></i>
                            <span>Profile</span>
                        </Link>
                    </li> */}
                    {/* <!-- End Profile Page Nav --> */}

                    {/* <li className="nav-item">
                        <Link className="nav-link collapsed" to="/Faq">
                            <i className="bi bi-question-circle"></i>
                            <span>F.A.Q</span>
                        </Link>
                    </li> */}
                    {/* <!-- End F.A.Q Page Nav --> */}
                    {/* 
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/Contact">
                            <i className="bi bi-envelope"></i>
                            <span>Contact</span>
                        </Link>
                    </li> */}
                    {/* <!-- End Contact Page Nav --> */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed " to="/Templates">
                            <i class="bi bi-file-earmark-text"></i>
                            <span>Templates</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed " to="/category">
                        <i class="bi bi-bookmark-star"></i>
                            <span>Category</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed " to="/DocumentList">
                        <i class="bi bi-card-checklist"></i>
                            <span>Document List</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed " to="/service">
                            <i class="bi bi-list-stars"></i>
                            <span>Service</span>
                        </Link>
                    </li>
                    {/* <!-- End Register Page Nav --> */}

                    {/* <li className="nav-item">
                        <Link className="nav-link collapsed" to="/Login">
                            <i className="bi bi-box-arrow-in-right"></i>
                            <span>Login</span>
                        </Link>
                    </li> */}
                    {/* <!-- End Login Page Nav --> */}

                    {/* <li className="nav-item">
                        <Link className="nav-link collapsed" to="/Error">
                            <i className="bi bi-dash-circle"></i>
                            <span>Error 404</span>
                        </Link>
                    </li> */}
                    {/* <!-- End Error 404 Page Nav --> */}

                    {/* <li className="nav-item">
                        <Link className="nav-link collapsed" to="/Blank">
                            <i className="bi bi-file-earmark"></i>
                            <span>Blank</span>
                        </Link>
                    </li> */}
                    {/* <!-- End Blank Page Nav --> */}

                </ul>
            </aside>

            {/* <!-- End Sidebar--> */}
        </>
    )
}

export default Aside
