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
import { useToast } from "@/components/ui/use-toast";
import { RiAdminFill } from "react-icons/ri";

const initialState: authorizationLoginT = {
  email: "ashishkohad@gmail.com",
  password: "Ashish@123",
};

export function SignInDialog({ handelFlag }: { handelFlag: any }) {
  const [formData, setFormData] = useState<authorizationLoginT>(initialState);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [flag, setFlag] = useState<boolean>(true);
  const { toast } = useToast();

  const dispatch = useAppDispatch();
  const { successMessage, loading, error, isAuth } = useAppSelector(
    (state) => state.auth
  );

  // console.log({ successMessage, loading, error, isAuth });

  useEffect(() => {}, [showPassword]);

  useEffect(() => {
    dispatch(clearState());
    if (successMessage === "Login Successfully!") {
      // alert(successMessage);

      toast({
        className:
          "fixed top-10 left-1/2 transform -translate-x-1/2 flex md:max-w-[420px]",
        variant: "default",
        title: `${successMessage}`,
      });
    }
  }, [successMessage, dispatch, flag]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = (event: any) => {
    console.log("Enter!!!");
    event.preventDefault();
    handelFlag();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("SignIn!!!", formData);
    const payload = formData;
    dispatch(LoginAuth({ payload }));
    handelFlag();
    setFlag(!flag);
  };

  const { email, password } = formData;

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          {/* <Button variant="outline" onClick={() => handleClick}>
            Show Dialog
          </Button> */}
          <button className="tchr-listitem-a" onClick={() => handleClick}>
            <RiAdminFill className="tchr-listitem-svg" />
            <span className="tchr-listitem-span">Sign in</span>
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              <AlertDialogCancel className="modal-cross">
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
                    <Spinner />
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
