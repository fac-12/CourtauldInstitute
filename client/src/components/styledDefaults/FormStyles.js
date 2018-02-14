import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 20px;
  font-family: "Open Sans", sans-serif;
`;

export const StyledInput = styled.input`
  border: 2px;
  border-style: inset;
  border-color: #ecf0f1;
  margin: 5px 0 10px 0;
  width: 100%;
  height: 2rem;
`;

export const StyledCheckbox = styled.input`
  margin: 5px 5px 2px 0;
  position: relative;
  top: 1px;
`;
export const StyledTextArea = styled.textarea`
  border: 2px;
  border-style: inset;
  border-color: #ecf0f1;
  margin: 5px 0 10px 0;
  width: 100%;
  height: 100px;
`;
export const StyledHideFileUpload = StyledInput.extend`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const StyledErrorDiv = styled.div`
  color: red;
`;

export const StyledP = styled.p`
  margin: 5px 0;
  font-family: "Source Serif Pro", serif;
  font-weight: 600;
`;
export const StyledLabel = styled.label`
  font-family: "Source Serif Pro", serif;
  font-weight: 600;
`;
export const StyledTagsLabel = styled.label`
  font-size: 0.9rem;
`;

export const StyledRadioLabel = styled.label`
  display: block;
  margin: 0.5rem;
`;
