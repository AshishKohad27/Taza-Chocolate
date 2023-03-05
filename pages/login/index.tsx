import { ChangeEvent, FormEvent, useState } from "react";

type TFrom = {
  email: string;
  password: string;
};

const initState = {
  email: "",
  password: "",
};
export default function Login() {
  const [form, setForm] = useState<TFrom>(initState);

  const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };

  const { email, password } = form;
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login Pages</h1>
      <input
        type="text"
        placeholder="email"
        name="email"
        value={email}
        onChange={handelChange}
      />
      <br />
      <input
        type="text"
        placeholder="password"
        name="password"
        value={password}
        onChange={handelChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
