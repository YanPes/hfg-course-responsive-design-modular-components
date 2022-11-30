import "./TestAufgabe.css";
import "./reset.css";
import { Navigation } from "./components/Navigation/Navigation";
import { SectionTitle } from "./components/Section/SectionTitle";
import { Card } from "./components/Card/Card";
import { InfoTeaser } from "./components/InfoTeaser/InfoTeaser";

function TestAufgabe() {
  return (
    <div className="test-aufgabe">
      <Navigation />
      <section className="jumbotron"></section>
      <section className="intro-section">
        <SectionTitle
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nulla amet dolorem esse, saepe iste aliquam quae ea corrupti repellat magni ratione voluptatem dolorum enim?"
          }
          headline={"Lorem ipsum dolor sit amet consectetur."}
        />
        <div className="intro-section-cards">
          <Card
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, molestiae ab dolore doloribus assumenda molestias?"
            }
            imageData={{
              source:
                "https://avataaars.io/?avatarStyle=Circle&topType=LongHairShavedSides&accessoriesType=Prescription01&hairColor=Blonde&facialHairType=MoustacheFancy&facialHairColor=Blonde&clotheType=ShirtVNeck&clotheColor=PastelYellow&graphicType=Skull&eyeType=Dizzy&eyebrowType=AngryNatural&mouthType=Grimace&skinColor=Pale",
              alt: "card image",
            }}
            title={"Lorem, ipsum dolor."}
          />
          <Card
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, molestiae ab dolore doloribus assumenda molestias?"
            }
            imageData={{
              source:
                "https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Blank&hatColor=Blue03&hairColor=BlondeGolden&facialHairType=BeardMajestic&facialHairColor=Brown&clotheType=ShirtCrewNeck&clotheColor=Heather&eyeType=Squint&eyebrowType=FlatNatural&mouthType=Vomit&skinColor=Tanned",
              alt: "card image",
            }}
            title={"Lorem, ipsum dolor."}
          />
          <Card
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, molestiae ab dolore doloribus assumenda molestias?"
            }
            imageData={{
              source:
                "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairSides&accessoriesType=Wayfarers&hairColor=BrownDark&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Hearts&eyebrowType=UpDownNatural&mouthType=Twinkle&skinColor=Brown",
              alt: "card image",
            }}
            title={"Lorem, ipsum dolor."}
          />
        </div>
      </section>
      <section className="info-teaser-section">
        <InfoTeaser
          buttonText={"Click me if you can"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque officia ea quidem voluptate vero velit, doloribus voluptatum quas dignissimos veniam atque temporibus voluptates error earum cumque dicta quisquam. Sint, at, neque, eum praesentium delectus sunt temporibus voluptatibus molestias incidunt a soluta ut nesciunt? Mollitia eveniet et illo ex, atque impedit."
          }
          imageData={{
            source:
              "https://www.nicepng.com/png/detail/293-2933991_empty-macbook-screen-macbook-empty.png",
            alt: "info-teaser-image",
          }}
          isInverted={false}
          title={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, at."
          }
        />
        <InfoTeaser
          buttonText={"Click me if you can"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque officia ea quidem voluptate vero velit, doloribus voluptatum quas dignissimos veniam atque temporibus voluptates error earum cumque dicta quisquam. Sint, at, neque, eum praesentium delectus sunt temporibus voluptatibus molestias incidunt a soluta ut nesciunt? Mollitia eveniet et illo ex, atque impedit."
          }
          imageData={{
            source:
              "https://www.nicepng.com/png/detail/293-2933991_empty-macbook-screen-macbook-empty.png",
            alt: "info-teaser-image",
          }}
          isInverted={true}
          title={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, at."
          }
        />
        <InfoTeaser
          buttonText={"Click me if you can"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque officia ea quidem voluptate vero velit, doloribus voluptatum quas dignissimos veniam atque temporibus voluptates error earum cumque dicta quisquam. Sint, at, neque, eum praesentium delectus sunt temporibus voluptatibus molestias incidunt a soluta ut nesciunt? Mollitia eveniet et illo ex, atque impedit."
          }
          imageData={{
            source:
              "https://www.nicepng.com/png/detail/293-2933991_empty-macbook-screen-macbook-empty.png",
            alt: "info-teaser-image",
          }}
          isInverted={false}
          title={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, at."
          }
        />
      </section>
    </div>
  );
}
export default TestAufgabe;
