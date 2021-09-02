import React from "react"

class Dice extends React.Component {

    state =  {
        imgNumber: 0
    }

    lotteryDice = () => {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let randomNumber = getRandomInt(1, 6)
        
        this.setState({imgNumber: 0})
        
        setTimeout(() => {
            this.setState({imgNumber: randomNumber})
        }, 1000)

    }

    renderDice = () => {
        const images =  {
            0: "../img/dice-empty.png",
            1: "../img/dice1.png",
            2: "../img/dice2.png",
            3: "../img/dice3.png",
            4: "../img/dice4.png",
            5: "../img/dice5.png",
            6: "../img/dice6.png",
        }

        return images[this.state.imgNumber]
        
    }



    render() {
        return (
            <div>
                <img onClick={this.lotteryDice} src= {this.renderDice()} alt="dados"/>
            </div>
        )
    }

}

export default Dice;