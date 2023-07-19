import axios from "axios";

// 추가하기
// const addBucketItem = async (newBucket) => {
//   await axios.post("http://localhost:4000/bucketListItems", newBucket);
// };

const addBucketItem = async (newBucket) => {
  try {
    const response = await axios.post(
      "https://bucket13.shop/api/post",
      newBucket
    );
    return response.data;
  } catch (error) {
    console.error("Error in addBucketItem:", error);
    throw error;
  }
};

// 가져오기
// const getBucketListItems = async () => {
//   const response = await axios.get("http://localhost:4000/bucketListItems");
//   return response.data;
// };

const getBucketListItems = async () => {
  try {
    const response = await axios.get("https://bucket13.shop/api/posts");

    // 응답 데이터 로그 보기
    // console.log(response.data);

    if (!response.data.postList) {
      console.log(
        "The 'postList' property does not exist in the response data."
      );
    }

    // 데이터 반환
    return response.data.postList;
  } catch (error) {
    // API 에러 메시지가 error.response.data에 있을 경우 error메세지 리턴받기
    if (error.response && error.response.data) {
      throw new Error(
        `Error Code: ${error.response.data.errorCode}, Error Message: ${error.response.data.errorMessage}`
      );
    }
    // 그 외 에러 츨력
    throw error;
  }
};

// 업데이트하기
const completeBucketItem = async (id, completeBucketItem) => {
  try {
    await axios.put(`https://bucket13.shop/api/post/${id}`, completeBucketItem);
  } catch (error) {
    console.error("Error in completeBucketItem:", error);
    throw error;
  }
};

// 삭제하기
// const deleteBucketItem = async (id) => {
//   await axios.delete(`http://localhost:4000/bucketListItems/${id}`);
// };

const deleteBucketItem = async (id) => {
  try {
    const response = await axios.delete(`https://bucket13.shop/api/post/${id}`);
    console.log(response);
  } catch (error) {
    console.log("Error in deleteBucketItem:", error);
    throw error;
  }
};

export {
  addBucketItem,
  getBucketListItems,
  completeBucketItem,
  deleteBucketItem,
};
