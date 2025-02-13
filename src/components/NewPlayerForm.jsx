import React, { useState } from "react";

function NewPlayerForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.get("name"),
            breed: formData.get("breed"),
            imageUrl: formData.get("imageUrl"),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error Adding Player");
      }

      const result = await response.json();
      console.log(result);
      e.target.reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>

        <label>
          Breed:
          <input type="text" name="breed" required />
        </label>

        <label>
          Image URL:
          <input type="text" name="imageUrl" required />
        </label>
        <br />
        <br />
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}

export default NewPlayerForm;
