import React, { Component } from "react";
import styled from "styled-components";

const StyledProgressUpdate = styled.div`
  margin: 0 1.5rem;
  font-size: 0.9rem;

  @media screen and (min-width: 960px) {
    max-width: 500px;
  }
`;

const StyledP = styled.p`
  margin-bottom: 0.5rem;
`;

const Progress = styled.div`
  display: flex;
`;

const StyledPCollection = styled.p`
  margin: 10px 0;
`;

const StyledWeekProgressData = styled.p`
  font-size: 2rem;
`;

const StyledWeekProgressText = styled.p`
  font-size: 0.85rem;
  margin-bottom: 10px;
`;

const StyledOverall = StyledWeekProgressData.extend`
  margin-left: 30px;
`;

class ProgressUpdate extends Component {
  render() {
    return (
      <StyledProgressUpdate>
        <StyledP>{this.props.text}</StyledP>
        <StyledPCollection>
          {this.props.collection} Collection
        </StyledPCollection>
        <Progress>
          <StyledWeekProgressData>
            {this.props.weekProgress}
            <StyledWeekProgressText>completed last week</StyledWeekProgressText>
          </StyledWeekProgressData>
          <StyledOverall>
            {this.props.overallProgress}
            <StyledWeekProgressText>completed overall</StyledWeekProgressText>
          </StyledOverall>
        </Progress>
      </StyledProgressUpdate>
    );
  }
}

export default ProgressUpdate;
