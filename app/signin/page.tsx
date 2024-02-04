"use client";
import { authorizationRegT, passwordStatusT } from "@/constant/client/auth";
import { useEffect, useState, useRef } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { SignInAuth } from "@/redux/auth/auth-action";
import { clearState } from "@/redux/auth/auth-slice";
import { redirect } from "next/navigation";

// const initialState: authorizationRegT = {
//   first_name: "",
//   last_name: "",
//   email: "",
//   password: "",
//   // conform_password: "",
// };
const initialState: authorizationRegT = {
  first_name: "Ashish",
  last_name: "Kohad",
  email: "ashishkohad@gmail.com",
  password: "Ashish@123",
  // conform_password: "",
};

function verifyPasswordRequirements(value: string) {
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSymbol = /[!@#$%^&*()]/.test(value); // Add other symbols if needed
  const hasLength = value.length >= 8;

  return {
    hasRequiredStrength:
      hasUpperCase && hasNumber && hasSymbol && hasNumber && hasSymbol,
    passwordRequirements: {
      upperCase: hasUpperCase,
      lowerCase: hasLowerCase,
      number: hasNumber,
      symbol: hasSymbol,
      length: hasLength,
    },
  };
}

export default function Login() {
  const [formData, setFormData] = useState<authorizationRegT>(initialState);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [meetsStrengthCriteria, setMeetsStrengthCriteria] =
    useState<boolean>(false);
  const [passwordStatus, setPasswordStatus] = useState<passwordStatusT>({
    upperCase: false,
    lowerCase: false,
    number: false,
    symbol: false,
    length: false,
  });

  const dispatch = useAppDispatch();
  const { successMessage, loading, error } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {}, [showPassword, passwordStatus, meetsStrengthCriteria]);

  useEffect(() => {
    dispatch(clearState());
    if (
      successMessage === "User Already Exist!" ||
      successMessage === "User Created Successfully!"
    ) {
      alert(successMessage);
      redirect("/login");
    }

    console.log("successMessage:", successMessage);
  }, [successMessage, loading]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "password") {
      const isPasswordStrong = verifyPasswordRequirements(value);
      setPasswordStatus(isPasswordStrong.passwordRequirements);
      setMeetsStrengthCriteria(isPasswordStrong.hasRequiredStrength);
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!meetsStrengthCriteria) {
      passwordInputRef.current?.focus();
    } else {
      console.log("formData:", formData);
      console.log("Form submitted successfully!");
      const payload = formData;
      dispatch(SignInAuth({ payload }));
    }
  };

  const { first_name, last_name, email, password } = formData;

  return (
    <div className="auth-outer">
      <div className="auth-inner">
        <article className="auth-article">
          <h1>Create Account</h1>
        </article>
        <div className="site-container">
          <form onSubmit={handleSubmit} action="" className="auth-form">
            {/* First Name */}
            <div className="auth-form-box">
              <label className="auth-label" htmlFor="first_name">
                First Name
              </label>
              <input
                className={`auth-input `}
                id="first_name"
                type="text"
                name="first_name"
                placeholder="First Name"
                value={first_name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Last Name */}
            <div className="auth-form-box">
              <label className="auth-label" htmlFor="last_name">
                Last Name
              </label>
              <input
                className={`auth-input`}
                id="last_name"
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={last_name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="auth-form-box">
              <label className="auth-label" htmlFor="email">
                Email Address
              </label>
              <input
                className={`auth-input `}
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="auth-form-box auth-form-pass">
              <label className="auth-label" htmlFor="password">
                Password
              </label>
              <input
                ref={passwordInputRef}
                className={`auth-input`}
                id="password"
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
                required
              />
              <div className="auth-show-pass">
                <div onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </div>
              </div>
            </div>

            {/* List of Password Checks */}
            <ul className="auth-pass-ul">
              <p className="auth-pass-li">
                For Making Strong Password it should have following things:
              </p>
              <li
                className={`auth-pass-li ${
                  passwordStatus.upperCase
                    ? "isPasswordHave"
                    : "isPasswordHaveNot"
                }`}
              >
                Password should include Upper Case Letter. (i.e. ABCD...)
              </li>
              <li
                className={`auth-pass-li ${
                  passwordStatus.lowerCase
                    ? "isPasswordHave"
                    : "isPasswordHaveNot"
                }`}
              >
                Password should include Lower Case Letter. (i.e. abcd...)
              </li>
              <li
                className={`auth-pass-li ${
                  passwordStatus.number ? "isPasswordHave" : "isPasswordHaveNot"
                }`}
              >
                Password should include Numbers. (i.e. 1234567890)
              </li>
              <li
                className={`auth-pass-li ${
                  passwordStatus.symbol ? "isPasswordHave" : "isPasswordHaveNot"
                }`}
              >
                Password should include Symbols. (i.e. !@#$^&*())
              </li>
              <li
                className={`auth-pass-li ${
                  passwordStatus.length ? "isPasswordHave" : "isPasswordHaveNot"
                }`}
              >
                Password At least have 8 characters.
              </li>
            </ul>

            <div className="auth-form-box">
              <input
                className="auth-input auth-submit"
                type="submit"
                value="CREATE"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
