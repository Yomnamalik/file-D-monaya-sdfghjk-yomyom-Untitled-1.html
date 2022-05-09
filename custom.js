function show() {
    document.getElementById("more").innerHTML = "Wearing makeup does not mean that you are insecure it is just a simple way to make your features ,and there is no better way to do this job other than doing it in a eco friendly way";
}
if (new Date().getHours()<18){ docement.getElementById("greeting").innerHTML="Hello!"}
let day;
switch (new Date().getday()){
    case 0:
        day= "sunday";
        break;
        case 1:
        day= "Monday";
        break;
        case 2:
        day= "Tuesday";
        break;
        case 3:
        day= "Wednesday";
        break;
        case 4:
        day= "Thursday";
        break;
        case 5:
            day= "Friday";
            break;
            case 6:
                day= "Saturday";
                
}
document.getElementById ("days").innerHTML="Today is"+day;