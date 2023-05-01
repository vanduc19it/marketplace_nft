import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button, Card, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import styles from '../styles/productdetail.module.scss'

const productDetail = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.detail}>
        <div className={styles.left}>
            <Image src="/image/2.jpg" alt="" style={{width:"100px", height:"100px"}}/>

        </div>
        <div className={styles.right}>
            <Text>Imaginary Ones #3199</Text>
            <Text>Owned by ilmeaalim</Text>
            <Text>Current price</Text>
            <Text>1.05 ETH$1,938.71</Text>
                    <div>
                <Button style={{borderRadius:"10px 0 0 10px", borderRight:"0.1px solid #ccc",}}>
                        Connect Wallet
                    </Button>
                    <Button style={{borderRadius:"10px 0 0 10px", borderRight:"0.1px solid #ccc",}}>
                        Connect Wallet
                    </Button>
                    <Button style={{borderRadius:"10px 0 0 10px", borderRight:"0.1px solid #ccc",}}>
                        Connect Wallet
                    </Button>
                </div>

                                <Tabs>
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                    <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>three!</p>
                    </TabPanel>
                </TabPanels>
                </Tabs>
        </div>
       
    </div>
    <div className=''>
  <div className={styles.heading}>Related Products
    </div>
    <div className={styles.container}>
    <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
          <Image src="/image/2.jpg" alt=""/>
          <div className={styles.card_body}>
            <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}> Pomeranian Doge</Text>
            <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
            
          </div>
          <hr style={{borderColor:"#eee"}}/>
          <div className={styles.price}>
            <Text style={{fontSize:"14px", color:"#909090", marginBottom:"4px"}}>Reserve Price</Text>
            <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>£6.00</Text>
          </div>
            
        </Card>
        <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
          <Image src="/image/2.jpg" alt=""/>
          <div className={styles.card_body}>
            <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}> Pomeranian Doge</Text>
            <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
            
          </div>
          <hr style={{borderColor:"#eee"}}/>
          <div className={styles.price}>
            <Text style={{fontSize:"14px", color:"#909090", marginBottom:"4px"}}>Reserve Price</Text>
            <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>£6.00</Text>
          </div>
            
        </Card>
        <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
          <Image src="/image/2.jpg" alt=""/>
          <div className={styles.card_body}>
            <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}> Pomeranian Doge</Text>
            <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
            
          </div>
          <hr style={{borderColor:"#eee"}}/>
          <div className={styles.price}>
            <Text style={{fontSize:"14px", color:"#909090", marginBottom:"4px"}}>Reserve Price</Text>
            <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>£6.00</Text>
          </div>
            
        </Card>
        <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
          <Image src="/image/2.jpg" alt=""/>
          <div className={styles.card_body}>
            <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}> Pomeranian Doge</Text>
            <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
            
          </div>
          <hr style={{borderColor:"#eee"}}/>
          <div className={styles.price}>
            <Text style={{fontSize:"14px", color:"#909090", marginBottom:"4px"}}>Reserve Price</Text>
            <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>£6.00</Text>
          </div>
            
        </Card>
       
      
      
    </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default productDetail