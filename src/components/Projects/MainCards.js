import React from "react";
import Card from 'react-bootstrap/Card';

function MainCardProjectChoose(props) {
  return (
    // <a href={props.Path} target="_blank" rel="noreferrer">
    <Card className="project-card-view">
      <Card.Img variant="" src={props.ImgPath} alt={props.alt}/>
      <Card.ImgOverlay>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.Description}
        </Card.Text>
        <Card.Text>{props.BottomText}</Card.Text>
      </Card.ImgOverlay>
    </Card>
    // </a>
  );
}

export default MainCardProjectChoose;