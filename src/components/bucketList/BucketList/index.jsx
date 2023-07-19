import { useQuery } from "react-query";
import BucketListItem from "./BucketListItem";
import { Container } from "./styled";
import { deleteBucketItem, getBucketListItems } from "../../../api/bucketItems";
import { fetchImages } from "../../../api/bucketImages";
import { useEffect, useState } from "react";

const BucketList = () => {
  // bucket list 데이터 불러오기
  const { isLoading, error, data } = useQuery(
    "bucketListItems",
    getBucketListItems
  );

  // 이미지 불러오기
  const {
    data: imageUrls,
    isLoading: imageLoading,
    error: imageError,
  } = useQuery("images", fetchImages);

  // 이미지 URL 아이템 상태와 함께 관리 하기
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (data && imageUrls) {
      setItems(
        data.map((item, index) => ({
          ...item,
          imageUrl: imageUrls[index % imageUrls.length],
        }))
      );
    }
  }, [data, imageUrls]);

  if (isLoading || imageLoading) {
    return <p>Loading...</p>;
  }

  if (error || imageError) {
    return <p>Error...</p>;
  }

  const handleDelete = (id) => {
    deleteBucketItem(id).then(() => {
      setItems(items.filter((item) => item.id !== id));
    });
  };

  return (
    <Container>
      {items.map((item) => (
        <BucketListItem key={item.id} item={item} imageUrl={item.imageUrl} onDelete={handleDelete} />
      ))}
    </Container>
  );
};

export default BucketList;
