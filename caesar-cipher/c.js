var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));
// var string = "abcdefghijklmnopqrstuvwxyz"
function caesar(string, shift) {
    let result = []
    let word = ''
    let special = "~`!#$%^&*+=-[]\\\';,/{}|\":<>? .1234567890"

    for (let i = 0; i < string.length; i++) {
        let myCode = string.charCodeAt(i) +shift
        if (special.indexOf(string.charAt(i)) != -1) {
            word += string[i]
        }
        else {
            while (myCode > 122) {
                myCode = (myCode - 122) + 96
            }
            word += (String.fromCharCode(myCode))
        }
   
    }
    return word

}
console.log(caesar(input, shift))