import { Box, Button, Icon, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, ScaleFade, Text, border, useDisclosure } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import styles from '../styles/navbar.module.scss'
const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure()
    const style = {

    }
  return (
    <>
    <div className={styles.navbar}>
        <div className={styles.logo}>
        <Image src="/logo.svg" alt="" style={{width:"40px", marginRight:"10px"}}/>
        <Link style={{fontWeight:"600", fontSize:"18px"}} href="/">Marketplace</Link>
        </div>
        <div className={styles.menu}>
                        <Link style={{fontWeight:"600", fontSize:"18px"}} href="/">Category</Link>
                    
                        
                    <div>
                    <Link  style={{fontWeight:"600", fontSize:"18px"}} onClick={onToggle} href="/">Ranking</Link>
                <ScaleFade initialScale={0.9} in={isOpen} style={{position:"absolute"}}>
                    <Box
                    p='40px'
                    color='white'
                    mt='4'
                    bg='teal.500'
                    rounded='md'
                    shadow='md'
                    >
                    Fade
                    </Box>
                </ScaleFade>
                    </div>
        </div>
       
        <div className={styles.search}>
            <InputGroup>
            <Input variant="filled" placeholder="Search..."/>
            <InputLeftElement pointerEvents="none" children={<Icon as={IoIosSearch} />} />
            </InputGroup>
        </div>
        <div className={styles.button}>

        
        <div>
            <Button style={{borderRadius:"10px 0 0 10px", borderRight:"0.1px solid #ccc",}}>
                Connect Wallet
            </Button>
                            <Menu>
                <MenuButton as={Button} style={{borderRadius:"0 10px 10px 0",}}>
                    <BiUserCircle size={25}/>
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
                </Menu>
        </div>
        <div>
            <Button style={{borderRadius:"10px", marginLeft:"10px", }}>
                <BsCart4 size={25}/>
            </Button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Navbar