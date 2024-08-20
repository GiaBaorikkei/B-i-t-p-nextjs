"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Page() {
    const [inputValue, setInputValue] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();

    // Khai báo hàm handleChangeInput
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setInputValue(value);
    }

    const handleClick = () => {
        router.push(`/posts?search=${encodeURIComponent(inputValue)}`)
    }

    useEffect(() => {
        const searchInput = searchParams.get("search");
        if (searchInput) {
            setInputValue(searchInput);
        }
    }, [searchParams]);

    return (
        <div>
            <h2>Search Value: {inputValue}</h2>
            <div>
                <input type="text" value={inputValue} onChange={handleChangeInput} placeholder='Tìm kiếm' />
                <button onClick={handleClick}>Tìm kiếm</button>
            </div>
        </div>
    )
}
