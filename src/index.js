const countNumberOccurenct = (input) => {
    const numberOccurency = {
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
    }

    input.forEach((value) => {
        numberOccurency[value] += 1;
    })
    return numberOccurency;
};

const greedIsGood = (input) => {
    const counting = countNumberOccurenct(input);

    if (counting['2'] >= 3) {
        return 200;
    }

    if (counting['3'] >= 3) {
        return 300;
    }

    if (counting['4'] >= 3) {
        return 400;
    }

    if (counting['6'] >= 3) {
        return 600;
    }

    if (counting['1'] === 1) {
        return 100;
    }

    if (counting['1'] === 2) {
        return 200;
    }

    if (counting['1'] === 3) {
        return 1000;
    }

    if (counting['1'] === 4) {
        return 1100;
    }

    if (counting['1'] === 5) {
        return 1200;
    }

    if (counting['5'] === 1) {
        return 50;
    }

    if (counting['5'] === 2) {
        return 100;
    }

    if (counting['5'] === 3) {
        return 500;
    }

    if (counting['5'] === 4) {
        return 550;
    }

    return 600;
}

module.exports = {
    greedIsGood,
};
