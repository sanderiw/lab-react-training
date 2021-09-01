import Rating from "./Rating";


function DriverCard (props) {
    function stars(number) {
        const numberOfStars = 5;
        const roundedNumber = Math.round(number);
        const emptyStar = <i className="far fa-star"></i>
        const checkedStar = <i className="fas fa-star"></i>
        const starsArray = [];
        for (let i = 0; i < roundedNumber; i++) {
            starsArray.push(checkedStar);
        }
        for (let i = 0; i < numberOfStars - roundedNumber; i++) {
            starsArray.push(emptyStar);
        }

        return starsArray;
    }
    
    return (
        <div className="card border-light rounded mb-3 d-flex" style={{maxWidth: "80vw", backgroundColor: "#455EB5"}}>
            <div className="card-body text-dark d-flex justify-content-center align-items-center text-start">
                <img className="rounded-circle me-4" style={{width: "120px", height: "120px"}} src={props.img} alt="person" />
                <div className="text-left">
                    <h5 className="card-title text-white text-left">{props.name}</h5>
                    <p className="card-tex mb-2 text-white">{stars(props.rating).map((star) => star)}</p>
                    <span className="text-white">{props.car.model} -</span>
                    <span className="ms-2 mt-0 text-white">{props.car.licensePlate}</span>
                </div>
                
            </div>
        </div>
    );
}

export default DriverCard;