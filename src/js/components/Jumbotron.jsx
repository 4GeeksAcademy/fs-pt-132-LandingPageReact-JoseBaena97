import React from "react";

const Jumbo = () => {

    return (
        <div className="container pt-3 col-12">

            <div className="p-5 mb-4 bg-body-tertiary rounded-3">   
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                    <p>
                        Using a series of utilities, you can create this jumbotron,
                        just like the one in previous versions of Bootstrap.
                        Check out the examples below for how you can remix and restyle it to your liking.
                    </p>
                    <button className="btn btn-primary btn-lg" type="button">Example button</button>
                </div>
            </div>
        </div>
    )
}

export default Jumbo;