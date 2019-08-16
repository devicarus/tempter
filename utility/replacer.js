capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = (input, replacement) => {
    var lowReplacement = replacement.toLowerCase()
    var uppReplacement = replacement.toUpperCase()
    var capReplacement = capitalize(replacement)

    var output = input
        .replace(/lowNAME/g, lowReplacement)
        .replace(/uppNAME/g, uppReplacement)
        .replace(/capNAME/g, capReplacement)

    return output
}