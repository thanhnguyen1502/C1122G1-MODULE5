import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as CustomerService from "./service/CustomerService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";


function CustomerUpdate() {
    const {id} = useParams();
    const [customer, setCustomer] = useState({});
    const [customerType, setCustomerType] = useState([]);
    const [gender, setGender] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        const findAllData = async () => {
            try {
                const dataCustomer = await CustomerService.findById(id)
                setCustomer(dataCustomer)

                const dataCustomerType = await CustomerService.findAllCustomerType()
                setCustomerType(dataCustomerType)

                const dataGender = await CustomerService.findAllGender()
                setGender(dataGender)
            } catch (err) {
                console.log(err)
            }
        };
        findAllData();
    }, [id])
    if (!gender) return null;

    if (!customerType) return null;
    return (
        <>
            {
                customer &&
                <Formik enableReinitialize={true}
                        initialValues={{
                            id: customer.id,
                            name: customer.name,
                            gender: customer.gender,
                            dataOfBirth: customer.dataOfBirth,
                            idCard: customer.idCard,
                            phone: customer.phone,
                            email: customer.email,
                            address: customer.address,
                            customerType: customer.customerType
                        }}
                        validationSchema={
                            Yup.object(
                                {
                                    name: Yup.string().required("Please enter"),
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
                                }
                            )
                        }
                        onSubmit={(values) => {
                            const update = async () => {
                                const data = {
                                    ...values,
                                    gender: parseInt(values.gender),
                                    customerType: parseInt(values.customerType)
                                }
                                await CustomerService.update(values.id, data)
                                navigate('/customer')
                            }
                            update()
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
                                            <h1>Edit Customer Form</h1>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="nameCustomer" className="form-label fw-bold">
                                                Name Customer:
                                            </label>
                                            <Field type='text' placeholder='' name='name' className='form-control'/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="dataOfBirth" className="form-label fw-bold">
                                                Birth Day:
                                            </label>
                                            <Field type='text' placeholder='' name='dataOfBirth'
                                                   className='form-control'/>
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

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label fw-bold">
                                                Phone:
                                            </label>
                                            <Field type='text' placeholder='' name='phone' className='form-control'/>

                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Email:
                                            </label>
                                            <Field type='text' placeholder='' name='email' className='form-control'/>

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
                                        </div>
                                        <button className='btn btn-success' type="submit"> Submit</button>
                                    </div>
                                    <div className="col-lg-3"/>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            }

        </>
    )
}

export default CustomerUpdate;