import { useState } from "react";

export default function Form() {
  const [fname, setFname] = useState("");

  const handleFnameChange = (e) => {
    if (fname) {
      alert("already firstName entered");
    }

    setFname(e.target.value);
  };

  return (
    <div className="App">
      <form>
        <div>
          <label>First Name</label>
          <input
            type="text"
            id="fname"
            onChange={(e) => handleFnameChange(e)}
          />
        </div>
      </form>
    </div>
  );
}
