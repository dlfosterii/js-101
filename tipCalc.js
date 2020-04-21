// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

// good -> 20%

// fair -> 15%

// bad -> 10%

function tipAmount(bill, service){
    if (service == 'good'){
        tip = bill * .2;
        console.log('Your tip is $' + tip);

    }
    else if (service == 'fair') {
        tip = bill * .15;
        console.log('Your tip is $' + tip);
    }
    else if (service == 'bad') {
        tip = bill * .1;
        console.log('Your tip is $' + tip);
    }
}

tipAmount(100, 'good');
// 20

tipAmount(40, 'fair');
// 6

tipAmount(80, 'bad')
// 8