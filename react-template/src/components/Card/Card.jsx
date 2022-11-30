import "./Card.css";

export const Card = ({ imageData, title, description }) => {
  return (
    <article className="card">
      <img src={imageData.source} alt={imageData.alt} className="card-image" />
      <h4 className="card-title">{title}</h4>
      <p className="card-description">{description}</p>
    </article>
  );
};
