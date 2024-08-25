import React from "react";

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}
fetchData();
export default async function page() {
  const dataUser = await fetchData();
  return (
    <>
    <h1>Danh sách bài viết</h1>
      {dataUser.map((item: any) => (
        <ul key={item.id}>
          <li>{item.title}</li>
          <li>{item.body}</li>
          <hr />
          <br />
        </ul>
      ))}
    </>
  );
}