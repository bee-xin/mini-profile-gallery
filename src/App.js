import { getImageUrl } from "./utils.js";

function Card({ size, person }) {
  return (
    <div className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(person.imageId)}
        alt={person.name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b>
          <span>({person.awards.join(", ")})</span>
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovery}
        </li>
      </ul>
    </div>
  );
}

export default function Gallery() {
  return (
    <div>
      <Card
        size={70}
        person={{
          name: "Ada Lovelace",
          profession: "Mathematician and writer",
          awards: [
            "Byron Award for Computational Thinking",
            "Royal Society Fellowship (posthumous)",
          ],
          discovery: "First algorithm intended for a machine",
          imageId: "szV5sdG",
        }}
      />
      <Card
        size={70}
        person={{
          name: "Albert Einstein",
          profession: "Theoretical physicist",
          awards: [
            "Nobel Prize in Physics",
            "Copley Medal",
            "Max Planck Medal",
          ],
          discovery: "Theory of relativity",
          imageId: "bjvT1fo",
        }}
      />
    </div>
  );
}
