import Rating from "./Rating";

function DriverCard (props) {
    
    return (
        <div className="card border-light rounded mb-3 d-flex" style={{maxWidth: "80vw", backgroundColor: "#455EB5"}}>
            <div className="card-body text-dark d-flex justify-content-center align-items-center text-start">
                <img className="rounded-circle me-4" style={{width: "120px", height: "120px"}} src={props.img} alt="person" />
                <div className="text-left">
                    <h5 className="card-title text-white text-left">{props.name}</h5>
                    <p className="card-tex mb-2 text-white">{<Rating>{props.rating}</Rating>}</p>
                    <span className="text-white">{props.car.model} -</span>
                    <span className="ms-2 mt-0 text-white">{props.car.licensePlate}</span>
                </div>
                
            </div>
        </div>
    );
}

export default DriverCard;