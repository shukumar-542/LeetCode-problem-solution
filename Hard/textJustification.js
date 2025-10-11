/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const result = [];
    let currentLine = [];
    let currentLength = 0;  
    for (const word of words) {
        if (currentLength + word.length + currentLine.length > maxWidth) {
            const totalSpaces = maxWidth - currentLength;   
            const gaps = currentLine.length - 1 || 1;
            const spaceWidth = Math.floor(totalSpaces / gaps);
            let extraSpaces = totalSpaces % gaps;  
            let line = '';
            for (let i = 0; i < currentLine.length; i++) {
                line += currentLine[i];
                if (i < currentLine.length - 1) {
                    line += ' '.repeat(spaceWidth + (extraSpaces > 0 ? 1 : 0));
                    if (extraSpaces > 0) extraSpaces--;
                }
            }
            line = line.padEnd(maxWidth, ' ');
            result.push(line);
            currentLine = [];
            currentLength = 0;
        }
        currentLine.push(word);
        currentLength += word.length;
    }
    let lastLine = currentLine.join(' ');
    lastLine = lastLine.padEnd(maxWidth, ' ');
    result.push(lastLine);
    return result;
};

const words = fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16)

console.log(words)