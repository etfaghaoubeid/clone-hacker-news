import React from 'react'
//import {Title,Item ,Host, ExernalLink,Description} from './styles'
import { Item, Title, Host, ExernalLink, Description,CommentLink,TimeAgo} from './styles';

const LINK_REL = 'noopener noreferer nofollow'
function ListItem() {
  return (
    <Item>
    <ExernalLink href='#' rel="nofollow noreferrer noopener" target="_blank">
      <Title>
        Title <Host>(www.elatigh.com)</Host>
      </Title>
    </ExernalLink>
    <Description>
      23 points by{' '}
      <CommentLink href='#' rel="nofollow noreferrer noopener" target="_blank">
        atigh
      </CommentLink>{' '}
      {' | '}
      <CommentLink href='#' rel="nofollow noreferrer noopener" target="_blank">
        fffffff Comments
      </CommentLink>
    </Description>
  </Item>

  )
}

export default ListItem
