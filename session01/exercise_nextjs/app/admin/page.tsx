import React from 'react'
import Company from '../pages/company'
import Button from '../components/Button'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import "../globals.css";

export default function Page() {
  return (
    <div>
       <p>Họ và tên: Thái Nguyễn Gia Bảo</p> 
    <Company></Company>
    <Button></Button>
    <p>Chỉnh sửa tiêu đề</p>
    <title>Rikkei Academy</title>
    <link rel="icon" href="https://learn.rikkeiacademy.com/favicon.ico.png " />
    <Header></Header>
    <Footer></Footer>
    </div>
    
  )
}
