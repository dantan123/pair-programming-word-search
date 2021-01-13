const wordSearch = (letters, word) => {
    if (word.length === 0) {
        return false;
    }
    for (let colIndex = 0; colIndex < letters[0].length; colIndex++) {
        let vertString = '';
        let horiString = '';
        for (let rowIndex = 0; rowIndex < letters.length; rowIndex++) {
            vertString += letters[rowIndex][colIndex];
            horiString += letters[colIndex][rowIndex];
            if (vertString.includes(word) || horiString.includes(word)) {
                return true;
            }
            const reverseVertString = vertString.split('').reverse().join('');
            const reverseHoriString = horiString.split('').reverse().join('');
            if (reverseVertString.includes(word) || reverseHoriString.includes(word)) {
                return true;
            };
        };
    };
    return false;
};

module.exports = wordSearch