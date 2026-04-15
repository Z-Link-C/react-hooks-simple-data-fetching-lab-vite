const DogDisplay = ({ dog, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        //needs to render dog image here but is not rendering
        <img src={dog} alt="A Random Dog" />
      )}
    </div>
  );
}
export default DogDisplay;