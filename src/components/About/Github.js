import React from "react";
import { Row } from "react-bootstrap";
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { days } from "./calendar-data";


function GithubCalendar() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <CalendarHeatmap
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${value.count}`;
        }}
        startDate={new Date(`2024-04-19`)}
        endDate={new Date(`2025-04-19`)}
        values={days}
      />
    </Row>
  );
}

export default GithubCalendar;
