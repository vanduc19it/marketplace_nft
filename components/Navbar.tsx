import { Box, Button, Icon, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ScaleFade, Text, border, useDisclosure } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";
import { BiUserCircle,BiPencil } from "react-icons/bi";
import { MdWallet } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import { BiCategoryAlt } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import styles from '../styles/navbar.module.scss'
import {ethers} from 'ethers'
declare var window: any;
const Navbar = () => {


    const [provider, setProvider] = useState(null);
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState(0);

    const handleConnectWallet = async () => {
        if(typeof window !== "undefined") {
        try {
             //init provider
        const provider:any = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", []);
        const signer:any = provider.getSigner();
        //get address and balance
        const address:any = await signer.getAddress();
        const bigBalance:any = await signer.getBalance();
        const balance:any = Number.parseFloat(ethers.utils.formatEther(bigBalance))
        setAddress(address); //set address to state wallet
        setBalance(balance); //set balance to state wallet
        setProvider(provider);
    
            
        } catch (error) {
         console.log(error)   
        }
        
       
            
        
      }
      onClose();
    }
    console.log(provider)
    console.log(address, balance)
    
    const {isOpen,  onOpen, onClose ,onToggle} = useDisclosure()
  return (
    <>
    
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader style={{fontWeight:"700"}}>Choose Your Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
                <div className={styles.connect} onClick={handleConnectWallet}>
                    <div className={styles.wallet}>
                    <Image src="/metamask.svg" alt="" style={{width:"50px", height:"50px"}}/>
                    <Text style={{fontWeight:"700", marginLeft:"20px"}}>Metamask</Text>
                    </div>
                    <div>
                        <Button style={{borderRadius:"15px"}} colorScheme='linkedin'>Popular</Button>
                    </div>
                </div>
                <div  className={styles.connect}>
                    <div className={styles.wallet}>
                    <Image src="/coinbase.png" alt="" style={{width:"50px", height:"50px"}}/>
                    <Text style={{fontWeight:"700", marginLeft:"20px"}}>Coinbase Wallet</Text>
                    </div>
                    <div>
                        <Button style={{borderRadius:"15px"}} colorScheme='linkedin'>Popular</Button>
                    </div>
                </div>
                <div  className={styles.connect}>
                    <div className={styles.wallet}>
                    <Image src="/phantom.svg" alt="" style={{width:"50px", height:"50px"}}/>
                    <Text style={{fontWeight:"700", marginLeft:"20px"}}>Phantom</Text>
                    </div>
                    <div>
                        <Button style={{borderRadius:"15px"}}>Solana</Button>
                    </div>
                </div>
                <div  className={styles.connect}>
                    <div className={styles.wallet}>
                    <Image src="/bitkeep.png" alt="" />
                    <Text style={{fontWeight:"700", marginLeft:"20px"}}>Bitkeep</Text>
                    </div>
                    <div>
                        <Button style={{borderRadius:"15px"}}>BNB Chain</Button>
                    </div>
                </div>
                <div  className={styles.connect}>
                    <div className={styles.wallet}>
                    <Image src="/core.png" alt="" />
                    <Text style={{fontWeight:"700", marginLeft:"20px"}}>Core</Text>
                    </div>
                    <div>
                        <Button style={{borderRadius:"15px"}}>Avalanche</Button>
                    </div>
                </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    <div className={styles.navbar}>
        <div className={styles.logo}>
        <Link href="/" style={{display:"flex", alignItems:"center"}}>
        <Image src="/logo.svg" alt="" style={{width:"40px", marginRight:"10px"}}/>
        <Text style={{fontWeight:"600", fontSize:"18px"}}>Marketplace</Text>
        </Link>
      
        </div>
        <div className={styles.menu}>
                        <Link style={{fontWeight:"600", fontSize:"18px"}} href="/">Category</Link>
                    
                        
                    <div>
                    <Link  style={{fontWeight:"600", fontSize:"18px"}} href="/">Ranking</Link>
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
            <Input variant="filled" placeholder="Search items, collections and accounts" />
            <InputLeftElement pointerEvents="none" children={<Icon as={IoIosSearch} />} />
            </InputGroup>
        </div>
        <div className={styles.button}>

        
        <div>
            <Button style={{borderRadius:"10px 0 0 10px", borderRight:"0.1px solid #ccc",}} onClick={onOpen}>
                {
                    provider ? (
                        <>
                        <Image src="/ETH1.png" alt="" style={{width:"20px", marginRight:"5px"}}/> <Text>{balance.toFixed(2)} ETH</Text></>
                        
                    ) : (<>
                    <MdWallet style={{marginRight:"5px"}} size={24}/>Connect Wallet
                    </>)
                }

            </Button>
                <Menu>
                    <MenuButton as={Button} style={{borderRadius:"0 10px 10px 0"}}>
                        {
                        address.length > 0  ? <Image src="/1.jfif" alt="" style={{width:"22px", height:"22px", borderRadius:"50%"}}/> :  <BiUserCircle size={25}/>
                        } 
                    </MenuButton>
                    <MenuList >
                    <Link href="/profile">
                        <MenuItem style={{fontWeight:"700"}}><HiOutlineUser style={{marginRight:"4px"}} size={18}/>Profile</MenuItem>
                    </Link>
                    <Link href="/">
                        <MenuItem style={{fontWeight:"700"}}><BiCategoryAlt style={{marginRight:"4px"}} size={18}/>My Collections</MenuItem>
                    </Link>
                    <Link href="/createNewNFT">
                        <MenuItem style={{fontWeight:"700"}}><BiPencil style={{marginRight:"4px"}} size={18}/>Create</MenuItem>
                    </Link>
                    <Link href="/">
                        <MenuItem style={{fontWeight:"700"}}><FiLogOut style={{marginRight:"4px"}} size={18}/>Log Out</MenuItem>
                    </Link>
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