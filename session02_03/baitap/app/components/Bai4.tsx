import React from 'react'
import style from "../styles/bai4.module.css"

export default function Bai4() {
  return (
    <div>
         <div className={style.container}>
      <div className={style.formContainer}>
        <h2 className={style.title}>Admin Login</h2>
        <form>
          <div className={style.formGroup}>
            <label className={style.label} htmlFor="email">Email Address</label>
            <input
              className={style.input}
              id="email"
              type="email"
              placeholder="hello@example.cl"
            />
          </div>
          <div className={style.formGroup}>
            <div className='flex '>
            <label className={style.label} htmlFor="password">Password</label>
                <a href="#" className={style.forgotPassword}>Forgot Password</a>
            </div>
            <div className={style.passwordContainer}>
              <input
                className={style.input}
                id="password"
                type="password"
                placeholder="**********"
              />
            </div>
            <p className={style.errorMessage}>Please enter correct password</p>
          </div>
          <div className={style.formGroup}>
            <label className={style.checkboxContainer}>
              <input type="checkbox" />
              <span className={style.checkboxLabel}>Keep me signed in</span>
            </label>
          </div>
          <div className={style.formGroup}>
            <button className={style.continueButton} type="button">Continue</button>
          </div>
          <div className={style.signUpContainer}>
            <p>or sign up with</p>
            <div className={style.signUpButtons}>
              <button className={style.signUpButton}>Google</button>
              <button className={style.signUpButton}>Apple</button>
              <button className={style.signUpButton}>Facebook</button>
            </div>
          </div>
          <div className={style.signUpLinkContainer}>
            <a href="#" className={style.signUpLink}>Don`t have an Account? Sign up here</a>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}
