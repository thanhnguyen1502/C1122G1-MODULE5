import facilities from "./Facilities";
import facilitiesList from "./Facilities";
import {NavLink} from "react-router-dom";
function FacilityList() {
    return (
        <>
            <div style={{ maxWidth: "2000px", marginTop: "70px" }}>
                <div className="row mt-5">
                    <div className="col-lg-12 text-center">
                        <h1>Facility Type</h1>
                    </div>
                </div>

                <div className="room container">
                    <div className="element-button mb-5 text-end">
                        <button type='button' className='btn btn-warning ms2'>
                            <NavLink to='/facility-create'>+</NavLink>
                        </button>
                    </div>
                    <div className="row">
                        {facilitiesList.map((facility, index) => (
                            <div className="col-4" key={index}>
                                <div className="card">
                                    <img
                                        src={facility.facilityImg}
                                        className="card-img-top"
                                        alt="..."
                                        width={370}
                                        height={239}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{facility.facilityName}</h5>
                                        <p className="card-text">{facility.facilityArea}</p>
                                        <button
                                            style={{ marginRight: "5px" }}
                                            type="button"
                                            className="btn btn-danger"
                                            data-toggle="modal"
                                            data-target="#exampleModal"
                                        >
                                            <i className="fas fa-trash-alt">Xoá</i>
                                        </button>
                                        <a
                                            className="btn btn-primary btn-sm edit"
                                            href=""
                                        >
                                            <i className="fas fa-edit">Chỉnh sửa</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-5">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        <i className="ti-angle-left"></i>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        <i className="ti-angle-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FacilityList;