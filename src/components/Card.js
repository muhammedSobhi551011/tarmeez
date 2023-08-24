import Body from "./card-components/Body"
import Comments from "./card-components/Comments"
import Poster from "./card-components/Poster"
import "./Card.css"

const Card = (props) => {
  return (
    <div className={"card"}>
        <Poster name={props.postData.name}/>
        <hr/>        
        <Body body={props.postData.body}/>
        <hr/>        
        <Comments comments={props.postData.comments}/>
    </div>
  )
}

export default Card