import { NavigationListItem } from "./NavigationListItem";

export const Navigation = ({navigationElements}) => {
  return (
    <nav>
      <ul>
        {navigationElements.map(element => {
          return <NavigationListItem text={element.text}/>
        })}
      </ul>
    </nav>
  );
}