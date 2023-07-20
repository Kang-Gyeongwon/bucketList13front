import { useContext } from "react";
import { BucketContext } from "../../contexts/BucketContext";
import BucketListItem from "./BucketListItem";
import { Container } from "./styled";

const BucketList = () => {
  const { items, handleDelete, isLoading, error } = useContext(BucketContext);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  return (
    <Container>
      {items.map((item) => (
        <BucketListItem
          key={item.id}
          item={item}
          imageUrl={item.imageUrl}
          onDelete={handleDelete}
        />
      ))}
    </Container>
  );
};

export default BucketList;
