import Calendar_Views = require("Calendar/Views");

$(() => {
    Calendar_Views.CalendarView.enhance(Calendar_Views.CalendarView, $(".calendar-view"));
    Calendar_Views.SummaryView.enhance(Calendar_Views.SummaryView, $(".summary-view"));
});
