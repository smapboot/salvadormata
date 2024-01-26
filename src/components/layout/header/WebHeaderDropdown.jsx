import React from 'react'
import {
  CBadge,
  CDropdown, CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeaderNav
} from "@coreui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser} from "@fortawesome/free-regular-svg-icons";
import {cilAccountLogout} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {useUser} from "../../../hooks/useUser";

const WebHeaderDropdown = () => {

  // Locals
  let username = "Username"
  let photo = <FontAwesomeIcon icon={faCircleUser} size="2xl" />
  let blockSession;

  // Custom hooks
  const {User, endSession, itemsUserNav} = useUser();
  const itemsDropdown = itemsUserNav || []

  // React hooks

  // States

  return (
    <CHeaderNav className="ms-3">
      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
          {username} &nbsp;
          {photo}
        </CDropdownToggle>
        {
          User?.isAuthenticated && (
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownHeader className="bg-light fw-semibold py-2">El teu compte</CDropdownHeader>
              {
                itemsDropdown.length > 0 && itemsDropdown.map((item, i) => (
                  <CDropdownItem href={item.href} key={i}>
                    {
                      item?.isBadge
                        ? (
                          <CBadge color={item.badge.color} className="ms-2">
                            {item.label}
                          </CBadge>
                        ) : (item.label)
                    }
                  </CDropdownItem>
                ))
              }
              <CDropdownHeader className="bg-light fw-semibold py-2">Sessió</CDropdownHeader>
              <CDropdownDivider/>
              <CDropdownItem href="#" onClick={endSession}>
                <CIcon icon={cilAccountLogout} className="me-2"/>
                Logout
              </CDropdownItem>
            </CDropdownMenu>
          )
        }
      </CDropdown>
    </CHeaderNav>
  )
}

export default WebHeaderDropdown