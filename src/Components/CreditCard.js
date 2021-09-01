import visa from "../img/visa.png";
import masterCard from "../img/master-card.svg"
import "./CreditCard.css";


function CreditCard(props) {
    function typeOfCard(type) {
        if (type === "Visa") {
            return <img src={visa} alt="visa"/>;
        } else if (type === "Master Card") {
            return <img src={masterCard} alt="mastercard"/>;
        }
    } 
    

    return (
        <div className="card text-white general" style={{maxWidth: "18rem", backgroundColor: `${props.bgColor}`}}>
                <p className="card-title type-card">{typeOfCard(props.type)}</p>
                <p className="card-text" style={{color: `${props.color}`}}>**** **** **** {props.number.slice(-4)}</p>
                <div className="dateBank">
                    <p className="card-text" style={{color: `${props.color}`}}>Expires {props.expirationMonth.toString().padStart(2, "0")} / {props.expirationYear}</p>
                    <p className="card-text" style={{color: `${props.color}`}}>{props.bank}</p>
                </div>
                <p className="card-text m-0" style={{color: `${props.color}`}}>{props.owner}</p>
        </div>

    );
}

export default CreditCard