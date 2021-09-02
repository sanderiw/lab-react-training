import React from "react"

class LikeButton extends React.Component {
    state = {
        counter: 0,
        currentColor: "black"
    }

    handleClickIncrement  = () => {
        this.setState({counter: this.state.counter + 1})
        this.changeColor();
    }

    changeColor = () => {
        const arr = ['purple','blue','green','yellow','orange','red'];
        let index = this.state.counter %  arr.length;
        this.setState({currentColor: arr[index]}); 
    }


    render() {
        return (
                <button onClick = {this.handleClickIncrement} style={{backgroundColor: `${this.state.currentColor}`, color: "white"}}> {this.state.counter} like </button>
            
        )
    }
}

export default LikeButton;