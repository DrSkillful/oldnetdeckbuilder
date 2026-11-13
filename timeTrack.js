//Required html element for countdown clock
function countdown( elementName, minutes, seconds, game )
{
    var element, endTime, hours, mins, msLeft, time;
    function twoDigits( n )
   
    {return (n <= 9 ? "0" + n : n);}
//A constant of the id function of the countdown element
    element = document.getElementById( elementName );

    document.getElementById("CTCGBO1").remove();
    document.getElementById("CTCGBO3").remove();
    document.getElementById("OPBO1").remove();
    document.getElementById("OPBO3").remove();
    document.getElementById("RBBO3").remove();


    switch(game) {
        case "OP":
            document.body.style.backgroundImage = "url('assets/op.jpg')";
            break;
        case "C":
            document.body.style.backgroundImage = "url('assets/cp2077.webp')";
            break;
        case "RB":
            document.body.style.backgroundImage = "url('assets/rb.jpg')";
            break;
        default:
            return 0;
} 
    
//The countdown time has been calculated.
//Total time of countdown, added at the end of all   
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
    function updateTimer()
    {
        msLeft = endTime - (+new Date);
//What happens when the countdown time ends
//1000 ms = 1s
        if ( msLeft < 1000 ) {
            element.innerHTML = "Time is up!";
        }
//What will happen before the countdown ends
        else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
//Determines how time can be viewed in a webpage
//innerHTML helps to display an element in a webpage
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }
}