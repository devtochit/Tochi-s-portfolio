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
  NavigationWrapper
}from './styles'

type MainRefProps={mainRef:React.MutableRefObject<HTMLElement | null>}

function index() {
  return (
    <>
    {/* < IntersectingElement/> */}
    <NavigationWrapper>

      <Link href="#main" passHref>
 <Skip>

 </Skip>
      </Link>
    </NavigationWrapper>
    </>
  )
}

export default index
