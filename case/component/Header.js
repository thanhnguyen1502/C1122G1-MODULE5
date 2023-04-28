import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <>
                <>
                    <nav className="navbar navbar-light bg-light">
                        <div className="col-3">
                            <a className=" d-flex justify-content-center" href="../../ss2_jsx/blog/src#">
                                <img
                                    style={{width: "30%"}}
                                    src="https://furamavietnam.com/wp-content/uploads/2018/10/logo.png"
                                    alt=""
                                />
                            </a>
                        </div>

                        <div className="col-3">
                            <div
                                className="box bg-white"
                                style={{width: "50%%", height: "100%"}}
                            >
                                <div className="tripadvisor-logo" style={{width: "100%"}}>
                                    <img
                                        style={{width: "20%%"}}
                                        src="https://smartdata.tonytemplates.com/bestel/wp-content/uploads/2018/05/widget-tripadvisor-logo.png"
                                    />
                                </div>
                                <div className="tripadvisor-rating">
                                    <img
                                        style={{width: "20%"}}
                                        src="https://furamavietnam.com/wp-content/uploads/2018/08/widget-tripadvisor-rating.png"
                                    />
                                </div>
                                <div className="text-start">2,746 Reviews</div>
                            </div>
                        </div>

                        <div className="col-3 pt-3">
                            <div className="float-start pe-2" style={{height: "100%"}}>
                                <i className="fas fa-map-marker-alt" style={{color: "green"}}></i>
                            </div>
                            <div>
                                <p className="text-start">
                                    103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son
                                    District, Danang City, Vietnam
                                </p>
                                <p className="text-start ps-2">
                                    <span style={{color: "green"}}>7.0 km</span> from Danang Airport
                                </p>
                            </div>
                        </div>

                    </nav>
                    <div className="row bg-success sticky-top">
                        <div className="col-lg-3" />
                        <div className="col-lg-6 d-flex justify-content-center">
                            <nav className="navbar navbar-expand-lg navbar-light bg-success sticky-top">
                                <div className="container">
                                    <div
                                        className="collapse navbar-collapse"
                                        id="navbarSupportedContent1"
                                    >
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item navbar-brand">
                                                <NavLink to="/"><p className="nav-link active text-light">Home</p></NavLink>

                                            </li>
                                            <li className="nav-item navbar-brand">
                                                <NavLink to="/customer"><p className="nav-link active text-light">Customer</p></NavLink>

                                            </li>
                                            <li className="nav-item navbar-brand">
                                                <NavLink to="/employee"><p className="nav-link active text-light">Employee</p></NavLink>

                                            </li>
                                            <li className="nav-item navbar-brand">
                                                <NavLink to="/facility"><p className="nav-link active text-light">Facility</p></NavLink>
                                            </li>
                                            <li className="nav-item navbar-brand">
                                                <NavLink to="/contract"><p className="nav-link active text-light">Contract</p></NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="col-lg-3" />
                    </div>
                </>

            </>
        //     <div>
        //         <div className="row sticky-top bg-success">
        //             <div className="col-lg-3">
        //                 <img src="https://mikazuki.com.vn/vnt_upload/weblink/logo_mikazuki_01.svg" alt=""/>
        //             </div>
        //             <div className="col-lg-6 d-flex justify-content-center">
        //                 <nav className="navbar navbar-expand-lg sticky-top">
        //                     <div className="container">
        //                         <div className="collapse navbar-collapse">
        //                             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                                 <li className="nav-item navbar-brand">
        //                                     <NavLink to="/">Home</NavLink>
        //                                 </li>
        //                                 <li className="nav-item navbar-brand">
        //                                     <NavLink to="/customers">Customer</NavLink>
        //                                 </li>
        //                                 <li className="nav-item navbar-brand">
        //                                     <NavLink to="/facility">Facility</NavLink>
        //                                 </li>
        //                                 <li className="nav-item navbar-brand">
        //                                     <NavLink to="/contracts">Contract</NavLink>
        //                                 </li>
        //                                 <li className="nav-item navbar-brand">
        //                                     <a className="nav-link active text-dark" aria-current="page"
        //                                        href="/Furama?action=contractList"><b>Contract</b></a>
        //                                 </li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 </nav>
        //             </div>
        //             <div className="col-lg-3"></div>
        //         </div>
        //     </div>
        );
    }
}

export default Header;