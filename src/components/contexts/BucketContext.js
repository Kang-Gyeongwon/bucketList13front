import React, { createContext, useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getBucketListItems,
  addBucketItem,
  deleteBucketItem,
} from "../../api/bucketItems";
import { fetchImages } from "../../api/bucketImages";

export const BucketContext = createContext();

export const BucketProvider = ({ children }) => {
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

  const queryClient = useQueryClient();

  const mutation = useMutation(addBucketItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("bucketListItems");
    },
  });

  const handleDelete = (id) => {
    deleteBucketItem(id).then(() => {
      setItems(items.filter((item) => item.id !== id));
    });
  };

  const handleAdd = (newItem) => {
    mutation.mutate(newItem);
  };

  return (
    <BucketContext.Provider
      value={{
        items,
        isLoading: isLoading || imageLoading,
        error: error || imageError,
        handleAdd,
        handleDelete,
      }}
    >
      {children}
    </BucketContext.Provider>
  );
};
