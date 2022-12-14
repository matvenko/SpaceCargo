import React from 'react';
import './header.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (<div className="w3_agileits_top_nav">
        <ul id="gn-menu" className="gn-menu-main">
            <li className="gn-trigger">
                <a href="" className="gn-icon gn-icon-menu"><i className="fa fa-bars"
                                                               aria-hidden="true"></i><span>Menu</span></a>
                <nav className="gn-menu-wrapper">
                    <div className="gn-scroller scrollbar1">
                        <ul className="gn-menu agile_menu_drop">
                            <li><a href="main-page.html"> <i className="fa fa-tachometer"></i> Dashboard</a></li>
                            <li>
                                <a href="#"><i className="fa fa-cogs" aria-hidden="true"></i> UI Components <i
                                    className="fa fa-angle-down" aria-hidden="true"></i></a>
                                <ul className="gn-submenu">
                                    <li className="mini_list_agile"><a href="buttons.html"><i
                                        className="fa fa-caret-right" aria-hidden="true"></i> Buttons</a></li>
                                    <li className="mini_list_w3"><a href="grids.html"> <i
                                        className="fa fa-caret-right" aria-hidden="true"></i> Grids</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"> <i className="fa fa-file-text-o" aria-hidden="true"></i>Forms <i
                                    className="fa fa-angle-down" aria-hidden="true"></i></a>
                                <ul className="gn-submenu">
                                    <li className="mini_list_agile"><a href="input.html"><i
                                        className="fa fa-caret-right" aria-hidden="true"></i> Inputs</a></li>
                                    <li className="mini_list_w3"><a href="validation.html"><i
                                        className="fa fa-caret-right" aria-hidden="true"></i> Validation</a></li>
                                </ul>
                            </li>
                            <li><a href="table.html"> <i className="fa fa-table" aria-hidden="true"></i> Tables</a>
                            </li>
                            <li><a href="#"><i className="fa fa-list" aria-hidden="true"></i>Short Codes <i
                                className="fa fa-angle-down" aria-hidden="true"> </i></a>
                                <ul className="gn-submenu">
                                    <li className="mini_list_agile"><a href="typo.html"><i
                                        className="fa fa-caret-right" aria-hidden="true"></i> Typography</a></li>
                                    <li className="mini_list_w3"><a href="icons.html"> <i
                                        className="fa fa-caret-right" aria-hidden="true"></i> Icons</a></li>

                                </ul>
                            </li>

                            <li><a href="charts.html"> <i className="fa fa-line-chart"
                                                          aria-hidden="true"></i> Charts</a></li>
                            <li><a href="maps.html"><i className="fa fa-map-o" aria-hidden="true"></i> Maps</a></li>
                            <li className="page">
                                <a href="#"><i className="fa fa-files-o" aria-hidden="true"></i> Pages <i
                                    className="fa fa-angle-down" aria-hidden="true"></i></a>
                                <ul className="gn-submenu">

                                    <li className="mini_list_agile"><a href="signin.html"> <i
                                        className="fa fa-caret-right" aria-hidden="true"></i> Sign In</a></li>
                                    <li className="mini_list_w3"><a href="signup.html"> <i
                                        className="fa fa-caret-right" aria-hidden="true"></i> Sign Up</a></li>
                                    <li className="mini_list_agile error"><a href="404.html"> <i
                                        className="fa fa-caret-right" aria-hidden="true"></i> Error 404 </a></li>

                                    <li className="mini_list_w3_line"><a href="calendar.html"> <i
                                        className="fa fa-caret-right" aria-hidden="true"></i> Calendar</a></li>
                                </ul>
                            </li>
                            <li>
                                <i className="fa fa-suitcase" aria-hidden="true"></i>More <i
                                className="fa fa-angle-down" aria-hidden="true"></i>
                                <ul className="gn-submenu">
                                    <li className="mini_list_agile"><a href="faq.html"> <i
                                        className="fa fa-caret-right" aria-hidden="true"></i> Faq</a></li>
                                    <li className="mini_list_w3"><a href="blank.html"> <i
                                        className="fa fa-caret-right" aria-hidden="true"></i> Blank Page</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </li>

            <li className="second logo">
                <h1>
                    <NavLink to="/MainPage">Space Cargo </NavLink>
                </h1>
            </li>
            <li><NavLink to="/Cargo"> Cargo </NavLink></li>
            <li className="second admin-pic">
                <ul className="top_dp_agile">
                    <li className="dropdown profile_details_drop">

                        <div className="profile_img">
                                    <span className="prfil-img">
                                            <NavLink to="/LoginForm">
                                            <img
                                                src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                                                alt=""/>
                                            </NavLink>
                                    </span>
                        </div>

                        <ul className="dropdown-menu drp-mnu">
                            <li><a href="#"><i className="fa fa-cog"></i> Settings</a></li>
                            <li><a href="#"><i className="fa fa-user"></i> Profile</a></li>
                            <li><a href="#"><i className="fa fa-sign-out"></i> Logout</a></li>
                        </ul>
                    </li>

                </ul>
            </li>
            <li className="second top_bell_nav">
                <ul className="top_dp_agile ">
                    <li className="dropdown head-dpdn">
                        <a href="/Cargo" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true"><i
                            className="fa fa-bell-o" aria-hidden="true"></i> <span
                            className="badge blue">4</span></a>
                        <ul className="dropdown-menu">
                            <li>
                                <div className="notification_header">
                                    <h3>Your Notifications</h3>
                                </div>
                            </li>
                            <li><a href="#">
                                <div className="user_img"><img src="images/a3.jpg" alt=""/></div>
                                <div className="notification_desc">
                                    <h6>John Smith</h6>
                                    <p>Lorem ipsum dolor</p>
                                    <p><span>1 hour ago</span></p>
                                </div>
                                <div className="clearfix"></div>
                            </a></li>
                            <li className="odd"><a href="#">
                                <div className="user_img"><img src="images/a1.jpg" alt=""/></div>
                                <div className="notification_desc">
                                    <h6>Jasmin Leo</h6>
                                    <p>Lorem ipsum dolor</p>
                                    <p><span>3 hour ago</span></p>
                                </div>
                                <div className="clearfix"></div>
                            </a></li>
                            <li><a href="#">
                                <div className="user_img"><img src="images/a2.jpg" alt=""/></div>
                                <div className="notification_desc">
                                    <h6>James Smith</h6>
                                    <p>Lorem ipsum dolor</p>
                                    <p><span>2 hour ago</span></p>
                                </div>
                                <div className="clearfix"></div>
                            </a></li>
                            <li><a href="#">
                                <div className="user_img"><img src="images/a4.jpg" alt=""/></div>
                                <div className="notification_desc">
                                    <h6>James Smith</h6>
                                    <p>Lorem ipsum dolor</p>
                                    <p><span>1 hour ago</span></p>
                                </div>
                                <div className="clearfix"></div>
                            </a></li>
                            <li>
                                <div className="notification_bottom">
                                    <a href="#">See all Notifications</a>
                                </div>
                            </li>
                        </ul>
                    </li>

                </ul>
            </li>
            <li className="second top_bell_nav">
                <ul className="top_dp_agile ">
                    <li className="dropdown head-dpdn">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true"><i
                            className="fa fa-envelope-o" aria-hidden="true"></i> <span
                            className="badge blue">3</span></a>
                        <ul className="dropdown-menu">
                            <li>
                                <div className="notification_header">
                                    <h3>Your Messages</h3>
                                </div>
                            </li>
                            <li><a href="#">
                                <div className="user_img"><img src="images/a3.jpg" alt=""/></div>
                                <div className="notification_desc">
                                    <h6>John Smith</h6>
                                    <p>Lorem ipsum dolor</p>
                                    <p><span>3 hour ago</span></p>
                                </div>
                                <div className="clearfix"></div>
                            </a></li>
                            <li className="odd"><a href="#">
                                <div className="user_img"><img src="images/a1.jpg" alt=""/></div>
                                <div className="notification_desc">
                                    <h6>Jasmin Leo</h6>
                                    <p>Lorem ipsum dolor</p>
                                    <p><span>2 hour ago</span></p>
                                </div>
                                <div className="clearfix"></div>
                            </a></li>
                            <li><a href="#">
                                <div className="user_img"><img src="images/a2.jpg" alt=""/></div>
                                <div className="notification_desc">
                                    <h6>James Smith</h6>
                                    <p>Lorem ipsum dolor</p>
                                    <p><span>1 hour ago</span></p>
                                </div>
                                <div className="clearfix"></div>
                            </a></li>
                            <li>
                                <div className="notification_bottom">
                                    <a href="#">See all Messages</a>
                                </div>
                            </li>
                        </ul>
                    </li>

                </ul>
            </li>
            <li className="second top_bell_nav">
                <ul className="top_dp_agile ">
                    <li className="dropdown head-dpdn">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                            className="fa fa-tasks"></i><span className="badge blue">9</span></a>
                        <ul className="dropdown-menu">
                            <li>
                                <div className="notification_header">
                                    <h3>You have 4 Pending tasks</h3>
                                </div>
                            </li>
                            <li><a href="#">
                                <div className="task-info">
                                    <span className="task-desc">Database update</span><span
                                    className="percentage">40%</span>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="progress progress-striped active">
                                    <div className="bar yellow"></div>
                                </div>
                            </a></li>
                            <li><a href="#">
                                <div className="task-info">
                                    <span className="task-desc">Dashboard done</span><span
                                    className="percentage">90%</span>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="progress progress-striped active">
                                    <div className="bar green"></div>
                                </div>
                            </a></li>
                            <li><a href="#">
                                <div className="task-info">
                                    <span className="task-desc">Mobile App</span><span
                                    className="percentage">33%</span>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="progress progress-striped active">
                                    <div className="bar red"></div>
                                </div>
                            </a></li>
                            <li><a href="#">
                                <div className="task-info">
                                    <span className="task-desc">Issues fixed</span><span
                                    className="percentage">80%</span>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="progress progress-striped active">
                                    <div className="bar  blue"></div>
                                </div>
                            </a></li>
                            <li>
                                <div className="notification_bottom">
                                    <a href="#">See all pending tasks</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

        </ul>

    </div>);
}

export default Header;