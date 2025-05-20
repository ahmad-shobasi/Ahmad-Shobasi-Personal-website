import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { IoMdGlobe } from "react-icons/io"
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>

      <Card.Footer>
        {props.link && (
          <Button variant="primary" href={props.link} target="_blank">
            <IoMdGlobe size={18} className="me-2" />
            Live preview
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
}
export default ProjectCards;
