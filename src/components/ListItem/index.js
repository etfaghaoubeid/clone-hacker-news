import React from 'react'
import {Title,Item ,Host, ExernalLink,Description} from './styles'

function ListItem() {
  return (
    <Item>
      <ExernalLink> <Title>Title  <Host> (Atigh Blog) </Host></Title></ExernalLink>
      <Description>344 by{''}
        <ExernalLink> hhh</ExernalLink>
      </Description>
    </Item> 
  )
}

export default ListItem
