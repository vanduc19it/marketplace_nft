import { Card, Image, Text } from '@chakra-ui/react';
import React from 'react'
import styles from "../styles/auction.module.scss"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Auction = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    

    
  return (
    <>
     <div className={styles.heading}>Live Auctions</div>
     <div > 
     
     <Slider {...settings} >
      <div>
      <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"20px", margin:"10px"}}>
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
      </div>
     
     <div>
     <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"20px",margin:"10px"}}>
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
     </div>
       <div>
       <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"20px",margin:"10px"}}>
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
       </div>

       <div>
       <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"20px",margin:"10px"}}>
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
       </div>
        
      
      <div>
      <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"20px", margin:"10px"}}>
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
      </div>
        
        <div>
        <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"20px", margin:"10px"}}>
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
        </div>
      
        
     
          
   </Slider>
     </div>
            
    </>
   
  )
}

export default Auction