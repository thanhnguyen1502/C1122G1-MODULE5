import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import * as CustomerService from "./service/CustomerService";
import {useEffect, useState} from "react";


function CustomerCreate() {
    let navigate = useNavigate();
    const [gender, setGender] = useState()
    const [customerType, setCustomerType] = useState()

    useEffect(() => {
        const listGender = async () => {
            const types = await CustomerService.findAllGender();
            setGender(types)
        }
        const listCustomerType = async () => {
            const types = await CustomerService.findAllCustomerType()
            setCustomerType(types)
        }
        listGender()
        listCustomerType()
    }, [])

    if (!gender) return null;

    if (!customerType) return null;


    console.log(customerType)
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    gender: gender[0].id,
                    dataOfBirth: '',
                    idCard: '',
                    phone: '',
                    email: '',
                    address: '',
                    customerType: customerType[0].id
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Please enter.")
                    ,
                    idCard: Yup.string()
                        .required("Required.")
                        .matches(/^[0-9]{9}$|^[0-9]{9}$/, "Invalid identity format."),
                    phone: Yup.string()
                        .required("Required.")
                        .matches(
                            /^(090|091|\(84\)\+90|\(84\)\+91)[0-9]{7}$/,
                            "Invalid phone number format."
                        ),
                    email: Yup.string()
                        .required("Required.")
                        .email("Invalid email format."),
                    address: Yup.string().required("Required.")
                })}
                onSubmit={(values) => {
                    const create = async () => {
                        const data = {
                            ...values,
                            customerType: parseInt(values.customerType),
                            gender: parseInt(values.gender)
                        }
                        await CustomerService.create(data)
                        navigate('/customer')
                    }
                    create()
                        .then()
                }}
            >
                {() => (
                    <Form>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-lg-3"/>
                                <div style={{background: "#e9f2ef"}} className="col-lg-6 shadow-lg">
                                    <div className="mb-5 mt-3 text-center">
                                        <h1>Add New Customer Form</h1>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="nameCustomer" className="form-label fw-bold">
                                            Name Customer:
                                        </label>
                                        <Field type='text' placeholder='' name='name' className='form-control'/>
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="dataOfBirth" className="form-label fw-bold">
                                            Birth Day:
                                        </label>
                                        <Field type='text' placeholder='' name='dataOfBirth' className='form-control'/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Gender:
                                        </label>
                                        <Field as="select" className="form-select" name="gender">
                                            {gender.map((gend) => (
                                                <option key={gend.id} value={gend.id}>
                                                    {gend.name}
                                                </option>
                                            ))}
                                        </Field>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="idCard" className="form-label fw-bold">
                                            Id Card:
                                        </label>
                                        <Field type='text' placeholder='' name='idCard' className='form-control'/>
                                        <ErrorMessage
                                            name="idCard"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label fw-bold">
                                            Phone:
                                        </label>
                                        <Field type='text' placeholder='' name='phone' className='form-control'/>
                                        <ErrorMessage
                                            name="phone"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Email:
                                        </label>
                                        <Field type='text' placeholder='' name='email' className='form-control'/>
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Customer Type:
                                        </label>
                                        <Field as="select" className="form-select" name="customerType">
                                            {customerType.map((type) => (
                                                <option key={type.id} value={type.id}>
                                                    {type.name}
                                                </option>
                                            ))}
                                        </Field>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label fw-bold">
                                            Address:
                                        </label>
                                        <Field type='text' placeholder='' name='address' className='form-control'/>
                                        <ErrorMessage
                                            name="address"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>
                                    <button className='btn btn-success' type="submit"> Submit</button>
                                </div>
                                <div className="col-lg-3"/>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default CustomerCreate;