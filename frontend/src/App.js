import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });

  useEffect(() => {
    axios.get("https://your-backend-url.onrender.com/api/contacts/")
      .then(res => setContacts(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://your-backend-url.onrender.com/api/contacts/", form)
      .then(res => setContacts([...contacts, res.data]));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Контактная книга</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Имя" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <button>Добавить</button>
      </form>

      <ul>
        {contacts.map((c) => (
          <li key={c.id}>{c.name} - {c.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
