const ItemListContainer = ({ greeting }) => {
  const paragraphs = greeting.split('\n').map((paragraph, index) => (
    <p key={index} className="text-4xl mb-2">{paragraph}</p>
  ));

  return (
    <div className="text-center">
      {paragraphs}
    </div>
  );
}

export default ItemListContainer;
