import React, { useState } from "react";
import Cart from "../pages/Cart";

const professionals = [
  { name: "Alice Johnson", role: "Software Engineer", location: "San Francisco, CA" },
  { name: "Mike Davis", role: "Software Engineer", location: "Boston, MA" },
  { name: "Bob Smith", role: "Data Scientist", location: "New York, NY" },
  { name: "Sarah Lee", role: "Data Scientist", location: "Chicago, IL" },
  { name: "Charlie Brown", role: "Product Manager", location: "Austin, TX" },
  { name: "Emma Wilson", role: "Product Manager", location: "Seattle, WA" },
  { name: "Diana Prince", role: "UX Designer", location: "Los Angeles, CA" },
  { name: "Liam Thompson", role: "UX Designer", location: "San Diego, CA" },
  { name: "Edward Green", role: "DevOps Engineer", location: "Seattle, WA" },
  { name: "Sophia Martinez", role: "DevOps Engineer", location: "Denver, CO" },
];

const roles = Array.from(new Set(professionals.map((prof) => prof.role)));

const Network = () => {
  const [input, setInput] = useState("");
  const [filteredProfessionals, setFilteredProfessionals] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setHighlightedIndex(-1); // Reset highlighted index

    if (value.length > 0) {
      const filteredRoles = roles.filter((role) =>
        role.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredRoles);
    } else {
      setSuggestions([]);
      setFilteredProfessionals([]);
    }
  };

  const handleRoleSelect = (role) => {
    setInput(role);
    setSuggestions([]);
    const filtered = professionals.filter(
      (prof) => prof.role.toLowerCase() === role.toLowerCase()
    );
    setFilteredProfessionals(filtered);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      // Navigate down the suggestions
      setHighlightedIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      // Navigate up the suggestions
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (e.key === "Enter") {
      // Select the highlighted suggestion
      if (highlightedIndex >= 0) {
        handleRoleSelect(suggestions[highlightedIndex]);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Professional Finder</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Enter role"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="form-control"
        />
      </div>
      
      {/* Button placed below the input field */}
      <div className="mb-3">
        <button
          onClick={() => setFilteredProfessionals([])}
          className="btn btn-primary"
        >
          Clear
        </button>
      </div>

      {suggestions.length > 0 && (
        <ul className="list-group mb-3">
          {suggestions.map((role, index) => (
            <li
              key={index}
              className={`list-group-item cursor-pointer ${highlightedIndex === index ? "active" : ""}`}
              onClick={() => handleRoleSelect(role)}
            >
              {role}
            </li>
          ))}
        </ul>
      )}

      {filteredProfessionals.length > 0 && (
        <div className="row mt-4">
          {filteredProfessionals.map((prof, index) => (
            <div className="col-md-4" key={index}>
              <Cart
                name={prof.name}
                role={prof.role}
                location={prof.location}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Network;
