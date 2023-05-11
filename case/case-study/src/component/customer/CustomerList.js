import {NavLink, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import * as CustomerService from "./service/CustomerService";
import ModalDelete from "./ModalDelete";

function CustomerList() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState([]);
    const [customerType, setCustomerType] = useState([])
    const [gender, setGender] = useState([])

    const list = async () => {
        const result = await CustomerService.findAll()
        setCustomer(result)
    }

    const listCustomerType = async () => {
        const result = await CustomerService.findAllCustomerType()
        setCustomerType(result)
    }

    const listGender = async () => {
        const result = await CustomerService.findAllGender()
        setGender(result)
    }
    useEffect(() => {

        listGender()
            .then()
        listCustomerType()
            .then()
        list()
            .then()
    }, [])


    const handleUpdate = (id) => {
        navigate(`/customer-update/${id}`);
    };

    const [deleteId, setDeleteId] = useState(null)
    const [deleteName, setDeleteName] = useState("")
    const getPropsCustomer = (id, name) => {
        setDeleteId(id)
        setDeleteName(name)
    }
    return (

        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-lg-12 text-center">
                    <h1>Customer Management</h1>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-lg-12 d-flex justify-content-center align-items-center">
                    <form
                        action=""
                        method="post"
                        className="d-flex"
                    >
                        <input
                            className="form-control me-2"
                            type="search"
                            name="keySearch"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-success" type="submit">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                fill="currentColor"
                                className="bi bi-search"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <table id="tableCustomer" className="table">
                        <thead>
                        <tr className="table-success">
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Birth Day</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Id Card</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Customer Type</th>
                            <th scope="col"/>
                            <th scope="col">
                                <button type='button' className='btn btn-success me-2'>
                                    <NavLink to='/facility-create'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             fill="currentColor"
                                             className="bi bi-cloud-plus" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                  d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
                                            <path
                                                d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                                        </svg>
                                    </NavLink>
                                </button>
                            </th>
                        </tr>
                        </thead>
                        <tbody>{
                            customer.map((value, index) => (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{value.name}</td>
                                        <td>{value.dataOfBirth}</td>
                                        <td>
                                            {
                                                gender?.filter(gd => gd.id === value.gender)[0]?.name
                                            }
                                        </td>
                                        <td>{value.idCard}</td>
                                        <td>{value.phone}</td>
                                        <td>{value.email}</td>
                                        <td>{value.address}</td>
                                        <td>
                                            {
                                                customerType?.filter(ct => ct.id === value.customerType)[0]?.name
                                            }
                                        </td>
                                        <td>
                                            <button className='btn btn-secondary'
                                                    onClick={() => handleUpdate(value.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                     fill="currentColor"
                                                     className="bi bi-pencil" viewBox="0 0 16 16">
                                                    <path
                                                        d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                                </svg>
                                            </button>

                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-secondary" data-bs-toggle="modal"
                                                data-bs-target="#modalDelete"
                                                onClick={() => getPropsCustomer(value.id, value.name)}>
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
                                    </tr>
                                )
                            )
                        }
                        </tbody>
                    </table>
                </div>
                <ModalDelete
                    id={deleteId}
                    name={deleteName}
                    getList={
                        () => {
                            list();
                        }
                    }
                />
            </div>

        </div>

    )
}

export default CustomerList;