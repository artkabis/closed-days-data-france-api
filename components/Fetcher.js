import React, { useState, useEffect } from "react";
import axios from "axios";
function Fetcher({ datas }) {
  const [titleA, setTitleA] = useState([]);
  const [dateA, setDateA] = useState([]);
  const [notes, setNotes] = useState([]);

  console.log("datas >>>>> ", datas);
  const url =
    "https://etalab.github.io/jours-feries-france-data/json/metropole.json";
  axios
    .get(url)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  //   setTitleA(Object.keys(datas).map((e) => datas[e]));
  //   setDateA({ date: Object.keys(datas).map((e) => new Date(e)) });
  //   setNotes(datas);

  //   console.log(
  //     "titres >>>>> ",
  //     titleA,
  //     "       dates >>>< ",
  //     dateA,
  //     "    données globales >>>> ",
  //     notes
  //   );
  return (
    <ul>
      {titleA.map((title) => (
        <li key={title}>{title}</li>
      ))}
    </ul>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(url);
  const datas = await res.json();
  console.log("data statics >>> ", datas);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      datas,
    },
  };
}

export default Fetcher;
