async function fetchPostDetails(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    return data;
}
export default async function page({ params }: { params: { id: string } }) {
    const idPost = params.id;
    const postDetails = await fetchPostDetails(idPost);
    return (
      <div>
        <h1>Chi tiết Bài viết</h1>
        <h2>{postDetails.title}</h2>
        <p>{postDetails.body}</p>
      </div>
    );
}