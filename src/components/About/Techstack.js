import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiReact, DiMongodb, DiPython, DiGit, DiSass } from "react-icons/di";
import { TbBrandTypescript, TbBrandCSharp, TbSql } from "react-icons/tb";
import {
  SiAngular,
  SiJquery,
  SiExpress,
  SiNestjs,
  SiDotnet,
  SiPostgresql,
} from "react-icons/si";

const StackIcons = [
  { id: 1, icon: TbBrandTypescript, title: "TypeScript" },
  { id: 2, icon: SiJquery, title: "JQuery" },
  { id: 3, icon: CgCPlusPlus, title: "C++" },
  { id: 4, icon: TbBrandCSharp, title: "C#" },
  { id: 5, icon: DiPython, title: "Python" },
  { id: 6, icon: SiAngular, title: "AngularJs" },
  { id: 7, icon: DiReact, title: "ReactJs" },
  { id: 8, icon: SiExpress, title: "ExpressJs" },
  { id: 9, icon: SiNestjs, title: "NestJs" },
  { id: 10, icon: SiDotnet, title: ".Net core" },
  { id: 11, icon: DiMongodb, title: "MongoDB" },
  { id: 12, icon: TbSql, title: "SQL" },
  { id: 13, icon: SiPostgresql, title: "Postgresql" },
  { id: 14, icon: DiGit, title: "Git Technologies" },
  { id: 15, icon: DiSass, title: "Sass styling" },
];

function TechStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {StackIcons.map(({ id, icon: IconComponent, title }) => (
        <Col key={id} xs={4} md={2} className="tech-icons" title={title}>
          <IconComponent />
        </Col>
      ))}
    </Row>
  );
}

export default TechStack;
