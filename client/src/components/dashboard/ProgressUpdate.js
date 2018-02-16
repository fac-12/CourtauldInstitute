import React, { Component } from "react";
import styled from "styled-components";

const StyledProgressUpdate = styled.div`
  font-size: 0.9rem;
  font-family: "Open Sans", sans-serif;

  @media screen and (min-width: 960px) {
    max-width: 500px;
  }
`;

const StyledP = styled.p`
  margin-bottom: 18px;
  font-size: 0.9rem;
  margin: 0 1.5rem;
  line-height: 1.6;
`;

const StyledProgressSection = styled.div`
  background: rgba(255, 255, 255, 0.07);
  width: 100vw;
  position: absolute;
  bottom: 0;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Progress = styled.div`
  display: flex;
  font-style: italic;
`;

const StyledPCollection = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 1.5rem;
  margin-bottom: 4px;
`;

const StyledWeekProgressData = styled.div`
  font-size: 1.8rem;
  margin: 0 1.5rem;
`;

const StyledWeekProgressText = styled.p`
  font-size: 0.95rem;
`;

const StyledOverall = StyledWeekProgressData.extend``;

class ProgressUpdate extends Component {
  render() {
    return (
      <StyledProgressUpdate>
        <StyledP>{this.props.text}</StyledP>
        <StyledProgressSection>
          <StyledPCollection>
            {this.props.collection} Collection
          </StyledPCollection>
          <Progress>
            <StyledWeekProgressData>
              {this.props.weekProgress}
              <StyledWeekProgressText>
                completed last week
              </StyledWeekProgressText>
            </StyledWeekProgressData>
            <StyledOverall>
              {this.props.overallProgress}
              <StyledWeekProgressText>completed overall</StyledWeekProgressText>
            </StyledOverall>
          </Progress>
        </StyledProgressSection>
      </StyledProgressUpdate>
    );
  }
}

export default ProgressUpdate;
