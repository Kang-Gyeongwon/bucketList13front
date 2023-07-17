import axios from "axios";

// 추가하기
const addBucketItem = async (newBucket) => {
  await axios.post("http://localhost:4000/bucketListItems", newBucket);
};

// 가져오기
const getBucketListItems = async () => {
  const response = await axios.get("http://localhost:4000/bucketListItems");
  return response.data;
};

// 업데이트하기
const completeBucketItem = async (id, completeBucketItem) => {
  await axios.put(
    `http://localhost:4000/bucketListItems/${id}`,
    completeBucketItem
  );
};

export { addBucketItem, getBucketListItems, completeBucketItem };
