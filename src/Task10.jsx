import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Task10 = () => {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState({ status: false, msge: "" });
  const [userdata, setuserdata] = useState([]);

  async function fetching(url) {
    setloading(true);
    seterror({ status: false, msge: "" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      setuserdata(data);
      setloading(false);
    } catch (error) {
      seterror({ status: true, msge: "Failed to fetch data" });
      setloading(false);
    }
  }

  useEffect(() => {
    fetching('https://jsonplaceholder.typicode.com/users');
  }, []);

  if (loading) {
    return <h1 style={{ textAlign: 'center', color: '#0077b6' }}>Loading....</h1>;
  }

  if (error?.status) {
    return (
      <h1 style={{ textAlign: 'center', color: 'red' }}>
        {error.msge || "Failed to fetch data"}
      </h1>
    );
  }

  return (
    <div
      className='task10'
      style={{
        maxWidth: '800px',
        margin: '30px auto',
        padding: '20px',
        background: '#f8f9fa',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          color: '#0077b6',
          marginBottom: '10px'
        }}
      >
        User Details (API Data)
      </h2>

      {/* 🔹 Added recruiter note heading */}
      <h4
        style={{
          textAlign: 'center',
          color: '#0096c7',
          marginBottom: '25px'
        }}
      >
        🔐 This Page is Accessible Only to Logged-In Users & Implements Dynamic Routing
      </h4>

      <div className='user-details'>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {userdata.map((value) => {
            const { id, name, email } = value;
            return (
              <Link
                key={id}
                to={`/task10/${id}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <li
                  style={{
                    background: 'white',
                    marginBottom: '12px',
                    padding: '15px',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    transition: '0.3s',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = '#e6f4ff')}
                  onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
                >
                  <h3 style={{ marginBottom: '5px', color: '#0077b6' }}>User Name: {name}</h3>
                  <p style={{ margin: 0, color: '#333' }}>User Email: {email}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Task10;
