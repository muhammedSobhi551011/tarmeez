import Tag from "./tags-components/Tag";
import "./Tags.css";

let tagsData = [];
for (let i = 1; i <= 6; i++) {
  tagsData.push({
    name: `lol ${i}`,
    id: i,
    image: (
      <img
        src={
          "https://cdn.pixabay.com/photo/2016/03/21/10/44/desert-1270345_640.jpg"
        }
        alt={""}
        style={{ width: "90px" }}
      />
    ),
  });
}
const Tags = () => {
  return (
    <div className={"tags-container"}>
      <ul className={"tags"}>
        {tagsData.map((tag) => (
          <Tag key={tag.id} name={tag.name}>
            {tag.image}
          </Tag>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
