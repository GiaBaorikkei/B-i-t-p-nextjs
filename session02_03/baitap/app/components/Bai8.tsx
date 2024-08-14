import React from 'react'
import style from "../styles/bai8.module.css"
import { GrFormNextLink } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";

export default function Bai8() {
  return (
    <div>
         <div className={style.pagination}>
      <button className={style.pageItem}><IoMdArrowBack /> Prev</button>
      <button className={style.pageItem}>1</button>
      <button className={style.pageItem}>2</button>
      <button className={style.pageItem}>3</button>
      <button className={style.pageItem}>4</button>
      <button className={style.pageItem}>5</button>
      <button className={style.pageItem}>6</button>
      <span className={style.ellipsis}>...</span>
      <button className={style.pageItem}>20</button>
      <button className={style.pageItem}>Next <GrFormNextLink /></button>
    </div>
    </div>
  )
}
