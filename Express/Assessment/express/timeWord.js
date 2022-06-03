function timeWord(hours, minutes) {

    if (hours === 00 && minutes === 00) {
        return 'midnight';
    }
    if (hours === 12 && minutes === 00) {
        return 'noon'; 
    }
    if (hours <= 11 && minutes === 00) {
        return hourNums[hours] + " " + "o'clock" + " " + 'am'
    }
    if (hours <= 11 && minutes <= 09) {
            return hourNums[hours] + " " + "oh" + " " +  minuteNums[minutes] + " " +  'am';  
    }
    if (hours <=11 && minutes > 09){
        return hourNums[hours] + " " +  minuteNums[minutes] + " " +  'am';
    } 
    
    if (hours >= 12 && hours <= 23 && minutes === 00) {
        return hourNums[hours - 12] + " " + "o'clock" + " " + 'pm'
    }
    if (hours >=12 && hours <=23 && minutes <= 9) {
            return hourNums[hours - 12] + " " + "oh" + " " +  minuteNums[minutes] + " " +  'pm'
    }
    if (hours >=12 && hours <=23 && minutes > 9){
            return hourNums[hours - 12] + " " +  minuteNums[minutes] + " " +  'pm';
        }
};
    



let hourNums = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']
let minuteNums = ['zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'twenty-one',
    'twenty-two',
    'twenty-three',
    'twenty-four',
    'twenty-five',
    'twenty-six',
    'twenty-seven',
    'twenty-eight',
    'twenty-nine',
    'thirty',
    'thirty-one',
    'thirty-two',
    'thirty-three',
    'thirty-four',
    'thirty-five',
    'thirty-six',
    'thirty-seven',
    'thirty-eight',
    'thirty-nine',
    'forty',
    'forty-one',
    'forty-two',
    'forty-three',
    'forty-four',
    'forty-five',
    'forty-six',
    'forty-seven',
    'forty-eight',
    'forty-nine',
    'fifty',
    'fifty-one',
    'fifty-two',
    'fifty-three',
    'fifty-four',
    'fifty-five',
    'fifty-six',
    'fifty-seven',
    'fifty-eight',
    'fifty-nine'];
// Convert num into a string with different index of number giving off a certain word 


module.exports = { timeWord };