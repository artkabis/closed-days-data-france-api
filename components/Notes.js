import { v4 as uuid } from "uuid";

function Notes({ datas }) {
  return (
    <div className="resultContainer flex justify-center max-h-xl  h-96  float-left w-lg">
      <ul className="resultDays overflow-y-scroll p-5 max-w-lg  bg-gray-900 text-white">
        {Object.keys(datas).map((key, i) => {
          return <li key={uuid()}>{`Jour : ${datas[key]} - Date : ${key}`}</li>;
        })}
      </ul>
    </div>
  );
}

export default Notes;
