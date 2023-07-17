import axios from "axios";

// 추가하기
const addBucketItem = async (newBucket) => {
  await axios.post("http://localhost:4000/bucketListItems", newBucket);
};

export { addBucketItem };
