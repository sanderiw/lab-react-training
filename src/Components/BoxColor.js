function BoxColor(props) {
    function rgbToHex(r, g, b) {
        return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')
      }  
    return (
        <div>
        <div className= "card mb-3" style={{maxWidth: "540px", backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
            <div className="row g-0">
                <div className="col-md-12">
                    <div className="card-body">
                        <p className="card-text fw-bold">rgb({props.r}, {props.g}, {props.b})</p>
                        <p className="card-text fw-bold">{rgbToHex(props.r, props.g, props.b)}</p>
                    </div>
                </div>
            </div>
        </div>
</div> 
    );
}

export default BoxColor;