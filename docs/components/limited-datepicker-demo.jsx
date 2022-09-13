import React, { useState } from 'react';
import DatePicker from 'sassy-datepicker';
import DemoContainer from './demo-container';
import styles from './limited-datepicker-demo.module.css';

const min = new Date(2000, 0, 1); // 1st January 2000
const max = new Date(2099, 11, 31); // 31st December 2099
const init = new Date(2001, 8, 30); // 30th September 2001

const LimitedDatePickerDemo = () => {
  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);
  const [date, setDate] = useState(init);

  return (
    <DemoContainer>
      <div className={styles['limited-dp--date-input']}>
        <label htmlFor="min-date">
          <pre>Min Date</pre>
        </label>
        <input
          id="min-date"
          type="date"
          value={`${minDate.getFullYear()}-${(minDate.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${minDate
            .getDate()
            .toString()
            .padStart(2, '0')}`}
          onChange={(e) => setMinDate(e.target.valueAsDate)}
        />
      </div>
      <div className={styles['limited-dp--date-input']}>
        <label htmlFor="max-date">
          <pre>Max Date</pre>
        </label>
        <input
          id="max-date"
          type="date"
          value={`${maxDate.getFullYear()}-${(maxDate.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${maxDate
            .getDate()
            .toString()
            .padStart(2, '0')}`}
          onChange={(e) => setMaxDate(e.target.valueAsDate)}
        />
      </div>
      <DatePicker
        className={styles['limited-dp--picker']}
        value={date}
        onChange={setDate}
        minDate={minDate}
        maxDate={maxDate}
      />
    </DemoContainer>
  );
};

export default LimitedDatePickerDemo;
