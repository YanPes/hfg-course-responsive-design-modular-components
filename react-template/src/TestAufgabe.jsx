import "./TestAufgabe.css";
import "./reset.css";
import { Navigation } from "./components/Navigation/Navigation";
import { SectionJumbotron } from "./components/Sections/SectionJumbotron";
import { SectionIntro } from "./components/Sections/SectionIntro";
import { SectionInfoTeaser } from "./components/Sections/SectionInfoTeaser";

function TestAufgabe() {
  return (
    <div className="test-aufgabe">
      <Navigation />
      <SectionJumbotron />
      <SectionIntro />
      <SectionInfoTeaser />
    </div>
  );
}
export default TestAufgabe;
