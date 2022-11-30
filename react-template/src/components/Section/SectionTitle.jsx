import "./SectionTitle.css";

export const SectionTitle = ({ headline, description }) => {
  return (
    <div className="section-title">
      <h2 className="section-title-headline">{headline}</h2>
      <p className="section-title-description">{description}</p>
    </div>
  );
};
