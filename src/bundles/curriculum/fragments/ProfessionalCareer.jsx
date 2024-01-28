import React from 'react'
import {useTimeline} from "../../../hooks/timelineCustomHook/useTimeline";

const ProfessionalCareer = () => {
  const {timelineComponent} = useTimeline();
  return (
    <>
      {timelineComponent}
    </>
  )
}

export default ProfessionalCareer
