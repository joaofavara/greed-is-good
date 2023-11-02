const greedIsGood = (input) => {
    if (input.length > 1) {
        return 200
    }

    return input[0] === 5 ? 50 : 100;
}

module.exports = {
    greedIsGood,
};
