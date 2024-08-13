import React from 'react'
import style from "../styles/bai3.module.css"
import classNames from 'classnames'

export default function Bai3() {
  return (
    <div>
        <div className={style.container}>
      <h2 className={style.title}>Form Sign up</h2>
      <form>
        <div className={style.formGroup}>
          <label htmlFor="name" className={style.label}>Name</label>
          <input type="text" id="name" placeholder="Your name" className={style.input} />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email" className={style.label}>Email</label>
          <input type="email" id="email" placeholder="you@company.com" className={style.input} />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="phone" className={style.label}>Phone number</label>
          <div className={style.inputGroup}>
            <select className={classNames(style.input, style.select)}>
              <option value="US">US</option>
              <option value="VN">VN</option>
          
            </select>
            <input type="tel" id="phone" placeholder="+84 (123) 456-789" className={classNames(style.input, style.phoneInput)} />
          </div>
        </div>
        <div className={style.formGroup}>
          <label htmlFor="address" className={style.label}>Address</label>
          <textarea id="address" placeholder="Tell us a little about the project..." className={classNames(style.input, style.textarea)}></textarea>
        </div>
        <div className={style.formGroup}>
          <label className={style.label}>Skills</label>
          <div className={style.skills}>
            <div>
            <label className={style.checkboxGroup}>
              <input type="checkbox" /> HTML
            </label>
            <label className={style.checkboxGroup}>
              <input type="checkbox" /> UX design
            </label>
            <label className={style.checkboxGroup}>
              <input type="checkbox" /> CSS
            </label>
            </div>
            <div>
            <label className={style.checkboxGroup}>
              <input type="checkbox" /> JavaScript
            </label>
            <label className={style.checkboxGroup}>
              <input type="checkbox" /> ReactJS
            </label>
            <label className={style.checkboxGroup}>
              <input type="checkbox" /> Java
            </label>
            </div>
          </div>
        </div>
        <button type="submit" className={style.submitButton}>Sign up</button>
      </form>
    </div>
    </div>
  )
}
