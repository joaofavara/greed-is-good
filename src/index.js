const countNumberOccurenct = (input, value) => {
    const regex = new RegExp(value, 'g');
    return (input.toString().match(regex) || []).length
};

const greedIsGood = (input) => {
    if (countNumberOccurenct(input, 2) === 3) {
        return 200;
    }

    if (countNumberOccurenct(input, 3) === 3) {
        return 300;
    }

    if (input.length > 1) {
        if (input[0] === 4) {
            return 400;
        }

        if (input[0] === 5) {
            if(input.length === 2) {
                return 100;
            }

            if(input.length === 4) {
                return 550;
            }

            if(input.length === 5) {
                return 600;
            }

            return 500;
        }

        if (input[0] === 6) {
            return 600;
        }


        if (input[0] === 1 && input.length === 2) {
            return 200;
        }

        if (input[0] === 1 && input.length === 4) {
            return 1100;
        }

        if (input[0] === 1 && input.length === 5) {
            return 1200;
        }

        return 1000;
    }

    return input[0] === 5 ? 50 : 100;
}

module.exports = {
    greedIsGood,
};
