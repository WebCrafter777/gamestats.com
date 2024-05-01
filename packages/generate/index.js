
module.exports = function generateRandomKeyword(length) {
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';

    const allChars = upperCaseChars + lowerCaseChars + numberChars;

    let keyword = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        keyword += allChars.charAt(randomIndex);
    }

    return keyword;
}