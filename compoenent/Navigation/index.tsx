import *as  React from 'react'
import Link from "next/link";
import GithubSVG from '../../assets/github.svg'
import PenSVG from "../../assets/pen.svg";
import HammerSVG from "../../assets/hammer.svg"
import FaceSVG from "../../assets/face.svg";
import TimelineSVG from "../../assets/timeline.svg"
import MailSVG from "../../assets/mail.svg";
import { LinkedInIcon } from "../../icons/LinkedIn"
import { TwitterIcon } from "../../icons/Twitter";
import {
  IntersectingElement,
  NavigationWrapper,
  SkipLink,
  LogoLink,
  NarutoFace,
  IconsWrapper,
  IconLink,
  MobileNavigationWrapper,
  NavLink,
  LinkText,
  NavigationTabletWrapper,



}from './styles'
import { useOnScreen } from '../../hook/UseOnScreen';
import { UseMedia } from '../../hook/useMedia';


type MainRefProps = {
  mainRef:React.MutableRefObject<HTMLElement | null>
};
type Ids = "about" | "experience" | "work" | "contact";


function Navigation({mainRef}:MainRefProps) {
  const {isVisible, setIntersectingElement}=useOnScreen()
  const isTabletLayout = UseMedia('min','768')

  const focusOnSection =(id:Ids)=>{
    const focusTarget = document.querySelector(`#${id}`) as HTMLElement
    focusTarget.focus()
  }

  return (
    <>
    {/* < IntersectingElement ref={setIntersectingElement}/> */}
    <NavigationWrapper shouldShowShadow={!isVisible} >
      <Link href="#main" passHref>
              <SkipLink onClick={()=> mainRef.current?.focus()}>
                  Skip to Main Content
              </SkipLink>
      </Link>
      <Link href={"/"} passHref>
           <LogoLink>
              Jesse Uzoma
         </LogoLink>
      </Link>
      {isTabletLayout && (
   <NavigationTabletWrapper>
       <Link href="#about" passHref>
         <NavLink  onClick={ ()=> focusOnSection("about")}> About.</NavLink>
       </Link>
       <Link href="#experience" passHref>
       <NavLink  onClick= { ()=> focusOnSection("experience")}> Experience.</NavLink>
          </Link>
          <Link href="#work" passHref>
         <NavLink  onClick={ ()=> focusOnSection("work")}> Work.</NavLink>
         </Link>
         <Link href="#contact" passHref>
        <NavLink  onClick={ ()=> focusOnSection("contact")}> Contact.</NavLink>
         </Link>
   </NavigationTabletWrapper>
   )}
      <NarutoFace aria-hidden="true" />
        <IconsWrapper>
          <Link href="https://www.linkedin.com/in/jesseuzoma/" passHref>
         <IconLink target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <LinkedInIcon/>
         </IconLink>
          </Link>

              <Link href= "https://github.com/HeDevedUp" passHref>
            <IconLink   target="_blank" rel="noopener noreferrer" aria-label="Github profile">
              < GithubSVG/>
            </IconLink>
            </Link>

            <Link href= "https://twitter.com/devtochi" passHref>
            <IconLink   target="_blank" rel="noopener noreferrer" aria-label="Twitter profile">
            <TwitterIcon/>
            </IconLink>
            </Link>

            <Link href= "https://hashnode.com/@Tochie" passHref>
            <IconLink   target="_blank" rel="noopener noreferrer" aria-label="My Software engineering blog">
           <PenSVG/>
              </IconLink>
              </Link>
              </IconsWrapper>

          <MobileNavigationWrapper>
  <Link href="#about" passHref>
    <NavLink>
      <FaceSVG aria-hidden="true" />
      <LinkText>About</LinkText>
    </NavLink>
  </Link>
  <Link href="#experience" passHref>
    <NavLink>
      <TimelineSVG aria-hidden="true" />
      <LinkText>Experience</LinkText>
    </NavLink>
  </Link>
  <Link href="#work" passHref>
    <NavLink>
      <HammerSVG aria-hidden="true" />
      <LinkText>Work</LinkText>
    </NavLink>
  </Link>
  <Link href="#contact" passHref>
    <NavLink>
      <MailSVG aria-hidden="true" />
      <LinkText>Contact</LinkText>
    </NavLink>
  </Link>
</MobileNavigationWrapper>
    </NavigationWrapper>
    </>
  )
}

export default Navigation
