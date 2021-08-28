import React from 'react'
import PropTypes from 'prop-types'

// @material-ui/core
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

function SidebarItem({ label, icon, onClick, selected }) {
  return (
    <ListItem button onClick={onClick} selected={selected}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  )
}

SidebarItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
}

SidebarItem.defaultProps = {
  selected: false,
}

export default SidebarItem
