"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function page() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [searchName,setSearchName] = useState("");
    const [searchCategory,setSearchCategory] = useState("");
    const route = useRouter();
    const searchParam = useSearchParams();
    const handleChangeName = (event:React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setName(value);
    }
    const handleChangeCategory = (event:React.ChangeEvent<HTMLInputElement>) => {
        let categoryValue = event.target.value;
        setCategory(categoryValue);
    }
    const handleClick = () => {
        route.push(`?name=${encodeURIComponent(name)}&category=${encodeURIComponent(category)}`)
    }
    useEffect(() => {
        const searchName = searchParam.get('name');
        const searchCategory = searchParam.get('category');
        if (searchName) {
        setSearchName(searchName); 
        }
        if (searchCategory){
        setSearchCategory(searchCategory);
        }
    }, [searchParam]);
  return (
    <div>
        <h3>Tên sản phẩm: {searchName}</h3>
        <h3>Tên danh mục: {searchCategory}</h3>
        <div>
        <input type="text" onChange={handleChangeName} placeholder='Tìm kiếm theo tên'/><br />
        <input type="text" onChange={handleChangeCategory} placeholder='Tìm kiếm theo danh mục'/> <br />
        <button onClick={handleClick}>Tìm kiếm</button>
        </div>
    </div>
  )
}
