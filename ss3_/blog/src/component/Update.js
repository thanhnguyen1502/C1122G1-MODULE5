import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {findById, updateBlog} from "./service/BlogService";

function Update() {
    const {id} = useParams();
    const [blog, setBlog] = useState({});
    const navigate = useNavigate()
    const today = new Date
    const date = today.getDay() + " - " + (today.getMonth() + 1) + " - " + today.getFullYear()

    useEffect(()=>{
        const findAllData = async () => {
            const dataBlog = await findById(id);
            setBlog(dataBlog)
        }
        findAllData();
    },[id])
    if (!blog) return null;

    return (
        <>
            {
                blog &&
                <Formik enableReinitialize={true}
                        initialValues={{title: blog.title, category: blog.category, updatedAt: date,
                            content:blog.content, slug: blog.slug}}
                        onSubmit={(values) => {
                            const update = async () => {
                                const data = {
                                    ...values
                                }
                                await updateBlog(values.id, data)
                                navigate('/')
                            }
                            update()
                        }}>
                    <Form>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-lg-3"/>
                                <div style={{background: "#e9f2ef"}} className="col-lg-6 shadow-lg">
                                    <div className="mb-5 mt-3 text-center">
                                        <h1>Edit New Blog Form</h1>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label fw-bold">
                                            Title:
                                        </label>
                                        <Field type='text' placeholder='' name='title' className='form-control'/>

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="category" className="form-label fw-bold">
                                            Category:
                                        </label>
                                        <Field type='text' placeholder='' name='category' className='form-control'/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="content" className="form-label fw-bold">
                                            Content:
                                        </label>
                                        <Field type='text' placeholder='' name='content' className='form-control'/>
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
            }
        </>
    );
}

export default Update;