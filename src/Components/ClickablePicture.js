import React from "react";

class ClickablePicture extends React.Component {

    state = {
        isClicked: false
        
    }
    
    clickPicture = () => {
        if (this.state.isClicked) {
            this.setState({isClicked: false})
        } else {
            this.setState({isClicked: true})
        }   
    }

    render () {
        return (
            <div>
                <img onClick={this.clickPicture} src={this.state.isClicked ? this.props.imgClicked : this.props.img} alt="pessoa" />
            </div>
        )
    }
}

export default ClickablePicture;