import React from "react";
import styled from "styled-components";
import * as S from "./styles";
import Router from "next/router";
import dynamic from "next/dynamic";
import { Handshake } from '@styled-icons/fa-solid/Handshake';
import { PeopleFill } from '@styled-icons/bootstrap/PeopleFill'


const links = [
    { href: "/", label: "Home" },
    { href: "/student", label: "Estudante", icon: <PeopleFill size={30}/>,},
    { href: "/partner", label: "Parceiro", icon: <Handshake size={30}/> },
  ];

  const professorLinks = [
    { href: "/professor/dashboard", label: "Dashboard", icon: <PeopleFill size={30}/>,},
  ];
  const studentLinks = [
    { href: "/student/dashboard", label: "Dashboard", icon: <PeopleFill size={30}/>,},
  ];

  const Link = dynamic(() => import("next/link"), { ssr: false });

const Sidebar = ({showLinks, showProfessorLinks, showStudentLinks}) => {
    return (
      <S.SidebarWrapper>
        <S.SidebarHeader>SGM</S.SidebarHeader>
        <S.SidebarNav>
        {showLinks &&
          links.map((link) => (
            <Link href={link.href} key={link.label}>
              <S.SidebarLink>
                {link.icon}
                <span className="link-label">{link.label}</span>
              </S.SidebarLink>
            </Link>
          ))}
          {showProfessorLinks  &&
          professorLinks.map((professorLink) => (
            <Link href={professorLink.href} key={professorLink.label}>
              <S.SidebarLink>
                {professorLink.icon}
                <span className="link-label">{professorLink.label}</span>
              </S.SidebarLink>
            </Link>
          ))}

          {showStudentLinks  &&
          studentLinks.map((studentLink) => (
            <Link href={studentLink.href} key={studentLink.label}>
              <S.SidebarLink>
                {studentLink.icon}
                <span className="link-label">{studentLink.label}</span>
              </S.SidebarLink>
            </Link>
          ))}
        </S.SidebarNav>
      </S.SidebarWrapper>
    );
  };
  
  export default Sidebar;