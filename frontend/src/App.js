import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });

  const API_URL = "https://contactapp-3zax.onrender.com/api/contacts/";

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setContacts(res.data))
      .catch((err) => console.error("Ошибка при получении контактов:", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    axios
      .post(API_URL, form)
      .then((res) => {
        setContacts([...contacts, res.data]);
        setForm({ name: "", email: "" });
      })
      .catch((err) => console.error("Ошибка при добавлении контакта:", err));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Контактная книга</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          name="name"
          placeholder="Имя"
          value={form.name}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <button type="submit">Добавить</button>
      </form>

      <ul>
        {contacts.map((c) => (
          <li key={c.id}>
            <strong>{c.name}</strong> — {c.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
