import './SectionIntro.css';
import { SectionTitle } from './../Section/SectionTitle';
import { Card } from './../Card/Card';
import { cardData } from './sectionIntroData';

export const SectionIntro = () => {
  return (
    <section className="section-intro">
        <SectionTitle
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nulla amet dolorem esse, saepe iste aliquam quae ea corrupti repellat magni ratione voluptatem dolorum enim?"
          }
          headline={"Lorem ipsum dolor sit amet consectetur."}
        />
        <div className="intro-section-cards">
          {cardData.map((card, index) => {
            return <Card key={index} description={card.description} imageData={card.imageData} title={card.title}/>
          })}
        </div>
      </section>
  )
}