import React from "react";

class Carousel extends React.Component {
    state = {
        key: 0
    }

    keyDecrement = () => {
        if (this.state.key > 0) {
            this.setState({key: this.state.key - 1})
        } 
    }

    keyIncrement = () => {
        if (this.state.key < this.props.imgs.length - 1) {
            this.setState({key: this.state.key + 1})
        } 
    }
    

    render() {
        return (
            <div>
                <button onClick={this.keyDecrement} >Volta</button>
                <img src={this.props.imgs[this.state.key]} alt="person" />
                <button onClick={this.keyIncrement} >Avança</button>
            </div>
        );
    }
}

export default Carousel;