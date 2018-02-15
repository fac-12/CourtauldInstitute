import React, { Component } from "react";
import { Link } from "react-router-dom";
import { parseDateTime } from "../../helpers/conversions";
import { capitalizeFirstLetter } from "../../helpers/capitalize";

import {
  StyledDiv,
  StyledTitle,
  StyledContent,
  StyledInfoDiv,
  StyledInfo,
  StyledImg
} from "../styledDefaults/postStyles";

class UpdateItem extends Component {
  render() {
    const {
      title,
      content,
      user_id,
      tags,
      datetime,
      first_name,
      last_name,
      image_url
    } = this.props.data;
    const { date, time } = parseDateTime(datetime);
    const tag = tags.split(",").join(", ");
    const capitalizeTag = capitalizeFirstLetter(tag);
    return (
      <StyledDiv>
        <StyledTitle>{title}</StyledTitle>
        {image_url && <StyledImg src={image_url} />}
        <StyledContent>{content}</StyledContent>
        <StyledInfoDiv>
          <StyledInfo>
            Posted by{" "}
            <Link to={`/profile/${user_id}`}>
              {first_name} {last_name}
            </Link>{" "}
            in {capitalizeTag}
          </StyledInfo>
          <StyledInfo>
            on {date} at {time}
          </StyledInfo>
        </StyledInfoDiv>
      </StyledDiv>
    );
  }
}

export default UpdateItem;
