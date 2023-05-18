import React from "react";
import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import daygrid from "@fullcalendar/daygrid";
import timegrid from "@fullcalendar/timegrid";
import interaction from "@fullcalendar/interaction";

function Calendar() {
  return (
    <CardContainer>
      <Card>
        <FullCalendar
          plugins={[daygrid, timegrid, interaction]}
          initialView="dayGridMonth" // timeGridDay, timeGridWeek
          headerToolbar={{
            start: "today prev,next", // will normally be on the left. if RTL, will be on the right
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
          }}
        />
      </Card>
    </CardContainer>
  );
}

export default Calendar;

const CardContainer = styled.div`
  width: 100%;
`;

const Card = styled.div`
  width: 100%;
  min-width: 945px;
  height: 500px;
  margin-bottom: 1rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px 1px rgba(209, 209, 209, 0.6);
  display: flex;
`;
