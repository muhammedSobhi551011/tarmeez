const Body = (props) => {
  const imageStyle = {
    width: "100%",
  };
  return (
    <div className={"post-body"}>
      <p>
        {props.body}
      </p>
      <img src={"BodyImage.toString()"} alt={''} style={imageStyle}/>
    </div>
  );
};

export default Body;
