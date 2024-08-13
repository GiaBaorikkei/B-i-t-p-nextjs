import React from 'react'
import style from "../styles/bai6.module.scss"
import { FaRegUserCircle } from "react-icons/fa";

export default function Bai6() {
  return (
    <div>
         <nav className={style.navbar}>
      <div className={style.logo}>
        <p>logoipsum</p>
      </div>
      <ul className={style.navLinks}>
        <li className={`${style.navItem} ${style.active}`}>
          <a href="#">Home</a>
        </li>
        <li className={style.navItem}>
          <a href="#">Updates</a>
        </li>
        <li className={style.navItem}>
          <a href="#">Services</a>
        </li>
        <li className={style.navItem}>
          <a href="#">Features</a>
        </li>
        <li className={style.navItem}>
          <a href="#">About Us</a>
        </li>
      </ul>
      <div className={style.userIcon}>
      <FaRegUserCircle />
      </div>
    </nav>
    </div>
  )
}
