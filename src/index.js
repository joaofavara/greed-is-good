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

    if (countNumberOccurenct(input, 4) === 3) {
        return 400;
    }

    if (countNumberOccurenct(input, 6) === 3) {
        return 600;
    }

    if (countNumberOccurenct(input, 1) === 1) {
        return 100;
    }

    if (countNumberOccurenct(input, 1) === 2) {
        return 200;
    }

    if (countNumberOccurenct(input, 1) === 3) {
        return 1000;
    }

    if (countNumberOccurenct(input, 1) === 4) {
        return 1100;
    }

    if (countNumberOccurenct(input, 1) === 5) {
        return 1200;
    }

    if (countNumberOccurenct(input, 5) === 1) {
        return 50;
    }

    if (countNumberOccurenct(input, 5) === 2) {
        return 100;
    }

    if (countNumberOccurenct(input, 5) === 3) {
        return 500;
    }

    if (countNumberOccurenct(input, 5) === 4) {
        return 550;
    }

    return 600;
}

module.exports = {
    greedIsGood,
};
