import { InfoTeaser } from './../InfoTeaser/InfoTeaser';
import { infoTeaserData } from './sectionInfoTeaser';
export const SectionInfoTeaser = () => {
  return (
    <section className="info-teaser-section">
        {infoTeaserData.map((teaser, index) => {
          return (
            <InfoTeaser 
              key={index}
              buttonText={teaser.buttonText} 
              description={teaser.description} 
              imageData={teaser.imageData} 
              isInverted={teaser.isInverted} 
              title={teaser.title} 
            />
          )
        })}
      </section>
  )
}