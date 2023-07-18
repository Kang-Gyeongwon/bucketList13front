import axios from "axios";

// 한번에 여러 이미지 가져오기
const fetchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query: "travel", per_page: 30 }, // 이미지 30개 가져오기
    headers: {
      Authorization: "Client-ID zD9aCY1Q20ETeJCcy_p2JiPM8Wfe0QE6MLod6OTa9Vc",
    },
  });

  // 모든 이미지 url 리턴하기
  return response.data.results.map((image) => image.urls.small);
};

export { fetchImages };
