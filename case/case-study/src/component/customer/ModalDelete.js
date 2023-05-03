import React, {useState} from 'react';
import * as CustomerService from "./service/CustomerService";

function ModalDelete(props) {
    const [customer, setCustomer] = useState([]);

    const handleDelete = async (id) => {
        await CustomerService.remove(id)
        props.getList();
        setCustomer(customer.filter(customer => customer.id !== id))

    };
    return (
        <>
            <div
                className="modal fade"
                id="modalDelete"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Delete Confirm
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            Are you sure delete customer: <span className='fw-bold'>{props.name}</span>
                            <span id="deleteName" className="fw-bold"/>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn-close-white"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button data-bs-dismiss="modal" type="button" className="btn btn-danger" onClick={() => handleDelete(props.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ModalDelete;