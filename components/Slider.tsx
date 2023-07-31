import { Button, Card,Image, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../styles/slider.module.scss"
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Slider1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
    <div style={{width:"50vw"}} >
        <Text className={styles.heading}>Discover the unique digital art of NFT</Text>
        <Text>Digital marketplace for crypto collectibles and non-fungible tokens.</Text>
        <Text>Buy, sell, and discover exclusive digital assets.</Text>
        <div>
            <Button className={styles.btn} style={{background:"white", width:"150px"}}>Explore</Button>
            <Link href='/createNewNFT'>
            <Button className={styles.btn} style={{background:"#3a9bfc", width:"150px", color:"white"}} >Create</Button>
            </Link>
            
        </div>
    </div>
    <div style={{width:"30vw"}}>
    
    <Slider {...settings}>
      <div>
      <Card className={styles.card} style={{ borderRadius:"20px", width:"30vw"}}>
          <Image src="/image/slider1.avif" alt="" style={{borderRadius:"20px", width:"430px"}}/>
          <div className={styles.text}>
          <Text style={{fontWeight:"600", color:"white", fontSize:"16px"}}>InfiniGods - The Elder Gods</Text>
          <Text style={{fontWeight:"600", color:"white", fontSize:"14px"}}>Floor: 0.07 ETH</Text>
          </div>
        </Card>
       
      </div>
      <div>
      <Card className={styles.card} style={{ borderRadius:"20px", width:"30vw"}}>
          <Image src="/image/slider6.avif" alt="" style={{borderRadius:"20px", width:"430px"}}/>
          <div className={styles.text}>
          <Text style={{fontWeight:"600", color:"white", fontSize:"16px"}}>The Sad Cats</Text>
          <Text style={{fontWeight:"600", color:"white", fontSize:"14px"}}>Floor: 0.04 ETH</Text>
          </div>
         
        </Card>
       
      </div>

      <div>
      <Card className={styles.card} style={{ borderRadius:"20px", width:"30vw"}}>
          <Image src="/image/slider4.webp" alt="" style={{borderRadius:"20px", width:"430px"}}/>
          <div className={styles.text}>
          <Text style={{fontWeight:"600", color:"white", fontSize:"16px"}}>The HUGG Pass</Text>
          <Text style={{fontWeight:"600", color:"white", fontSize:"14px"}}>Floor: 0.8 ETH</Text>
          </div>
         
        </Card>
      </div>
    
    <div>
    <Card className={styles.card} style={{ borderRadius:"20px", width:"30vw"}}>
          <Image src="/image/slider3.avif" alt="" style={{borderRadius:"20px", width:"430px"}}/>
          <div className={styles.text}>
          <Text style={{fontWeight:"600", color:"white", fontSize:"16px"}}>Schmryptozoa</Text>
          <Text style={{fontWeight:"600", color:"white", fontSize:"14px"}}>Floor: 0.2 ETH</Text>
          </div>
          
         
        </Card>
       
    </div>
    <div>
    <Card className={styles.card} style={{ borderRadius:"20px", width:"30vw"}}>
          <Image src="/image/slider4.avif" alt="" style={{borderRadius:"20px", width:"430px"}}/>
          <div className={styles.text}>
          <Text style={{fontWeight:"600", color:"white", fontSize:"16px"}}>Genesis Box</Text>
          <Text style={{fontWeight:"600", color:"white", fontSize:"14px"}}>Floor: 0.01 ETH</Text>
          </div>
          
         
        </Card>
    </div>
       
        
      </Slider>
     </div>
    </div>
   
    
  )
}

export default Slider1