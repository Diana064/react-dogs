export const Dog = ({ dog: { url, breeds } }) => {
  const { name, bred_for, temperament } = breeds[0];
  return (
    <div>
      <img src={url} alt="dog" width="300px" />
      <div>
        <h1>Description</h1>
        <h2>Name: {name}</h2>
        <h2>Bread for: {bred_for}</h2>
        <h2>Temperament: {temperament}</h2>
      </div>
    </div>
  );
};
