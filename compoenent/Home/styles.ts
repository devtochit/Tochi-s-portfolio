import styled, { keyframes } from "styled-components";
import { media } from "../../theme/media";
import { focusStyles, secondFocusStyles } from "../../theme/sharedStyles";
import { theme } from "../../theme/theme";



const fadeUp =keyframes`
from{
    transform: translateY(2rem);
    opacity: 0;
}
to{
    transform: translate(0);
    opacity: 1;
}
`



export const HomeSection = styled.section`
/*  calculate the height  */
height: calc(calc(var(--vh,1vh)*100)-14rem);
width:100%;
background-color: ${theme.DarkBrown};
position: relative;
${media.tablet}{
    height: 100vh;
}

`;

export const HomeTitle = styled.h1`
font-size: 4rem;
font-weight: bold;
font-family: ${theme.Montserrat};
color: ${theme.Red};
animation: ${fadeUp} 0.4s both ease-out;
will-change: transform;
${media.tablet}{
    font-size: 6rem;
}
${media.desktop}{
    font-size: 7rem;

}
${media.laptop}{
    font-size:9rem;
}
`;

export const HomeSubtitle =styled.h2`
font-size: 2rem;
font-family: ${theme.Montserrat};
font-weight: 600;
color: ${theme.Pink};
margin-top: 0.5rem;
animation:${fadeUp} 0.3s 0.2 both ease-out;
will-change: transform;
${media.custom(360)}{
    margin-top: 1rem;
}
${media.tablet}{
    margin-top: 4rem;
}
${media.desktop}{
    font-size: 5rem;
}
${media.laptop}{
    font-size: 5.5rem;
    margin-top: 1.5rem;
}
`;
export const HomeDescription=styled.p`
line-height: 1.3;
font-family: ${theme.Montserrat};
font-size: 1.1rem;
font-weight: 500;
color: ${theme.Orange};
animation: ${fadeUp} 0.3s 0.4s both ease-out;
will-change: transform;
margin-top:1.5rem;
${media.custom(375)}{
    margin-top:2.2rem
}
${media.custom(410)}{
    margin-top:2.7rem
    font-size:1.3rem;
    line-height:14;
}
${media.tablet}{
    font-size:1.8rem;
}
${media.desktop}{
    margin-top:2.5rem;
    font-size:2rem;
    line-height:1.5;
    width:52vw;
}
${media.laptop}{
width:73rem;
margin-top:4rem
}
`