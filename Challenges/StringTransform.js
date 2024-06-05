function transformString(str) {
    const length = str.length;
    if (length % 15 === 0) {
        return str.split('').reverse().join('').split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 5 === 0) {
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        return str.split('').reverse().join('');
    } else {
        return str;
    }
}

console.log(transformString("Hamburger")); 
console.log(transformString("Pizza")); 
console.log(transformString("Chocolate Chip Cookie")); 
