import React, { useState } from 'react';
import { format, parse, isValid } from 'date-fns';

const CostumDateInput = ({ label, name, value, onChange, placeholder }) => {
  const [date, setDate] = useState(value ? format(new Date(value), 'yyyy-MM-dd') : '');

  const handleChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);

    const parsedDate = parse(newDate, 'yyyy-MM-dd', new Date());
    if (isValid(parsedDate)) {
      onChange(name, parsedDate);
    } else {
      onChange(name, null); // Handle invalid date case
    }
  };

  return (
    <div className="flex flex-col">
      <input
        type="date"
        name={name}
        value={date}
        onChange={handleChange}
        placeholder={placeholder}
        className="p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default CostumDateInput;
