import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import {  useEffect, useState } from "react";
import axios from "axios";


const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        // console.log(JSON.parse(localStorage.getItem("user")))
        const res = await axios.get(
          `${process.env.REACT_APP_API}/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
               token: "Bearer "+ JSON.parse(localStorage.getItem("netflixauth")).token,

            },
          }
        );
       
        setLists(res.data.lists);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <div>chirag</div>
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List key={list._id} list={list} />
      ))}
    </div>
  );
};

export default Home;
