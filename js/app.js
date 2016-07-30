$.getJSON("data.json", function(data) {

var tasks = data;

var taskNames = [ "1", "2" ];

tasks.sort(function(a, b) {
    return a.endDate - b.endDate;
});
var maxDate = tasks[tasks.length - 1].endDate;
tasks.sort(function(a, b) {
    return a.startDate - b.startDate;
});
var minDate = tasks[0].startDate;

var format = "%H:%M";

var gantt = d3.gantt().selector("#gantt-chart").taskTypes(taskNames).tickFormat(format);
gantt(tasks);

})
