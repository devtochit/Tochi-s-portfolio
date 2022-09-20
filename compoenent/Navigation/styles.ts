import styled, { css, keyframes } from "styled-components";
import { media } from "../../theme/media";
import { focusStyles, secondFocusStyles } from "../../theme/sharedStyles";
import { theme } from "../../theme/theme";
import NarutoFaceSVG from "../../assets/naruto-face.svg";

export const NavigationWrapper = styled.nav`
width:100%;
flex:0 0 70px;
padding:0 15px;
display:flex;
align-items:center;
background-color:${theme.DarkBrown};
position:sticky;
top:0;
left:0;
z-index:10;
`;

export const IntersectingElement = styled.div`
  width: 100%;
  height: 0.2rem;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  visibility: hiddden;
  z-index: -1000;
`;
export const SkipLink = styled.a`
  position: absolute;
  left: -99rem;
  width: 0.1rem;
  height: 0.1rem;
  top: auto;
  text-decoration: underline;
  ` ;

export const LogoLink = styled.a`
text-decoration: none;
color:${theme.Orange};
font:${theme.Oxanium};
font-weight: 700;
font-size:2.5rem;
text-shadow: 0 0.1rem hsl(18, 21%, 23%), 0 0.2rem
  0 0.3rem hsl(18, 21%, 23%), 0 0 10px #f72405ba;
`;
