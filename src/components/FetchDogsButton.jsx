const FetchDogsButton = ({ fetch }) => {
  return (
    <button onClick={fetch}>
      Fetch New Dog
    </button>
  );
};

export default FetchDogsButton;