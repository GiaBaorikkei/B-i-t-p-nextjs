import React from 'react'
import Company from '../pages/company'
import Button from '../components/Button'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import "../globals.css";
import Image from 'next/image'

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
    <Image src={"https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg"}
      height={100}
      width={200}
      alt=''
/>
    </div>
    
  )
}
