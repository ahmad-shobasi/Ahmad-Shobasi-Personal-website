import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiDatabase } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiWebstorm,
  SiAdobe,
  SiVisualstudio,
  SiDocker,
  SiRedis,
} from "react-icons/si";
import { TbCommand } from "react-icons/tb";
import { TiVendorMicrosoft } from "react-icons/ti";

const toolsStack = [
  { id: 1, icon: TiVendorMicrosoft, title: "Microsoft windows" },
  { id: 5, icon: SiVisualstudio, title: "Visual Studio" },
  { id: 2, icon: SiVisualstudiocode, title: "Visual Studio code" },
  { id: 3, icon: SiWebstorm, title: "WebStorm" },
  { id: 4, icon: SiPostman, title: "Postman" },
  { id: 5, icon: SiDocker, title: "Docker" },
  { id: 6, icon: SiRedis, title: "Redis" },
  { id: 7, icon: DiDatabase, title: "SQL Management Studio" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolsStack.map(({ id, icon: IconComponent, title }) => (
        <Col key={id} xs={4} md={2} className="tech-icons" title={title}>
          <IconComponent />
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
