import React from "react";

const Cart = ({ name, role, location }) => {
  const handleConnect = async () => {
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, role, location }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.text();
      alert(data); // Notify user of success
    } catch (error) {
      alert("Error sending email: " + error.message);
    }
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <b>Role:</b> {role}<br />
          <b>Location:</b> {location}
        </p>
        <button
          onClick={handleConnect}
          className="btn btn-primary"
        >
          Connect
        </button>
      </div>
    </div>
  );
};

export default Cart;
