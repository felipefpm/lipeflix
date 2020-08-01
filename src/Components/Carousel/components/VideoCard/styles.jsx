import styled from "styled-components";

export const VideoCardContainer = styled.a`
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-size: cover;
  border: 2px solid;
  border-radius: 4px;
  width: 298px;
  display: inline-block;
  height: 197px;
  border-radius: 10px;

  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
