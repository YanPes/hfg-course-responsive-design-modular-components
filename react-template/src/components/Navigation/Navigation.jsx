import "./Navigation.css";
import { NavigationListEntry } from "./NavigationListEntry";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <span className="navigation-logo">👻</span>
      <ul className="navigation-list">
        <NavigationListEntry text={"Home"}/>
        <NavigationListEntry text={"Work"}/>
        <NavigationListEntry text={"Hobbies"}/>
        <NavigationListEntry text={"About me"}/>
        <NavigationListEntry text={"Contact"}/>
      </ul>
    </nav>
  );
};
