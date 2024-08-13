import React from 'react'
import style from "../styles/bai5.module.scss"
import { TbExclamationMark } from "react-icons/tb";

export default function Bai5() {
  return (
    <div>
        <div className={style.popup}>
      <div className={style.popupContent}>
        <div className={style.iconContainer}>
          <span className={style.icon}><TbExclamationMark /></span>
        </div>
        <h2 className={style.title}>Delete blog post</h2>
        <p className={style.message}>Are you sure you want to delete this post? This action cannot be undone.</p>
        <div className={style.actions}>
          <button className={style.cancelButton}>Cancel</button>
          <button className={style.deleteButton}>Delete</button>
        </div>
      </div>
    </div>
    </div>
  )
}
