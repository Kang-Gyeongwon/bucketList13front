import { useQuery } from "react-query";
import BucketListItem from "./BucketListItem";
import { Container } from "./styled";
import { getBucketListItems } from "../../../api/bucketItems";
import { fetchImages } from "../../../api/bucketImages";

const BucketList = () => {
  // bucket list 데이터 불러오기
  const { isLoading, error, data } = useQuery(
    "bucketListItems",
    getBucketListItems
  );

  // 이미지 불러오기
  const { data: imageUrls } = useQuery("images", fetchImages);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  console.log(data)

  return (
    <Container>
      {data?.map((item, index) => (
        <BucketListItem
          key={item.id}
          item={item}
          imageUrl={imageUrls[index % imageUrls.length]}
        />
      ))}
    </Container>
  );
};

export default BucketList;
