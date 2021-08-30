import React, { useState, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../styles/Home.module.css";
import Image from "next/image";

registerLocale("fr", fr);
const dateFormat = "Pp";

const DatesPicker = ({ datas, titles, dates }) => {
  const [startDate, setStartDate] = useState(new Date());
  var finalDate = [];
  for (var i in datas) {
    finalDate.push(new Date(i));
  }
  const Input = ({ onChange, placeholder, value, isSecure, id, onClick }) => (
    <input
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      isSecure={isSecure}
      id={id}
      onClick={onClick}
    />
  );
  const NoClickInput = ({ onClick, ...props }) => <Input {...props} />;

  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Apvil",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ];

  function generateArrayOfYears() {
    var max = new Date().getFullYear();
    var min = max - 9;
    var years = [];

    for (var i = max; i >= min; i--) {
      years.push(i);
    }
    return years;
  }
  const years = generateArrayOfYears();
  return (
    <div className="white-box p-y-20">
      <div className="flex justify-center items-center">
        <DatePicker
          dateFormat={dateFormat}
          locale={fr}
          customInput={<Input />}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className={styles.flex}>
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
                className="btn-left container w-5 transform rotate-180"
              >
                <Image
                  alt=""
                  src="/chevron-right.svg"
                  height="50px"
                  width="50px"
                  sizes="(max-width:960px) 30px"
                  objectFit=""
                  className=""
                />
              </button>
              <select
                value={months[date.getMonth()]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
                className="mr-2"
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                value={date.getFullYear()}
                onChange={({ target: { value } }) => changeYear(value)}
              >
                {years.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
                className="btn-right container w-5"
              >
                <Image
                  alt=""
                  src="/chevron-right.svg"
                  height="50px"
                  width="50px"
                  sizes="(max-width:960px) 30px"
                  objectFit=""
                  className=""
                />
              </button>
            </div>
          )}
          selected={startDate}
          fixedHeight
          highlightDates={finalDate}
          placeholderText={titles}
          inline
        />
      </div>
    </div>
  );
};

export default DatesPicker;
