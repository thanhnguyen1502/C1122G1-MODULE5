import { Component } from "react";

class EditFacility extends Component {
    render() {
        return (
            <>
    {/*            <div className="row mt-5">*/}
    {/*                <div className="col-lg-3"/>*/}
    {/*                <div style={{background: "#e9f2ef"}} className="col-lg-6 shadow-lg">*/}
    {/*                    <h1 className="text-center">Create Facility Form</h1>*/}
    {/*                    <form className="mt-5">*/}
    {/*                        <div className="mb-3" id="facilityType">*/}
    {/*                            <div className="form-check-inline">*/}
    {/*                                <b>Choice Facility Type:</b>*/}
    {/*                            </div>*/}
    {/*                            <input*/}
    {/*                                type="text"*/}
    {/*                                hidden=""*/}
    {/*                                id="facilityTypeValue"*/}
    {/*                                defaultValue="${facility.facilityType}"*/}
    {/*                            />*/}
    {/*                            <div*/}
    {/*                                className="form-check form-check-inline "*/}
    {/*                                onClick="displayForm(villa.value)"*/}
    {/*                            >*/}
    {/*                                <input*/}
    {/*                                    className="form-check-input"*/}
    {/*                                    type="radio"*/}
    {/*                                    name="facility"*/}
    {/*                                    id="villa"*/}
    {/*                                    defaultValue={1}*/}
    {/*                                />*/}
    {/*                                <label className="form-check-label" htmlFor="villa">*/}
    {/*                                    Villa*/}
    {/*                                </label>*/}
    {/*                            </div>*/}
    {/*                            <div*/}
    {/*                                className="form-check form-check-inline"*/}
    {/*                                onClick="displayForm(house.value)"*/}
    {/*                            >*/}
    {/*                                <input*/}
    {/*                                    className="form-check-input"*/}
    {/*                                    type="radio"*/}
    {/*                                    name="facility"*/}
    {/*                                    id="house"*/}
    {/*                                    defaultValue={2}*/}
    {/*                                />*/}
    {/*                                <label className="form-check-label" htmlFor="house">*/}
    {/*                                    House*/}
    {/*                                </label>*/}
    {/*                            </div>*/}
    {/*                            <div*/}
    {/*                                className="form-check form-check-inline"*/}
    {/*                                onClick="displayForm(room.value)"*/}
    {/*                            >*/}
    {/*                                <input*/}
    {/*                                    className="form-check-input"*/}
    {/*                                    type="radio"*/}
    {/*                                    name="facility"*/}
    {/*                                    id="room"*/}
    {/*                                    defaultValue={3}*/}
    {/*                                />*/}
    {/*                                <label className="form-check-label" htmlFor="room">*/}
    {/*                                    Room*/}
    {/*                                </label>*/}
    {/*                            </div>*/}
    {/*                        </div>*/}
    {/*                        <div className="mb-3">*/}
    {/*                            <label htmlFor="name" className="form-label">*/}
    {/*                                <b>Name:</b>*/}
    {/*                            </label>*/}
    {/*                            <input*/}
    {/*                                type="text"*/}
    {/*                                defaultValue="${facility.name}"*/}
    {/*                                className="form-control"*/}
    {/*                                id="name"*/}
    {/*                            />*/}
    {/*                        </div>*/}
    {/*                        <div className="mb-3">*/}
    {/*                            <label htmlFor="area" className="form-label">*/}
    {/*                                <b>Area:</b>*/}
    {/*                            </label>*/}
    {/*                            <input*/}
    {/*                                type="number"*/}
    {/*                                defaultValue="${facility.area}"*/}
    {/*                                className="form-control"*/}
    {/*                                id="area"*/}
    {/*                            />*/}
    {/*                        </div>*/}
    {/*                        <div className="mb-3">*/}
    {/*                            <label htmlFor="cost" className="form-label">*/}
    {/*                                <b>Cost:</b>*/}
    {/*                            </label>*/}
    {/*                            <input*/}
    {/*                                type="number"*/}
    {/*                                defaultValue="${facility.cost}"*/}
    {/*                                className="form-control"*/}
    {/*                                id="cost"*/}
    {/*                            />*/}
    {/*                        </div>*/}
    {/*                        <div className="mb-3">*/}
    {/*                            <label htmlFor="maxPeople" className="form-label">*/}
    {/*                                <b>Max People:</b>*/}
    {/*                            </label>*/}
    {/*                            <input*/}
    {/*                                type="number"*/}
    {/*                                defaultValue="${facility.maxPeople}"*/}
    {/*                                className="form-control"*/}
    {/*                                id="maxPeople"*/}
    {/*                            />*/}
    {/*                        </div>*/}
    {/*                        <div className="mb-3">*/}
    {/*                            <label htmlFor="rentType" className="form-label">*/}
    {/*                                <b>Rent Type:</b>*/}
    {/*                            </label>*/}
    {/*                            <select*/}
    {/*                                id="rentType"*/}
    {/*                                className="form-select"*/}
    {/*                                aria-label="Default select example"*/}
    {/*                            >*/}
    {/*                                <option value="${facilityType.id}">*/}
    {/*                                    ${"{"}facilityType.name{"}"}*/}
    {/*                                </option>*/}
    {/*                                <option value={1}>year</option>*/}
    {/*                                <option value={2}>month</option>*/}
    {/*                                <option value={3}>day</option>*/}
    {/*                                <option value={4}>hour</option>*/}
    {/*                            </select>*/}
    {/*                        </div>*/}
    {/*                        <div className="mb-3" id="opt1" style={{display: "none"}}>*/}
    {/*                            <label htmlFor="roomStandard" className="form-label">*/}
    {/*                                <b>Room Standard:</b>*/}
    {/*                            </label>*/}
    {/*                            <select*/}
    {/*                                id="roomStandard"*/}
    {/*                                className="form-select"*/}
    {/*                                aria-label="Default select example"*/}
    {/*                            >*/}
    {/*                                <option selected="">select room standard</option>*/}
    {/*                                <option value={1}>Vip</option>*/}
    {/*                                <option value={2}>Normal</option>*/}
    {/*                            </select>*/}
    {/*                        </div>*/}
    {/*                        <div className="mb-3" id="opt2" style={{display: "none"}}>*/}
    {/*                            <label htmlFor="poolArea" className="form-label">*/}
    {/*                                <b>Pool Area:</b>*/}
    {/*                            </label>*/}
    {/*                            <input*/}
    {/*                                type="number"*/}
    {/*                                defaultValue={0}*/}
    {/*                                className="form-control"*/}
    {/*                                id="poolArea"*/}
    {/*                            />*/}
    {/*                        </div>*/}
    {/*                        <div className="mb-3" id="opt3" style={{display: "none"}}>*/}
    {/*                            <label htmlFor="numberOfFloors" className="form-label">*/}
    {/*                                <b>Number Of Floors:</b>*/}
    {/*                            </label>*/}
    {/*                            <input*/}
    {/*                                type="number"*/}
    {/*                                defaultValue={0}*/}
    {/*                                className="form-control"*/}
    {/*                                id="numberOfFloors"*/}
    {/*                            />*/}
    {/*                        </div>*/}
    {/*                        <div className="mb-3" id="opt4" style={{display: "none"}}>*/}
    {/*                            <label htmlFor="descriptionOtherConvenience" className="form-label">*/}
    {/*                                <b>Description Other Convenience:</b>*/}
    {/*                            </label>*/}
    {/*                            <input*/}
    {/*                                type="number"*/}
    {/*                                className="form-control"*/}
    {/*                                id="descriptionOtherConvenience"*/}
    {/*                            />*/}
    {/*                        </div>*/}
    {/*                        <div className="mb-3" id="opt5" style={{display: "none"}}>*/}
    {/*                            <label htmlFor="freeServiceIncluded" className="form-label">*/}
    {/*                                <b>Free Service Included:</b>*/}
    {/*                            </label>*/}
    {/*                            <input*/}
    {/*                                type="number"*/}
    {/*                                className="form-control"*/}
    {/*                                id="freeServiceIncluded"*/}
    {/*                            />*/}
    {/*                        </div>*/}
    {/*                        <button type="submit" className="btn btn-primary mb-3">*/}
    {/*                            Submit*/}
    {/*                        </button>*/}
    {/*                    </form>*/}
    {/*                </div>*/}
    {/*                <div className="col-lg-3"/>*/}
    {/*            </div>*/}

            </>
        );
    }
}
export default EditFacility;