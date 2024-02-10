"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState, useRef } from "react";
import { authorizationLoginT } from "@/constant/client/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { LoginAuth } from "@/redux/auth/auth-action";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearState } from "@/redux/auth/auth-slice";
import Spinner from "@/components/client/skeleton/spinner";

const initialState: authorizationLoginT = {
  email: "ashishkohad@gmail.com",
  password: "Ashish@123",
};

export function SignInDialog() {
  const [formData, setFormData] = useState<authorizationLoginT>(initialState);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const [showPassword, setShowPassword] = useState<Boolean>(false);

  const dispatch = useAppDispatch();
  const { successMessage, loading, error,isAuth } = useAppSelector(
    (state) => state.auth
  );

  console.log({ successMessage, loading, error, isAuth });

  useEffect(() => {}, [showPassword]);

  useEffect(() => {
    dispatch(clearState());
    if (successMessage === "Login Successfully!") {
      alert(successMessage);
    }
  }, [successMessage, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = (event: any) => {
    console.log("Enter!!!");
    event.preventDefault();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("SignIn!!!", formData);
    const payload = formData;
    dispatch(LoginAuth({ payload }));
  };

  const { email, password } = formData;

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" onClick={() => handleClick}>
            Show Dialog
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              <AlertDialogCancel>
                <RxCross2 />
              </AlertDialogCancel>
            </AlertDialogTitle>
            {/* modal Content */}
            <div className="modal-content">
              <article className="modal-title">
                <h3>Sign in</h3>
              </article>
              <form onSubmit={handleSubmit} action="" className="auth-form">
                {/* Email */}
                <div className="auth-form-box">
                  <label className="auth-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className={`auth-input`}
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
                {/* Submit */}
                <div className="auth-form-box">
                  {loading ? (
                    <Spinner width={6} height={6} />
                  ) : (
                    <input
                      className="auth-input auth-submit"
                      type="submit"
                      value="SING IN"
                    />
                  )}
                </div>
              </form>
            </div>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}