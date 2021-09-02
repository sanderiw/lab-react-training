function Rating(props) {
    function stars(number) {
        const numberOfStars = 5;
        const roundedNumber = Math.round(number);
        const emptyStar = <i class="far fa-star"></i>
        const checkedStar = <i class="fas fa-star"></i>
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
        <div>
            {stars(props.children).map((star) => star)}
        </div>
    );
}

export default Rating;