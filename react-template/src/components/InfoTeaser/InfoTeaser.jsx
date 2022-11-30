import { Button, ButtonVariants } from "../Button/Button";

import "./InfoTeaser.css";

export const InfoTeaser = ({
  isInverted,
  description,
  title,
  imageData,
  buttonText,
}) => {
  return (
    <div className={`info-teaser ${isInverted && "info-teaser-inverted"}`}>
      <div className="info-teaser-image-area">
        <img
          src={imageData.source}
          alt={imageData.alt}
          className="info-teaser-image"
        />
      </div>
      <div className="info-teaser-content-area">
        <h3 className="info-teaser-content-title">{title}</h3>
        <p className="info-teaser-content-description">{description}</p>
        <Button
          variant={ButtonVariants.primary}
          onClick={() => console.log("hello")}
          text={buttonText}
        />
      </div>
    </div>
  );
};
