import React from "react"

class NumbersTable extends React.Component {
    
    state = {
        number: 0,
    }

    
    render () {
        function createArray(number) {
            const arr = [];
        
            for (let i = 0; i < number; i++) {
                arr.push(i + 1)
            }
            return arr;
        }
        const numbersArray = createArray(this.props.limit)

        return (
            <div className="row tile-row">
                {numbersArray.map((number) => {
                    return <div key={number} style={{backgroundColor: (number % 2 === 0 ? "red" : "white"), height: "150px"}} className="col-2 border border-dark tile">{number}</div>
                })}
            </div>
        );
        
    }
}

export default NumbersTable;