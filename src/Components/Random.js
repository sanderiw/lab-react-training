function Random(props) {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

 return (
    <div>
        <div className= "card mb-3" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-12">
                    <div className="card-body">
                        <p className="card-text fw-bold">Random value between {props.min} and {props.max} => {getRandomInt(props.min, props.max)} </p>
                    </div>
                </div>
            </div>
        </div>
</div> 
 )   
}
export default Random;