function Greetings(props) {
    function renderGreeting (language, name) {
        if (language === "de") {
            return `Hallo, ${name}`; 
        } else if (language === "fr") {
            return `Bonjour, ${name}`;
        } else if (language === "en") {
            return `Hello, ${name}`;
        } else if (language === "es") {
            return `Hola, ${name}`;
        }
    }
    
    return (
        <div>
            <div className= "card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-12">
                        <div className="card-body">
                            <p className="card-text fw-bold">{renderGreeting(props.lang, props.children)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )

}

export default Greetings;