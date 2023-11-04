/*
 Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/
const today = new(Date)
const day = today.getDay()

dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// console.log(`Today is: ${dayList[day]}.`)

//Current time

// let timeInHours = today.getHours()
// let timeInMinutes = today.getMinutes()
// let timeInSeconds = today.getSeconds()

// //trenary operator ? : 

// let  prepand = (timeInHours>=12)?"PM":"AM"
// timeInHours = (timeInHours>=12)?timeInHours-12:timeInHours
// console.log(timeInHours);

var myDate = new Date(); 
        var myDay = myDate.getDay(); 
        
        // Array of days. 
        var weekday = ['Sunday', 'Monday', 'Tuesday', 
            'Wednesday', 'Thursday', 'Friday', 'Saturday' 
        ]; 
        console.log("Today is : " + weekday[myDay]); 
         
        
        // get hour value. 
        var hours = myDate.getHours(); 
        var ampm = hours >= 12 ? 'PM' : 'AM'; 
        hours = hours % 12; 
        hours = hours ? hours : 12; 
        var minutes = myDate.getMinutes(); 
        minutes = minutes < 10 ? '0' + minutes : minutes; 
        var myTime = hours + " " + ampm + " : " + minutes +  
            " : " + myDate.getMilliseconds(); 
        console.log(`Current time is:${myTime}`)


