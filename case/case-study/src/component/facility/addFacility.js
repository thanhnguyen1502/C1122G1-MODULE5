import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import * as CustomerService from "../customer/service/CustomerService";
import {useNavigate} from "react-router-dom";

import React from 'react';

function AddFacility() {
    let navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{name: '', gender: '', dataOfBirth: '', idCard: '', phone: '', email: '', address: ''}}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Required.")
                        .matches(
                            /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/,
                            "Invalid name format."
                        ),
                    dateOfBirth: Yup.string().required("Required."),
                    identity: Yup.string()
                        .required("Required.")
                        .matches(/^[0-9]{9}$|^[0-9]{12}$/, "Invalid identity format."),
                    phoneNumber: Yup.string()
                        .required("Required.")
                        .matches(
                            /^(090|091|\(84\)\+90|\(84\)\+91)[0-9]{7}$/,
                            "Invalid phone number format."
                        ),
                    email: Yup.string()
                        .required("Required.")
                        .email("Invalid email format."),
                    address: Yup.string().required("Required."),
                })}
                onSubmit={(values) => {
                    const create = async () => {
                        await CustomerService.create(values)
                        navigate('/')
                    }
                    create()
                        .then()
                }}
            >
                {() => (
                    <Form>
                        <div className="row mt-5">
                            <div className="col-lg-3"/>
                            <div style={{background: "#e9f2ef"}} className="col-lg-6 shadow-lg">
                                <h1 className="text-center">Create Facility Form</h1>
                                <form
                                    action="/ServiceFurama?action=addNewFacility"
                                    method="post"
                                    className="mt-5"
                                >
                                    <div className="mb-3" id="facilityType">
                                        <div className="form-check-inline">
                                            <b>Choice Facility Type:</b>
                                        </div>
                                        <div
                                            className="form-check form-check-inline "
                                            onClick="displayForm(villa.value)"
                                        >
                                            <Field type='text' placeholder='' name='facilityType' className='form-control' />

                                            <input
                                                required=""
                                                className="form-check-input"
                                                type="radio"
                                                name="facilityType"
                                                id="villa"
                                                defaultValue={1}
                                            />
                                            <label className="form-check-label" htmlFor="villa">
                                                Villa
                                            </label>
                                        </div>
                                        <div
                                            className="form-check form-check-inline"
                                            onClick="displayForm(house.value)"
                                        >
                                            <input
                                                required=""
                                                className="form-check-input"
                                                type="radio"
                                                name="facilityType"
                                                id="house"
                                                defaultValue={2}
                                            />
                                            <label className="form-check-label" htmlFor="house">
                                                House
                                            </label>
                                        </div>
                                        <div
                                            className="form-check form-check-inline"
                                            onClick="displayForm(room.value)"
                                        >
                                            <input
                                                required=""
                                                className="form-check-input"
                                                type="radio"
                                                name="facilityType"
                                                id="room"
                                                defaultValue={3}
                                            />
                                            <label className="form-check-label" htmlFor="room">
                                                Room
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">
                                            <b>Name:</b>
                                        </label>
                                        <Field type='text' placeholder='' name='name' className='form-control' />

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="area" className="form-label">
                                            <b>Area:</b>
                                        </label>
                                        <Field type='text' placeholder='' name='area' className='form-control' />

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="cost" className="form-label">
                                            <b>Cost:</b>
                                        </label>
                                        <Field type='text' placeholder='' name='cost' className='form-control' />

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="maxPeople" className="form-label">
                                            <b>Max People:</b>
                                        </label>
                                        <Field type='text' placeholder='' name='maxPeople' className='form-control' />

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="rentType" className="form-label">
                                            <b>Rent Type:</b>
                                        </label>
                                        <select
                                            id="rentType"
                                            name="rentType"
                                            className="form-select"
                                            aria-label="Default select example"
                                        >
                                            <option value={1}>year</option>
                                            <option value={2}>month</option>
                                            <option value={3}>day</option>
                                            <option value={4}>hour</option>
                                        </select>
                                    </div>
                                    <div className="mb-3" id="opt1" style={{display: "none"}}>
                                        <label htmlFor="roomStandard" className="form-label">
                                            <b>Room Standard:</b>
                                        </label>
                                        <select
                                            id="roomStandard"
                                            name="standard"
                                            className="form-select"
                                            aria-label="Default select example"
                                        >
                                            <option value="Normal">normal</option>
                                            <option value="Vip">vip</option>
                                        </select>
                                    </div>
                                    <div className="mb-3" id="opt2" style={{display: "none"}}>
                                        <label htmlFor="poolArea" className="form-label">
                                            <b>Pool Area:</b>
                                        </label>
                                        <Field type='text' placeholder='' name='poolArea' className='form-control' />

                                    </div>
                                    <div className="mb-3" id="opt3" style={{display: "none"}}>
                                        <label htmlFor="numberOfFloors" className="form-label">
                                            <b>Number Of Floors:</b>
                                        </label>
                                        <input
                                            type="number"
                                            defaultValue={0}
                                            name="floors"
                                            className="form-control"
                                            id="numberOfFloors"
                                        />
                                    </div>
                                    <div className="mb-3" id="opt4" style={{display: "none"}}>
                                        <label htmlFor="descriptionOtherConvenience" className="form-label">
                                            <b>Description Other Convenience:</b>
                                        </label>
                                        <input
                                            type="text"
                                            name="convenience"
                                            className="form-control"
                                            id="descriptionOtherConvenience"
                                        />
                                    </div>
                                    <div className="mb-3" id="opt5" style={{display: "none"}}>
                                        <label htmlFor="freeServiceIncluded" className="form-label">
                                            <b>Free Service Included:</b>
                                        </label>
                                        <input
                                            type="text"
                                            name="free"
                                            className="form-control"
                                            id="freeServiceIncluded"
                                        />
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-primary mb-3">
                                            Add New
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-3"/>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default AddFacility;