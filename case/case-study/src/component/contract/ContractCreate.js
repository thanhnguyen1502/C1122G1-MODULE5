import React from 'react';
// rsf: function
function ContractCreate() {
    return (

            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabelCreate">
                            Contract Detail Form
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <form action="">
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="startDate" className="form-label fw-bold">
                                    Start Date:
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="startDate"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="endDate" className="form-label fw-bold">
                                    End Date:
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="endDate"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="deposit" className="form-label fw-bold">
                                    Deposit:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="deposit"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="totalMoney" className="form-label fw-bold">
                                    Total Money:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="totalMoney"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="customer" className="form-label fw-bold">
                                    Customer:
                                </label>
                                <select
                                    id="customer"
                                    className="form-select"
                                    aria-label="Default select example"
                                >
                                    <option value="">select customer</option>
                                    <option value={1}>Nguyễn Văn A</option>
                                    <option value={2}>Nguyễn Văn B</option>
                                    <option value={3}>Nguyễn Văn C</option>
                                    <option value={4}>Nguyễn VĂn D</option>
                                    <option value={4}>Nguyễn Văn E</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="serviceType" className="form-label fw-bold">
                                    Customer Type:
                                </label>
                                <select
                                    id="serviceType"
                                    className="form-select"
                                    aria-label="Default select example"
                                >
                                    <option value="">select service</option>
                                    <option value={1}>Villa</option>
                                    <option value={2}>House</option>
                                    <option value={3}>Room</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="attachService" className="form-label fw-bold">
                                    Attach Service:
                                </label>
                                <select
                                    id="attachService"
                                    className="form-select"
                                    aria-label="Default select example"
                                >
                                    <option value="">select service</option>
                                    <option value={1}>Karaoke</option>
                                    <option value={2}>Xe Đạp</option>
                                    <option value={3}>Xe Máy</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    );
}
export default ContractCreate;