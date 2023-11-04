//switch 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


/*
This is how it works:
The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.
*/
const  month = 3

switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;


    default:
        console.log("Default case match")
        break;
}

/*
Importance of break statement:
The break Keyword
When JavaScript reaches a break keyword, it breaks out of the switch block.
This will stop the execution inside the switch block.
It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.
Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case.
*/