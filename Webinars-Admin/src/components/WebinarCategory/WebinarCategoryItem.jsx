import React from 'react'
import PropTypes from 'prop-types'

// material-ui/core
import { ListItem, ListItemText, Divider, IconButton } from '@material-ui/core'

// material-ui/icons
import EditIcon from '@material-ui/icons/Edit'
// components
import LinkWrapper from 'components/Link/LinkWrapper'

function WebinarCategoryItem({ webinarCategory, index }) {
  return (
    <>
      {index !== 0 && <Divider />}
      <ListItem key={webinarCategory.categoryId}>
        <ListItemText
          primary={webinarCategory.category}
          inset={
            !webinarCategory.children || webinarCategory.children.length === 0
          }
        />

        <LinkWrapper to={`/webinarCategory/edit/${webinarCategory.categoryId}`}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </LinkWrapper>
      </ListItem>
    </>
  )
}

WebinarCategoryItem.propTypes = {
  webinarCategory: PropTypes.shape().isRequired,
  index: PropTypes.number.isRequired,
}

export default WebinarCategoryItem
