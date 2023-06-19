import React from "react";
import { useState } from "react";
import { students } from "../utils/studentsDetails";

const LessonCheckin = () => {
  const units = {
    "Software Engineering": { unitCode: 101, unitInitials: "SE" },
    "Management Information System": { unitCode: 102, unitInitials: "MIS" },
    "Database Systems": { unitCode: 103, unitInitials: "DBS" },
    "Communication Skills": { unitCode: 104, unitInitials: "CS" },
    "Embedded Systems": { unitCode: 105, unitInitials: " ES" },
  };

  //   Input details state management
  const [userName, setUserName] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [payload, setPayload] = useState({});

  const changeUnitFunc = (event) => {
    const _unit = event.target.value;
    // console.log(_unit)
    setPayload({
      unitCode: units[_unit].unitCode,
      unitInitials: units[_unit].unitInitials,
    });
  };

  const checkinDetails = {
    userName: userName,
    regNumber: regNumber,
    payload: payload,
  };

  const checkinHandler = (e) => {
    e.preventDefault();
    console.log(checkinDetails);
    return alert("Details submitted sucessfully!!");
  };
  return (
    <form className="checkin-form" onSubmit={checkinHandler}>
      <label htmlFor="userName">Username :</label>
      <input
        type="text"
        id="userName"
        placeholder="Username.."
        required
        onChange={(e) => setUserName(e.target.value)}
      ></input>

      <label htmlFor="regNumber">Registration Number :</label>
      <input
        type="text"
        id="regNumber"
        placeholder="Registration number.."
        required
        onChange={(e) => setRegNumber(e.target.value)}
      ></input>

      <label htmlFor="unit">Unit/Subject :</label>
      <select id="units" onChange={changeUnitFunc} defaultValue="">
        <option value="" hidden disabled>
          --select unit--
        </option>
        {Object.keys(units).map((_unit) => (
          <option key={_unit} value={_unit}>
            {_unit}
          </option>
        ))}
      </select>

      <input type="submit" value="Check In" id="submit"></input>
    </form>
  );
};

export default LessonCheckin;
