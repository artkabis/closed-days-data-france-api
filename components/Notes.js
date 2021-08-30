function Notes({ data }) {
  return (
    <div className="resultContainer flex justify-center max-h-xl  h-96  float-left w-lg">
      <ul className="resultDays overflow-y-scroll p-5 max-w-lg  bg-gray-900 text-white">
        {Object.keys(data).map((key, i) => {
          return <li key={i}>{`Jour : ${data[key]} - Date : ${key}`}</li>;
        })}
      </ul>
    </div>
  );
}

export default Notes;
