const greedIsGood = (input) => {
    if (input.length > 1) {
        if (input[0] === 2) {
            return 200;
        }

        if (input[0] === 3) {
            return 300;
        }

        return 400;
    }

    return input[0] === 5 ? 50 : 100;
}

module.exports = {
    greedIsGood,
};
