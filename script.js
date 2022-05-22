$("#currentDay").text(moment().format("dddd, MMM Do"));

var shownTime = document.querySelector("data-hour")


function updater() {
    let currentTime = moment().hours();
$(".time-block").each(function() {
    let blockHour = parseInt($(this).attr("id").split("-")[1])
if (blockHour < currentTime ) {
    $(this).addClass("past");
} else if (currentTime == blockHour) {
    $(this).removeClass("past");
    $(this).addClass("present");
} else { 
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
}})}

$(".saveBtn").on("click", function() {
    let value= $(this).siblings(".description").val()
    let time= $(this).parent().attr("id")
    localStorage.setItem(time,value)
})

updater();

var interval = setInterval(updater,15000);

function init() {
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
};

init();