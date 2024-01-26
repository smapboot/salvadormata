import React from 'react'
import {
  CContainer,
  CDropdown, CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CNavItem,
  CNavLink
} from "@coreui/react";
import {useUri} from "../../../hooks/useUri";
import "./WebHeader.css"
import LogoNavBar from "../../../assets/images/logo_nav_bar.png"
import {Image} from "react-bootstrap";

const WebHeaderDropdown = React.lazy(() => import("./WebHeaderDropdown"))

const defaultItems = [
  {
    label: "HOME",
    href: "/",
    type: "link",
    visible: true
  },
  {
    label: "HOME SINGLE PAGE",
    href: "/home/single-page",
    type: "link",
    visible: true
  },
  {
    label: "HOME 2 COLUMNS",
    href: "/home/two-columns",
    type: "link",
    visible: true
  },
  {
    label: "HOME 3 COLUMNS",
    href: "/home/three-columns",
    type: "link",
    visible: true
  },
]

const WebHeader = (props) => {

  const { itemsNavbar } = props
  const {uriString,} = useUri()

  // Local
  const isLinkActive = (href) => {
    return (uriString === href) ? "smapNavLink active" : "smapNavLink"
  }

  const items = itemsNavbar || defaultItems;

  return (
    <CHeader position="sticky" className="smapNavBar">
      <CContainer fluid>
        <CHeaderNav className="d-none d-md-flex me-auto" style={{position: "relative", bottom: "-10px"}}>
          <CNavItem>
            <Image src={LogoNavBar} className={"smapLinkLogo"} />
          </CNavItem>
          {
            items.map((nav, key) => {
              if ( nav.visible ) {
                if (nav.type === 'link' ) {
                  return (
                    <CNavItem key={key} className={isLinkActive(nav.href)}>
                      <CNavLink href={nav.href}>
                        {nav.label}
                      </CNavLink>
                    </CNavItem>
                  )
                }
                else {
                  return (
                    <CDropdown variant="nav-item" key={key}>
                      <CDropdownToggle color={nav.color}>
                        {nav.label}
                      </CDropdownToggle>
                      <CDropdownMenu>
                        {
                          nav.items.map((sub, j) => {
                            return (
                              <CDropdownItem href={sub.href} key={j}>
                                {sub.label}
                              </CDropdownItem>
                            )
                          })
                        }
                      </CDropdownMenu>
                    </CDropdown>
                  )
                }
              }
            })
          }
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <WebHeaderDropdown/>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default WebHeader