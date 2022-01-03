var wakeuptime=3;
var noon=12;
var lunchtime=1;
var sleeptime=lunchtime+2;
var party;
var evening=18;

var showCurrentTime=function()
{
    var clock=document.getElementById("Clock");
    var currentTime=new Date();
    var hours=currentTime.getHours();
    var minutes=currentTime.getMinutes();
    var seconds=currentTime.getSeconds();
    var meridian="AM";
    if(hours>=noon)
    {
        meridian="PM";
    }
    if(hours>noon)
    {
        hours=hours-12;
    }
    if(minutes<10)
    {
        minutes="0"+minutes;
    }
    if(seconds<10)
    {
        seconds="0"+seconds;
    }
    var clockTime=hours+':'+minutes+':'+seconds+''+meridian+'!';
    clock.innerText=clockTime;
};
var updateClock=function()
{
    var time=new Date().getHours();
    var messageText;
    var timeEventJS=document.getElementById("timeEvent");
    if(time == party)
    {
        messageText="Lets party";
    }
    else if(time==wakeuptime)
    {
        messageText="Get up, its morning";
    }
    else if(time == sleepTime)
    {
        messageText="Goooodddnigghhhhttttttt";
    }
    else if(time<noon)
    {
        messageText="morning";
    }
    else if(time <= evening)
    {
        messageText="Evening"
    }
    else
    {
        messageText="Good afternoon";
    }
    console.log(messageText);
    timeEventJS.innerText=messageText;
    showCurrentTime();
};
updateClock();

var oneSecond=1000;
setInterval(updateCloud, oneSecond);

var wakeUpEvent=function()
{
    wakeuptime=wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener("change",wakeUpEvent);

var lunchTimeSelector=document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);
