import { useQuery } from "react-query";
import BucketListItem from "./BucketListItem";
import { Container } from "./styled";
import { getBucketListItems } from "../../../api/bucketItems";

const BucketList = () => {
  const { isLoading, error, data } = useQuery(
    "bucketListItems",
    getBucketListItems
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  return (
    <Container>
      {data.map((item) => (
        <BucketListItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default BucketList;
