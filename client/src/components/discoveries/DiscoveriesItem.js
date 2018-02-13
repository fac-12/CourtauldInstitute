import React, { Component } from "react";
import _ from "lodash";
import { parseDateTime } from "../../helpers/conversions";
import {
  StyledDiv,
  StyledTitle,
  StyledContent,
  StyledInfoDiv,
  StyledInfo,
  StyledImg
} from "../styledDefaults/postStyles";

class DiscoveriesItem extends Component {
  render() {
    const data = _.values(this.props.data);
    return (
      <div>
        {data.map(item => (
          <StyledDiv key={item.id}>
            <StyledImg src={item.image_url} />
            <StyledContent>{item.content}</StyledContent>
            <StyledInfoDiv>
              <StyledInfo>
                Posted by {item.first_name} {item.last_name}
              </StyledInfo>
              <p>{item.datetime}</p>
            </StyledInfoDiv>
          </StyledDiv>
        ))}
      </div>
    );
  }
}

export default DiscoveriesItem;
