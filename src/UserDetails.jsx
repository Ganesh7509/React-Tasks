import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const [loading, setloading] = useState(false);
  const [error, iserror] = useState({ status: false, msge: "" });
  const [userdata, setuserdata] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  async function fetching(url) {
    setloading(true);
    iserror({ status: false, msge: "" });
    try {
      let response = await fetch(url);
      let data = await response.json();
      setuserdata(data);
      setloading(false);
      iserror({ status: false, msge: "" });
    } catch (error) {
      setloading(false);
      iserror({ status: true, msge: error.message });
    }
  }

  useEffect(() => {
    fetching(`https://jsonplaceholder.typicode.com/users/${id}`);
  }, [id]);

  if (loading) {
    return (
      <h1
        style={{
          textAlign: "center",
          marginTop: "80px",
          color: "#0d47a1",
          fontFamily: "Arial, sans-serif"
        }}
      >
        Loading...
      </h1>
    );
  }

  if (error?.status) {
    return (
      <h1
        style={{
          textAlign: "center",
          color: "red",
          marginTop: "80px",
          fontFamily: "Arial, sans-serif"
        }}
      >
        {error.msge || "Failed to Fetch Data"}
      </h1>
    );
  }

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
        padding: "40px",
        borderRadius: "20px",
        width: "60%",
        margin: "100px auto",
        boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
        color: "#333",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.8",
        textAlign: "left"
      }}
    >
      <h2 style={{ color: "#0d47a1", marginBottom: "10px" }}>
        👤 User Name: <span style={{ color: "#1a237e" }}>{userdata?.name}</span>
      </h2>
      <p>
        📧 <strong>Email:</strong> {userdata?.email}
      </p>
      <p>
        📞 <strong>Phone:</strong> {userdata?.phone}
      </p>
      <p>
        🌐 <strong>Website:</strong>{" "}
        <a
          href={`https://${userdata?.website}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0d47a1", textDecoration: "none", fontWeight: "bold" }}
        >
          {userdata?.website}
        </a>
      </p>

      {/* Go Back Button */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          onClick={() => navigate('/task10')}
          style={{
            backgroundColor: "#1a73e8",
            color: "white",
            padding: "12px 24px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease"
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0d47a1")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#1a73e8")}
        >
          ⬅ Go Back
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
