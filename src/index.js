const countNumberOccurenct = (input) => {
    const numberOccurency = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
    };

    input.forEach((value) => {
        numberOccurency[value] += 1;
    });

    return numberOccurency;
};

const greedIsGood = (input) => {
    const counting = countNumberOccurenct(input);
    let score = 0;

    if (counting['2'] >= 3) {
        score += 200;
    }

    if (counting['3'] >= 3) {
        score += 300;
    }

    if (counting['4'] >= 3) {
        score += 400;
    }

    if (counting['6'] >= 3) {
        score += 600;
    }

    if (counting['1'] === 1) {
        score += 100;
    }

    if (counting['1'] === 2) {
        score += 200;
    }

    if (counting['1'] === 3) {
        score += 1000;
    }

    if (counting['1'] === 4) {
        score += 1100;
    }

    if (counting['1'] === 5) {
        score += 1200;
    }

    if (counting['5'] === 1) {
        score += 50;
    }

    if (counting['5'] === 2) {
        score += 100;
    }

    if (counting['5'] === 3) {
        score += 500;
    }

    if (counting['5'] === 4) {
        score += 550;
    }

    if (counting['5'] === 5) {
        score += 600;
    }

    return score;
};

module.exports = {
    greedIsGood,
};
