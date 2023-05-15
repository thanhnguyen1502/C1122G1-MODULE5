import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {findById, updateProduct} from "./service/ProductService";
import {findAllProductType} from "./service/ProductTypeService";

function Update() {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [productType, setProducType] = useState([]);
    const navigate = useNavigate()


    useEffect(() => {
        const findAllData = async () => {
            const productApi = await findById(id);
            const category = await findAllProductType();

            setProducType(category.data);
            setProduct(productApi)
        }
        findAllData();
    }, [id])
    if (!product) return null;

    return (
        <>
            {
                product &&
                <Formik enableReinitialize={true}
                        initialValues={
                            {
                                productId: product.productId,
                                name: product.name,
                                date: product.date,
                                count: product.count,
                                productType: product.productType
                            }}
                        validationSchema={Yup.object({
                            name: Yup.string().required(".Required").max(100,),
                            count: Yup.string()
                                .required("Required.")
                                .matches(
                                    /^[0-9]$/,
                                    "Lớn hơn 0."
                                ),
                        })}
                        onSubmit={(values) => {
                            const update = async () => {
                                const data = {
                                    ...values,
                                    customerType: parseInt(values.customerType)
                                }
                                await update(values.id, data)
                                navigate('/')
                            }
                            update()
                                .then()
                            // const update = async () => {
                            //     const data = {
                            //         ...values
                            //     }
                            //     await updateProduct(values.id, values.productType, data)
                            //     navigate('/')
                            // }
                            // update()
                        }}>


                    {() => (
                    <Form>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-lg-3"/>
                                <div style={{background: "#e9f2ef"}} className="col-lg-6 shadow-lg">
                                    <div className="mb-5 mt-3 text-center">
                                        <h1>Edit Product Form</h1>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="productId" className="form-label fw-bold">
                                            Product Id:
                                        </label>
                                        <Field type='text' placeholder='' name='productId' className='form-control'/>

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label fw-bold">
                                            Name:
                                        </label>
                                        <Field type='text' placeholder='' name='name' className='form-control'/>
                                        <ErrorMessage name="name" component="div" className="text-danger"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="date" className="form-label fw-bold">
                                            Date:
                                        </label>
                                        <Field type='date' placeholder='' name='date' className='form-control'/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="count" className="form-label fw-bold">
                                            Count:
                                        </label>
                                        <Field type='number' placeholder='' name='count' className='form-control'/>
                                        <ErrorMessage name="count" component="div" className="text-danger"/>

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="productType" className='fw-bold'>Product Type</label>

                                        <Field as="select" id="productType" name="productType">
                                            <option className='fw-bold' value=''>Product Type</option>
                                            {
                                                productType.map((productTypes, index) => (
                                                    <option key={index} value={productTypes.id}>{productTypes.name}</option>
                                                ))
                                            }
                                        </Field>
                                    </div>
                                    <button className='btn btn-success' type="submit"> Submit</button>
                                </div>
                                <div/>
                            </div>
                        </div>
                    </Form>
                        )}
                </Formik>
            }
        </>
    );
}

export default Update;