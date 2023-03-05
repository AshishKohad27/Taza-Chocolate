import { ChangeEvent, FormEvent, useState } from "react";
type TFrom = {
  email: string;
  password: string;
};
const initState = {
  email: "",
  password: "",
};
export default function SignUp() {
  const [form, setForm] = useState<TFrom>(initState);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };
  const { email, password } = form;
  return (
    <form onSubmit={handleSubmit}>
      <h1>SignUp Page</h1>
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        placeholder="Password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <br />
      <input type="submit" />
    </form>
  );
}
