import React, {useEffect, useState} from 'react'
import {CModal, CModalBody, CModalFooter, CModalHeader} from "@coreui/react";

export const modalSizes = {
  small: "sm",
  medium: "lg",
  big: "xl",
  full: "full"
}

const SmapDynamicModal = (props) => {
  // Props
  const {header, body, footer, size} = props

  // States
  const [sizeModal, setSizeModal] = useState(modalSizes.medium)
  const [visible, showModal] = useState(true)

  useEffect(() => {

    if ( size && size !== modalSizes.full) {
      setSizeModal(size)
    }
  }, [])

  const modalSkeleton = (
    <>
      <CModalHeader>
        {header || "Modal title"}
      </CModalHeader>
      <CModalBody>
        {body || "Modal body"}
      </CModalBody>
      <CModalFooter>
        {footer || "Modal footer"}
      </CModalFooter>
    </>
  )

  const renderizeModal = () => {
    return (
      <>
        <CModal size={sizeModal} visible={visible}>
          {modalSkeleton}
        </CModal>
      </>
    )
  }

  const fullscreenModal = () => {
    return (
      <>
        <CModal fullscreen visible={visible}>
          {modalSkeleton}
        </CModal>
      </>
    )
  }

  return (
    <>
      {
        size === modalSizes.full ? fullscreenModal() : renderizeModal()
      }
    </>
  )
}

export default SmapDynamicModal
