import styled,{ css,keyframes} from "styled-components";
import { media } from "../../theme/media";
import { focusStyles,secondFocusStyles } from "../../theme/sharedStyles";
import { theme } from "../../theme/theme";
import NarutoFaceSVG from "../../assets/naruto-face.svg";



export const NavigationWrapper = styled.nav<{shouldShowShadow:boolean}>`
width:100%;
flex:0 0 70px;
padding:0 15px;
display:flex;
align-items:center;
background:${theme.DarkBrown}
position:sticky
top:0;
left:0
z-index:10
${(props)=>
  props.shouldShowShadow && css`
  box-shadow:0.3px 2px
  `
}
`;
export const IntersectingElement=styled.div`
width:100%
height: 0.2rem;
 position: absolute
 top: 0;
 left: 0;
 background:transparent;
 visibility: hiddden;
 z-index: -1000;

`;
