const HomePage = () => {
  return (
    <>
      <div>Bucket List</div>
      <div>
        <div
          style={{
            backgroundImage: "url(/assets/images/main-image.jpg)",
            height: "500px",
            width: "500px",
            backgroundSize: "cover",
          }}
        ></div>
        <span>Welcome to your bucket list</span>
        <div>
          Life is an exciting journey filled with dreams and possibilities.
          Every adventure begins with a single step. Start your bucket list
          journey today and make your dreams come true one by one. Because your
          dreams are not just dreams, they are a roadmap to your future. So why
          wait? Start your journey now!
        </div>
        <button>Go To My Bucket List</button>
      </div>
    </>
  );
};

export default HomePage;
