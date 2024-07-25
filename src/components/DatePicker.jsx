import {
  format,
  addMonths,
  eachDayOfInterval,
  startOfWeek,
  startOfMonth,
  endOfWeek,
  endOfMonth,
  isSameDay,
  isToday,
  isSameMonth,
} from "date-fns";
import "./Datepicker.css";
import { useState } from "react";

const DatePicker = ({ value, onChange }) => {
  const [show, setShow] = useState(false);
  return (
    <div class="date-picker-container">
      <button class="date-picker-button" onClick={() => setShow((o) => !o)}>
        {format(new Date(), "MMM do yyyy")}
      </button>
      {show && <DatePickerModal value={value} onChange={onChange} />}
    </div>
  );
};

export default DatePicker;

function DatePickerModal({ value, onChange }) {
  const [visibleMonth, setVisibleMonth] = useState(value || new Date());
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(startOfMonth(visibleMonth)),
    end: endOfWeek(endOfMonth(visibleMonth)),
  });
  function showPrevMonth() {
    setVisibleMonth((currentMonth) => {
      return addMonths(currentMonth, -1);
    });
  }

  function showNextMonth() {
    setVisibleMonth((currentMonth) => {
      return addMonths(currentMonth, 1);
    });
  }
  return (
    <div class="date-picker">
      <div class="date-picker-header">
        <button class="prev-month-button month-button" onClick={showPrevMonth}>
          &larr;
        </button>
        <div class="current-month">{format(visibleMonth, "MMMM - yyyy")}</div>
        <button class="next-month-button month-button" onClick={showNextMonth}>
          &rarr;
        </button>
      </div>
      <div class="date-picker-grid-header date-picker-grid">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div class="date-picker-grid-dates date-picker-grid">
        {visibleDates.map((date) => (
          <button
            onClick={() => onChange(date)}
            className={`date ${
              !isSameMonth(date, visibleMonth) && "date-picker-other-month-date"
            } ${isSameDay(date, value) && "selected"} ${
              isToday(date) && "today"
            }`}
            key={date.toDateString()}
          >
            {date.getDate()}
          </button>
        ))}
      </div>
    </div>
  );
}
