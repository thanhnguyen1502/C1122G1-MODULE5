import React, {useEffect, useState} from 'react';
import {findAll, removeProduct, searchByProduct} from "./service/ProductService";
import {findAllProductType} from "./service/ProductTypeService";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";

function List() {
    const [product, setProduct] = useState([])
    const [productType, setProductType] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            const productApi = await findAll();
            const productTypeApi = await findAllProductType();

            setProduct(productApi.data)
            setProductType(productTypeApi.data)
        })();
    }, []);

    const handleUpdate = (id) => {
        navigate(`/update/${id}`);
    };

    const [idDelete, setIdDelete] = useState('');
    const [nameDelete, setNameDelete] = useState('')
    const handleDelete = async (id) => {
        await removeProduct(id)
        setProduct(product.filter(p => p.id !== id))
        alert("xoá thành công! ")
    }

    const getInfodelete = (id, name) => {
        setIdDelete(id)
        setNameDelete(name)
    }
    return (
        <>
            <h1 className='text-center'>Management Product</h1>
            <Formik initialValues={{name: '', productType: ''}}
                    onSubmit={async (values) => {
                        const result = await searchByProduct(
                            values.name, values.productType
                        )
                        if (result.length === 0) {
                            alert("không tìm thấy kết quả")
                        } else {
                            setProduct(result)
                        }
                    }}>
                <Form>
                    <div>
                        <label htmlFor="name" className='fw-bold'>Name</label>
                        <Field id="name" name="name"/>

                        <label htmlFor="productType" className='fw-bold'>Product Type</label>
                        <Field as="select" id="productType" name="productType">
                            <option className='fw-bold' value=''>Product Type</option>
                            {
                                productType.map((productTypes, index) => (
                                    <option key={index} value={productTypes.id}>{productTypes.name}</option>
                                ))
                            }
                        </Field>
                        <button type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>Stt</th>
                    <th>Product Id</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Count</th>
                    <th>Product Type</th>
                </tr>
                </thead>
                <tbody>
                {
                    product.map((products, index)=>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{products.productId}</td>
                            <td>{products.name}</td>
                            <td>{products.date}</td>
                            <td>{products.count}</td>
                            <td>{productType.filter((pt)=> pt.id === products.productType)[0]?.name}</td>

                            <td>
                                <button className='btn btn-danger' type="button" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => getInfodelete(products.id, products.name)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                         fill="currentColor"
                                         className="bi bi-trash" viewBox="0 0 16 16">
                                        <path
                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd"
                                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </button>
                            </td>
                            <td>
                                <button className='btn btn-success' onClick={() => handleUpdate(products.id)}>Edit
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <div
                className="modal fade" id="exampleModal" tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Delete post
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">Do you want to delete <span
                            className="fw-bold">{nameDelete}</span> post ?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => handleDelete(idDelete)}
                                data-bs-dismiss="modal"
                                type="button"
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default List;