import { Card, Image, Text } from '@chakra-ui/react';
import React from 'react'
import styles from "../styles/auction.module.scss"
import Carousel from "react-elastic-carousel";

const Auction = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 5 }
      ];

    
  return (
    <>
     <div className={styles.heading}>Live Auctions</div>
     <div>
     <Carousel breakPoints={breakPoints} itemPadding={[10, 15]} showArrows={false}>
     <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"20px"}}>
          <Image src="/image/doodle11.png" alt="" style={{borderRadius:"20px"}}/>
           <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px", marginTop:"15px"}}>Doodle 1</Text>
          <div className={styles.card_body}>
            <div>
                <Text style={{fontWeight:"600", color:"#000", fontSize:"14px"}}>Highest bid</Text>
                <Text style={{fontWeight:"600", color:"#484848", fontSize:"13px"}}>0.05 ETH</Text>
            </div>
            <div>
            <Text style={{fontWeight:"600", color:"#000",  fontSize:"14px"}}>Ends in</Text>
            <Text style={{fontWeight:"600", color:"#484848", fontSize:"13px"}}>13:30:10:47</Text>
            </div>
         
            
          </div>
          <hr style={{borderColor:"#eee"}}/>
          <div className={styles.price}>
            <div className={styles.info}>
            <Image src="/image/avata2.avif" alt="" width={8} style={{borderRadius:"50%", marginRight:"6px"}}/>
            <div>
                <Text style={{fontSize:"14px", color:"#000", fontWeight:"600"}}>Creator</Text>
                <Text style={{fontSize:"13px", color:"#222", fontWeight:"600"}}>0xf14...</Text>
            </div>
            </div>
         
            <div className={styles.info}>
            <Image src="/image/avata2.avif" alt="" width={8} style={{borderRadius:"50%", marginRight:"6px"}}/>
            <div>
                <Text style={{fontSize:"14px", color:"#000", fontWeight:"600"}}>Owner</Text>
                <Text style={{fontSize:"13px", color:"#222", fontWeight:"600"}}>0xf14...</Text>
            </div>
           
            </div>
          </div>
            
        </Card>
        <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"20px"}}>
          <Image src="/image/6.jpg" alt="" style={{borderRadius:"20px"}}/>
           <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px", marginTop:"15px"}}>Monkey 3</Text>
          <div className={styles.card_body}>
            <div>
                <Text style={{fontWeight:"600", color:"#000", fontSize:"14px"}}>Highest bid</Text>
                <Text style={{fontWeight:"600", color:"#484848", fontSize:"13px"}}>0.02 ETH</Text>
            </div>
            <div>
            <Text style={{fontWeight:"600", color:"#000",  fontSize:"14px"}}>Ends in</Text>
            <Text style={{fontWeight:"600", color:"#484848", fontSize:"13px"}}>07:40:12:10</Text>
            </div>
         
            
          </div>
          <hr style={{borderColor:"#eee"}}/>
          <div className={styles.price}>
            <div className={styles.info}>
            <Image src="/image/avata2.avif" alt="" width={8} style={{borderRadius:"50%", marginRight:"6px"}}/>
            <div>
                <Text style={{fontSize:"14px", color:"#000", fontWeight:"600"}}>Creator</Text>
                <Text style={{fontSize:"13px", color:"#222", fontWeight:"600"}}>0xf14...</Text>
            </div>
            </div>
         
            <div className={styles.info}>
            <Image src="/image/avata2.avif" alt="" width={8} style={{borderRadius:"50%", marginRight:"6px"}}/>
            <div>
                <Text style={{fontSize:"14px", color:"#000", fontWeight:"600"}}>Owner</Text>
                <Text style={{fontSize:"13px", color:"#222", fontWeight:"600"}}>0xf14...</Text>
            </div>
           
            </div>
          </div>
            
        </Card>
        <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"20px"}}>
          <Image src="/image/3.jpg" alt="" style={{borderRadius:"20px"}}/>
           <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px", marginTop:"15px"}}>Micraft1</Text>
          <div className={styles.card_body}>
            <div>
                <Text style={{fontWeight:"600", color:"#000", fontSize:"14px"}}>Highest bid</Text>
                <Text style={{fontWeight:"600", color:"#484848", fontSize:"13px"}}>0.01 ETH</Text>
            </div>
            <div>
            <Text style={{fontWeight:"600", color:"#000",  fontSize:"14px"}}>Ends in</Text>
            <Text style={{fontWeight:"600", color:"#484848", fontSize:"13px"}}>05:18:20:38</Text>
            </div>
         
            
          </div>
          <hr style={{borderColor:"#eee"}}/>
          <div className={styles.price}>
            <div className={styles.info}>
            <Image src="/image/avata2.avif" alt="" width={8} style={{borderRadius:"50%", marginRight:"6px"}}/>
            <div>
                <Text style={{fontSize:"14px", color:"#000", fontWeight:"600"}}>Creator</Text>
                <Text style={{fontSize:"13px", color:"#222", fontWeight:"600"}}>0xf14...</Text>
            </div>
            </div>
         
            <div className={styles.info}>
            <Image src="/image/avata2.avif" alt="" width={8} style={{borderRadius:"50%", marginRight:"6px"}}/>
            <div>
                <Text style={{fontSize:"14px", color:"#000", fontWeight:"600"}}>Owner</Text>
                <Text style={{fontSize:"13px", color:"#222", fontWeight:"600"}}>0xf14...</Text>
            </div>
           
            </div>
          </div>
            
        </Card>
        <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"20px"}}>
          <Image src="/image/phanta1.png" alt="" style={{borderRadius:"20px"}}/>
           <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px", marginTop:"15px"}}> Phanta Bear</Text>
          <div className={styles.card_body}>
            <div>
                <Text style={{fontWeight:"600", color:"#000", fontSize:"14px"}}>Highest bid</Text>
                <Text style={{fontWeight:"600", color:"#484848", fontSize:"13px"}}>0.04 ETH</Text>
            </div>
            <div>
            <Text style={{fontWeight:"600", color:"#000",  fontSize:"14px"}}>Ends in</Text>
            <Text style={{fontWeight:"600", color:"#484848", fontSize:"13px"}}>03:10:26:17</Text>
            </div>
         
            
          </div>
          <hr style={{borderColor:"#eee"}}/>
          <div className={styles.price}>
            <div className={styles.info}>
            <Image src="/image/avata2.avif" alt="" width={8} style={{borderRadius:"50%", marginRight:"6px"}}/>
            <div>
                <Text style={{fontSize:"14px", color:"#000", fontWeight:"600"}}>Creator</Text>
                <Text style={{fontSize:"13px", color:"#222", fontWeight:"600"}}>0xf14...</Text>
            </div>
            </div>
         
            <div className={styles.info}>
            <Image src="/image/avata2.avif" alt="" width={8} style={{borderRadius:"50%", marginRight:"6px"}}/>
            <div>
                <Text style={{fontSize:"14px", color:"#000", fontWeight:"600"}}>Owner</Text>
                <Text style={{fontSize:"13px", color:"#222", fontWeight:"600"}}>0xf14...</Text>
            </div>
           
            </div>
          </div>
            
        </Card>
        <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"20px"}}>
          <Image src="/image/coolcat.png" alt="" style={{borderRadius:"20px"}}/>
           <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px", marginTop:"15px"}}>Cool Cat 3D</Text>
          <div className={styles.card_body}>
            <div>
                <Text style={{fontWeight:"600", color:"#000", fontSize:"14px"}}>Highest bid</Text>
                <Text style={{fontWeight:"600", color:"#484848", fontSize:"13px"}}>0.03 ETH</Text>
            </div>
            <div>
            <Text style={{fontWeight:"600", color:"#000",  fontSize:"14px"}}>Ends in</Text>
            <Text style={{fontWeight:"600", color:"#484848", fontSize:"13px"}}>09:23:16:34</Text>
            </div>
         
            
          </div>
          <hr style={{borderColor:"#eee"}}/>
          <div className={styles.price}>
            <div className={styles.info}>
            <Image src="/image/avata2.avif" alt="" width={8} style={{borderRadius:"50%", marginRight:"6px"}}/>
            <div>
                <Text style={{fontSize:"14px", color:"#000", fontWeight:"600"}}>Creator</Text>
                <Text style={{fontSize:"13px", color:"#222", fontWeight:"600"}}>0xf14...</Text>
            </div>
            </div>
         
            <div className={styles.info}>
            <Image src="/image/avata2.avif" alt="" width={8} style={{borderRadius:"50%", marginRight:"6px"}}/>
            <div>
                <Text style={{fontSize:"14px", color:"#000", fontWeight:"600"}}>Owner</Text>
                <Text style={{fontSize:"13px", color:"#222", fontWeight:"600"}}>0xf14...</Text>
            </div>
           
            </div>
          </div>
            
        </Card>
        <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"20px"}}>
          <Image src="/image/2.jpg" alt="" style={{borderRadius:"20px"}}/>
           <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px", marginTop:"15px"}}> Pomeranian Doge</Text>
          <div className={styles.card_body}>
            <div>
                <Text style={{fontWeight:"600", color:"#484848", fontSize:"14px"}}>Highest bid</Text>
                <Text style={{fontWeight:"600", color:"#484848", fontSize:"14px"}}>Ends in</Text>
            </div>
            <div>
            <Text style={{fontWeight:"600", color:"#484848",  fontSize:"14px"}}>Highest bid</Text>
            <Text style={{fontWeight:"600", color:"#484848", fontSize:"14px"}}>Ends in</Text>
            </div>
         
            
          </div>
          <hr style={{borderColor:"#eee"}}/>
          <div className={styles.price}>
            <div className={styles.info}>
            <Image src="/image/2.jpg" alt="" width={8} style={{borderRadius:"50%", marginRight:"6px"}}/>
            <div>
                <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>£6.00</Text>
                <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>£6.00</Text>
            </div>
            </div>
         
            <div className={styles.info}>
            <Image src="/image/2.jpg" alt="" width={8} style={{borderRadius:"50%", marginRight:"6px"}}/>
            <div>
                <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>£6.00</Text>
                <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>£6.00</Text>
            </div>
           
            </div>
          </div>
            
        </Card>
        <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"20px"}}>
          <Image src="/image/2.jpg" alt="" style={{borderRadius:"20px"}}/>
           <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px", marginTop:"15px"}}> Pomeranian Doge</Text>
          <div className={styles.card_body}>
            <div>
                <Text style={{fontWeight:"600", color:"#484848", fontSize:"14px"}}>Highest bid</Text>
                <Text style={{fontWeight:"600", color:"#484848", fontSize:"14px"}}>Ends in</Text>
            </div>
            <div>
            <Text style={{fontWeight:"600", color:"#484848",  fontSize:"14px"}}>Highest bid</Text>
            <Text style={{fontWeight:"600", color:"#484848", fontSize:"14px"}}>Ends in</Text>
            </div>
         
            
          </div>
          <hr style={{borderColor:"#eee"}}/>
          <div className={styles.price}>
            <div className={styles.info}>
            <Image src="/image/2.jpg" alt="" width={8} style={{borderRadius:"50%", marginRight:"6px"}}/>
            <div>
                <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>£6.00</Text>
                <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>£6.00</Text>
            </div>
            </div>
         
            <div className={styles.info}>
            <Image src="/image/2.jpg" alt="" width={8} style={{borderRadius:"50%", marginRight:"6px"}}/>
            <div>
                <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>£6.00</Text>
                <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>£6.00</Text>
            </div>
           
            </div>
          </div>
            
        </Card>
          
            </Carousel>
     </div>
            
    </>
   
  )
}

export default Auction