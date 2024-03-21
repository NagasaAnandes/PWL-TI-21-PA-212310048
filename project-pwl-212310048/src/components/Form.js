import React from "react";

const Form = () => {

    return (
        <div className="mt-5">
            <div className="container ">
                <div className="row justify-content-center ">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <h2>Form Submit</h2>
                                    <div classNameName="mb-3">
                                        <label for="personalData" className="form-label">NPM</label>
                                        <input type="number" className="form-control" id="NPM" required/>
                                    </div>
                                    <div classNameName="mb-3">
                                        <label for="personalData" className="form-label">First Name</label>
                                        <input type="text" className="form-control" id="firstName" required/>
                                    </div>
                                    <div classNameName="mb-3">
                                        <label for="personalData" className="form-label">Middle Name</label>
                                        <input type="text" className="form-control" id="middleName"/>
                                    </div>
                                    <div classNameName="mb-3">
                                        <label for="personalData" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="lastName" required/>
                                    </div>
                                    <div classNameName="mb-3">
                                        <label for="personalData" className="form-label">Birthdate</label>
                                        <input type="date" className="form-control" id="birthdate" required/>
                                    </div>
                                    <div className="mt-3">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>                       
                    </div>                 
                </div>
            </div>
           
        </div>
    )
}

export default Form;