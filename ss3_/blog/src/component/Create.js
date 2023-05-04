import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {createBlog} from "./service/BlogService";
import * as Yup from "yup";

function Create() {
    const navigate = useNavigate()
    const today = new Date
    const date = today.getDay() + " - " + (today.getMonth() + 1) + " - " + today.getFullYear()

    return (
        <>
            <Formik initialValues={{title: '', category: '', updatedAt: date, content:'', slug: ''}}
                    validationSchema={Yup.object({
                        title: Yup.string().required(".Required"),
                        category: Yup.string().required(".Required"),
                        content: Yup.string().required(".Required"),
                    })}
                    onSubmit={(values) => {
                        (async () => {
                            await createBlog({...values});
                            navigate("/")
                        })();
                    }}>
                <Form>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-lg-3"/>
                            <div style={{background: "#e9f2ef"}} className="col-lg-6 shadow-lg">
                                <div className="mb-5 mt-3 text-center">
                                    <h1>Add New Blog Form</h1>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label fw-bold">
                                        Title:
                                    </label>
                                    <Field type='text' placeholder='' name='title' className='form-control'/>
                                    <ErrorMessage name="title" component="span" className="form-err" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label fw-bold">
                                        Category:
                                    </label>
                                    <Field type='text' placeholder='' name='category' className='form-control'/>
                                    <ErrorMessage name="category" component="span" className="form-err" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="content" className="form-label fw-bold">
                                        Content:
                                    </label>
                                    <Field type='text' placeholder='' name='content' className='form-control'/>
                                    <ErrorMessage name="content" component="span" className="form-err"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="slug" className="form-label fw-bold">
                                        Slug:
                                    </label>
                                    <Field type='text' placeholder='' name='slug' className='form-control'/>
                                </div>

                                <button className='btn btn-success' type="submit"> Submit</button>
                            </div>
                            <div/>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    );
}

export default Create;