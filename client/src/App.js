import { useState, useEffect } from "react";
function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  });
  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3001/transaction", {
      method: "POST",
      body: form,
    });
    console.log(res);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="amount"
          type="number"
          value={form.amount}
          onChange={handleInput}
          placeholder="Enter a number"
        />
        <input
          type="text"
          placeholder="Enter a string"
          name="description"
          onChange={handleInput}
          value={form.description}
        />
        <input
          type="date"
          name="date"
          onChange={handleInput}
          value={form.date}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default App;
