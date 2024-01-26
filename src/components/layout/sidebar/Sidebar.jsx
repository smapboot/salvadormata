import React from 'react'

const Sidebar = (props) => {
  // Props
  const {orientation, content} = props;

  // Custom hooks

  // React hooks

  // States

  return (
    <>
      <h1>Sidebar in {orientation}</h1>
      {content}
    </>
  )
}

export default Sidebar

Sidebar.getDefaultProps = {
  content: "Add content from routing"
}