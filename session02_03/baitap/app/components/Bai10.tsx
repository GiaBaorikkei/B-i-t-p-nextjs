import React from "react";
import style from "../styles/bai10.module.css";

interface BaseCartProps {
  content: string;
  title: string;
  image: string;
  children: React.ReactNode;
}

const BaseCart: React.FC<BaseCartProps> = ({ content, title, image, children }) => {
  return (
    <div className={style["base-cart"]}>
      <img src={image} alt={title} className={style["base-cart__image"]} />
      <h2 className={style["base-cart__title"]}>{title}</h2>
      <p className={style["base-cart__content"]}>{content}</p>
      <div className={style["base-cart__actions"]}>{children}</div>
    </div>
  );
};

const BaseButton: React.FC<{ children: string; type: "primary" | "secondary" }> = ({ children, type }) => {
  return <button className={`${style["base-button"]} ${style[`base-button--${type}`]}`}>{children}</button>;
};

export default function Bai10() {
  return (
    <BaseCart
      content="Áo phông nam mát mẻ"
      title="Áo phông nam"
      image="https://img.lovepik.com/free-png/20210923/lovepik-t-shirt-png-image_401190055_wh1200.png"
      children={<BaseButton children="Thêm vào giỏ hàng" type="primary" />}
    />
  );
}
