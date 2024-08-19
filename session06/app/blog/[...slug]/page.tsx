import React from 'react'

interface Blog {
    id: "string"
}

interface Props {
    params:any
}
export default function Blog(props: Props) {
    const {params} = props;
  return (
    <div>Bạn đang xem blog với đường dẫn: {params.slug}</div>
  )
}
