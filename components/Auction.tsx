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