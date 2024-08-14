import React from 'react'
import classNames from 'classnames';
import style from "../styles/bai9.module.css"

interface BaseAlertProps {
    type: 'success' | 'info' | 'warning' | 'error';
    children: React.ReactNode;
}

const BaseAlert: React.FC<BaseAlertProps> = ({ type, children }) => {
    return (
      <div className={classNames(style.baseAlert, style[type])}>
        {children}
      </div>
    );
};

export default function Bai9() {
  return (
    <div className={style.container}>
        <BaseAlert type="success">Success Text</BaseAlert>
        <BaseAlert type="info">Info Text</BaseAlert>
        <BaseAlert type="warning">Warning Text</BaseAlert>
        <BaseAlert type="error">Error Text</BaseAlert>
    </div>
  )
}
