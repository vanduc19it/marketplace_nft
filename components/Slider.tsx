import { Button, Card, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../styles/slider.module.scss"
import Carousel from "react-elastic-carousel";
const Slider = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, },
        { width: 768, itemsToShow: 1 },
        { width: 1200, itemsToShow: 10 }
      ];
  return (
    <div className={styles.container}>
    <div style={{width:"50vw"}} >
        <Text className={styles.heading}>Discover the unique digital art of NFT</Text>
        <Text>Digital marketplace for crypto collectibles and non-fungible tokens.</Text>
        <Text>Buy, sell, and discover exclusive digital assets.</Text>
        <div>
            <Button className={styles.btn}>Explore</Button>
            <Button className={styles.btn}>Create</Button>
        </div>
    </div>
    <div style={{width:"30vw"}}>
    {/* enableAutoPlay={true} autoPlaySpeed={4000} */}
     <Carousel breakPoints={breakPoints} itemPadding={[10, 10]} showArrows={false} >
     <Card className={styles.card} style={{ borderRadius:"20px", width:"30vw"}}>
          <Image src="/image/2.jpg" alt="" style={{borderRadius:"20px"}}/>
         
        </Card>
        <Card className={styles.card} style={{ borderRadius:"20px", width:"30vw"}}>
          <Image src="/image/2.jpg" alt="" style={{borderRadius:"20px"}}/>
       
         
        </Card>
        <Card className={styles.card} style={{ borderRadius:"20px", width:"30vw"}}>
          <Image src="/image/2.jpg" alt="" style={{borderRadius:"20px"}}/>
          
         
          
         
        </Card>
        <Card className={styles.card} style={{ borderRadius:"20px", width:"30vw"}}>
          <Image src="/image/2.jpg" alt="" style={{borderRadius:"20px"}}/>
        
          
         
        </Card>
            </Carousel>
     </div>
    </div>
   
    
  )
}

export default Slider