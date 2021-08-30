import React, { useState, useEffect } from "react";
import Notes from "./Notes";
import DatesPicker from "./DatesPicker";
import axios from "axios";

const DateComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [titleA, setTitleA] = useState([]);
  const [dateA, setDateA] = useState([]);
  const [notes, setNotes] = useState([]);
  const [count, setCount] = useState(0);

  /*
    .then((response) => response.json())
    .then((data) => {
      setIsLoading(false);
      //console.log("datas brut : ", data);
      setTitleA(Object.keys(data).map((e) => data[e]));
      setDateA({ date: Object.keys(data).map((e) => new Date(e)) });
      console.log("date formated in composent >> ", dateA);
      setNotes(data);
    })
    .catch((error) => {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    });
*/

  useEffect(() => {
    const fetchData = () => {
      const url =
        "https://etalab.github.io/jours-feries-france-data/json/metropole.json";
      let datas = [];
      axios
        .get(url)
        .then(function (response) {
          // handle success
          datas = response.data;
          setIsLoading(false);
          setNotes(datas);
          setTitleA(Object.keys(datas).map((e) => datas[e]));
          setDateA({ date: Object.keys(datas).map((e) => new Date(e)) });
          setCount(1);
          console.log("datas brut : ", datas);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="py-20 min-h-lg h-lg flex justify-center items-center">
        {notes && <Notes data={notes} />}
        {dateA && <DatesPicker datas={notes} titles={titleA} dates={dateA} />}
        {isError && <div>Error fetching data.</div>}
      </div>
    );
  }
};
export default DateComponent;
