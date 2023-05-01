import { Box, Button, Icon, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ScaleFade, Text, border, useDisclosure } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { MdWallet } from "react-icons/md";
import styles from '../styles/navbar.module.scss'
import {ethers} from 'ethers'
declare var window: any;
const Navbar = () => {


    const [provider, setProvider] = useState(null);
    const [address, setAddress] = useState(null);
    const [balance, setBalance] = useState(0);

    const handleWeb3 = async () => {
        if(typeof window !== "undefined") {
    
        
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
    
            
        
      }
    }
    console.log(provider)
    console.log(address, balance)
    
    const {isOpen,  onOpen, onClose ,onToggle} = useDisclosure()
  return (
    <>
    
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader style={{fontWeight:"700"}}>Choose Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
                <div className={styles.connect}>
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
            <Button style={{borderRadius:"10px 0 0 10px", borderRight:"0.1px solid #ccc",}} onClick={handleWeb3}>
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