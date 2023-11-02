$(document).ready(() => {
    $('#loggedInUser').text(sessionStorage.getItem('loggedInUser'));

    const operation = (op) => {
        const num1 = parseFloat($('#number1').val());
        const num2 = parseFloat($('#number2').val());
        let result;

        switch (op) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num2 !== 0 ? num1 / num2 : 'Infinite';
                break;
            default:
                result = 'Invalid Operation';
        }

        $('#result').val(result);
    };

    $('#add').click(() => operation('add'));
    $('#subtract').click(() => operation('subtract'));
    $('#multiply').click(() => operation('multiply'));
    $('#divide').click(() => operation('divide'));

    // Similar validation as login.js for number1 and number2 input fields
});
