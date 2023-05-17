import React from "react";
import styled from "styled-components";

function Calendar() {
  return (
    <CardContainer>
      <Card>
        
      </Card>
    </CardContainer>
  );
}

export default Calendar;

const CardContainer = styled.div``;

const Card = styled.div`
  width: 100%;
  height: 500px;
  margin-bottom: 1rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px 1px rgba(209, 209, 209, 0.6);
  display: flex;
`;
