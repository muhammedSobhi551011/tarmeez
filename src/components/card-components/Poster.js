const Poster = (props) => {
  return (
    <div className={"poster"}>
        <div className={"poster-image"}></div>
        <ul className={"poster-name"}>
            <li>{props.name}</li>
            <li>1 hour ago</li>
        </ul>
    </div>
  )
}

export default Poster