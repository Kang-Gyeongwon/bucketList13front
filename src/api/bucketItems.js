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

export { addBucketItem, getBucketListItems };
