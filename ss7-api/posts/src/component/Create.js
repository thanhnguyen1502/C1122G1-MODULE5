import {Link} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import * as blogService from "../service/postService";

function Create() {
    return (
        <>
            <Link className="btn btn-success" to={"/"}>
                Home
            </Link>
            <Formik
                initialValues={{title: "", slug: "", category: "", thumbnail_url: "",}}
                validationSchema={Yup.object({
                    title: Yup.string().required(".Required"),
                    slug: Yup.string().required(".Required"),
                    category: Yup.string().required(".Required"),
                    thumbnail_url: Yup.string().required(".Required"),
                })}
                onSubmit={(values) => {
                    const create = async () => {
                        await blogService.create(values);
                    };
                    create();
                }}
            >
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
                                    <label htmlFor="thumbnail_url" className="form-label fw-bold">
                                        Thumbnail url:
                                    </label>
                                    <Field type='text' placeholder='' name='thumbnail_url' className='form-control'/>
                                    <ErrorMessage name="thumbnail_url" component="span" className="form-err"/>
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