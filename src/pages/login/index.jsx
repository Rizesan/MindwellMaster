import React from 'react';
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  return (
      <div>
        <main className="form-signin w-100 m-auto">
          <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-check text-start my-3">
              <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
          </form>
        </main>
      </div>
  )
};


{/*
 const navigate = useNavigate();

  const { email, password, onInputChange, onResetForm } = useForm({
    email: '',
    password: ''
  });

  const onLogin = (e) => {
    e.preventDefault();

    navigate('/dashboard', {
      replace: true,
      state: {
        logged: true,
        email
      }
    });
    onResetForm();
  };

  return (
      <div className="login-background " >
        <main className="form-signin m-auto h-50 w-50">
          <form onSubmit={onLogin} >
            <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

            <div className="form-floating mb-4">
              <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  name="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={onInputChange}
                  required
                  autoComplete="off"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={onInputChange}
                  required
                  autoComplete="off"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-check text-start my-3">
              <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
          </form>
        </main>
      </div>
  );
*/}