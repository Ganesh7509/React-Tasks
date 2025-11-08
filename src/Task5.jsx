import React, { useEffect, useState } from "react";

function Task5() {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState({ status: false, msge: "" });
  const [drinksdata, setdrinksdata] = useState([]); // always keep array
  const [searchterm, setsearchterm] = useState("");

  async function Fetching(url) {
    setloading(true);
    try {
      let response = await fetch(url);
      // if(!response.ok){throw new error("error")}
      let data = await response.json();
      const { drinks } = data;

      // ✅ Fix: if drinks is null, make it empty array
      setdrinksdata(Array.isArray(drinks) ? drinks : []);
      setloading(false);
      seterror({ status: false, msge: "" });
    } catch (error) {
      setloading(false);
      seterror({ status: true, msge: error.message });
    }
  }

  // useEffect(() => {
  //   let fetchurl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchterm}`;
  //   Fetching(fetchurl);
  // }, [searchterm]);

  useEffect(()=>{
    let timer=setTimeout(() => { 
      let fetchedurl=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchterm}`
      Fetching(fetchedurl)
    }, 500);
    return(()=>{
      clearInterval(timer)
    })
  },[searchterm])

  function searchhandler(e) {
    setsearchterm(e.target.value);
  }

  if (loading) return <h1>Loading...</h1>;
  if (error.status) return <h1>{error.msge}</h1>;

  return (
    <div className="task6" style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{color:"#0077b6"}}>Fetching Drinks Data using useEffect Hook</h1>
       <h3 style={{ color: "red" }}>
        ⚡ This Task is Loaded Using React Lazy Loading (Suspense)
      </h3>
      <input
        type="text"
        placeholder="Enter any drink name..."
        value={searchterm}
        onChange={searchhandler}
        style={{
          padding: "10px",
          width: "300px",
          margin: "10px 0",
          borderRadius: "5px",
          border: "1px solid gray",
        }}
      />
      <div className="drinks-container" style={{ marginTop: "20px" }}>
        {drinksdata.length === 0 ? (
          <p>Please Search the drinks</p>
        ) : (
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: "20px",
              listStyle: "none",
              padding: "0",
            }}
          >
            {drinksdata.map((value) => {
              const { idDrink, strDrink, strDrinkThumb } = value;
              return (
                <li
                  key={idDrink}
                  className="each-drink"
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "10px",
                    background: "#f9f9f9",
                    transition: "0.3s",
                  }}
                >
                  <img
                    src={strDrinkThumb}
                    alt={strDrink}
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      marginBottom: "10px",
                    }}
                  />
                  <p style={{ fontWeight: "bold" }}>{strDrink}</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Task5;
