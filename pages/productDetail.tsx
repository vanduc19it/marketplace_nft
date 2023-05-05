import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button, Card, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import styles from '../styles/productdetail.module.scss'
import { BsCart4 } from "react-icons/bs";
import { AiOutlineEye } from 'react-icons/ai';
const productDetail = () => {
  return (
    <>
    <div style={{margin:"-30px -80px 0px", borderBottom:"1px solid #eee", paddingBottom:"10px"}} >
    <Navbar/>
    </div>
   
    <div className={styles.detail}>
        <div className={styles.left}>

            <Image src="/image/marscat1.png" alt="" style={{width:"600px", height:"600px"}}/>

        </div>
        <div className={styles.right}>
            <Text style={{fontSize:"34px", fontWeight:"700", marginTop:"10px"}}>Mars Cat 1</Text>
            <Text style={{ fontWeight:"500"}}>Owned by 0xf14... 9A88</Text>
            <div style={{margin:"30px 0px"}}>
            <Text style={{ fontWeight:"500", fontSize:"20px"}}>Current price</Text>
            <div style={{display:"flex"}}>
              <Image src="/eth1.png" alt="" style={{width:"40px"}}/>
              <Text style={{ fontWeight:"500", fontSize:"30px"}}>0.05 ETH</Text>
            </div>
            </div>
          
            
                <div style={{margin:"20px 0px 40px"}}>
                <Button style={{borderRadius:"10px", background:"#2081E2", width:"160px", color:"white"}}>
                        Buy Now
                    </Button>
                    <Button style={{borderRadius:"10px", background:"#000", width:"160px", color:"white", marginLeft:"20px"}}>
                        <BsCart4 style={{marginRight:"4px"}}/>
                        Add to Cart
                    </Button>
                </div>

                <Tabs>
                <TabList>
                    <Tab style={{ fontWeight:"500", fontSize:"18px"}}>Description</Tab>
                    <Tab style={{ fontWeight:"500", fontSize:"18px"}}>Reviews</Tab>
                    <Tab style={{ fontWeight:"500", fontSize:"18px"}}>Details</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                    <p style={{textAlign:"justify"}}>Mars Cat NFT is a unique and captivating type of NFT (Non-Fungible Token) designed around the space and mystical creatures theme. The Mars Cat NFT is specifically inspired by the image of a adventurous cat searching for an exciting journey on the Red Planet. This NFT captures the charm and spirit of exploration, and is perfect for collectors and enthusiasts who appreciate the beauty of art, space and feline companions. With its one-of-a-kind design, the Mars Cat NFT is sure to be a treasured addition to any collection.</p>
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
    <div style={{display:"flex", justifyContent:"space-between", alignItems:'center'}}>

    
  <div className={styles.heading}>Related Products
    </div>
    <div style={{marginRight:"26px"}}>
    <Button style={{background:"#3A9BFC", color:"white", marginTop:"20px"}}><AiOutlineEye style={{marginRight:"4px"}}/>View All</Button>
    </div>
    </div>
    <div className={styles.container}>
    <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
          <Image src="/image/marscat2.png" alt=""/>
          <div className={styles.card_body}>
            <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>Mars Cat 2</Text>
            <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
            
          </div>
          <hr style={{borderColor:"#eee"}}/>
          <div className={styles.price}>
            <Text style={{fontSize:"14px", color:"#909090", marginBottom:"4px"}}>Price</Text>
            <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>0.05 ETH</Text>
          </div>
            
        </Card>
        <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
          <Image src="/image/marscat3.png" alt=""/>
          <div className={styles.card_body}>
            <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>Mars Cat 3</Text>
            <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
            
          </div>
          <hr style={{borderColor:"#eee"}}/>
          <div className={styles.price}>
            <Text style={{fontSize:"14px", color:"#909090", marginBottom:"4px"}}>Price</Text>
            <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>0.05 ETH</Text>
          </div>
            
        </Card>
        <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
          <Image src="/image/marscat4.avif" alt=""/>
          <div className={styles.card_body}>
            <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>Mars Cat 4</Text>
            <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
            
          </div>
          <hr style={{borderColor:"#eee"}}/>
          <div className={styles.price}>
            <Text style={{fontSize:"14px", color:"#909090", marginBottom:"4px"}}>Price</Text>
            <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>0.05 ETH</Text>
          </div>
            
        </Card>
        <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
          <Image src="/image/marscat5.avif" alt=""/>
          <div className={styles.card_body}>
            <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>Mars Cat 5</Text>
            <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
            
          </div>
          <hr style={{borderColor:"#eee"}}/>
          <div className={styles.price}>
            <Text style={{fontSize:"14px", color:"#909090", marginBottom:"4px"}}>Price</Text>
            <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>0.05 ETH</Text>
          </div>
            
        </Card>
       
      
      
    </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default productDetail