import {contract} from "./contracts";

function ContractList(){
    return(
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-lg-12 text-center">
                    <h1>Contract List</h1>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-12">
                    <table className="table">
                        <thead>
                        <tr className="table-success">
                            <th scope="col">#</th>
                            <th scope="col">Service</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Deposit</th>
                            <th scope="col">Total Mony</th>
                            <th scope="col" colSpan={2}>
                                Attach Service
                            </th>
                        </tr>
                        </thead>
                        <tbody>{
                            contract.map((value,index)=>(
                                <tr key={index}>
                                    <th>{index}</th>
                                    <td>{value.facility.name}</td>
                                    <td>{value.customer.name}</td>
                                    <td>{value.dateStart}</td>
                                    <td>{value.dateEnd}</td>
                                    <td>{value.deposit}</td>
                                    <td>{value.totalMoney}</td>
                                    <td>
                                        {/* Button Create Contract Detail modal */}
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#createModal"
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalDelete"
                                        >
                                            Attach Service List
                                        </button>
                                    </td>
                                </tr>

                            ))

                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default ContractList;