function IdCard(props) {
    return (
        <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img src={props.picture} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text fw-bold">First name: <span className="fw-normal">{props.firstName}</span></p>
                        <p className="card-text fw-bold">Last Name: <span className="fw-normal">{props.lastName}</span></p>
                        <p className="card-text fw-bold">Gender: <span className="fw-normal">{props.gender}</span></p>
                        <p className="card-text fw-bold">Height: <span className="fw-normal">{props.height}</span></p>
                        <p className="card-text fw-bold">Birth: <span className="fw-normal">{props.birth.toLocaleDateString("en-us")}</span></p>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default IdCard;