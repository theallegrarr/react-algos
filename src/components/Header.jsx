import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'

const Header = ({ setFocus }) => {
    return (
        <div className='box'>
            <h1>
                Algorithms
            </h1>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Select An Algorithm
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => setFocus(1)}>BFS</MenuItem>
                    <MenuItem onClick={() => setFocus(2)}>DFS</MenuItem>
                    <MenuItem onClick={() => setFocus(3)}>Dijkstra</MenuItem>
                </MenuList>
            </Menu> 
        </div>
    )
}

export default Header
