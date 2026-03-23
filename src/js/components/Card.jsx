import React from "react";

const Card = ({url, title, description}) => {
    return (
            <div className="card w-100 h-100">
                <img src={url} className="card-img-top" alt={title} />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer text-center">
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    );
};

export default Card;