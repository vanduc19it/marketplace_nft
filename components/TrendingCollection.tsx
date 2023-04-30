import { Button, Card, Image, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../styles/trendingcollection.module.scss"
import Carousel from "react-elastic-carousel";
const TrendingCollection = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
      ];
  return (
    <>
    <div className={styles.heading}>Trending Collection</div>
    <div className={styles.carousel}>
    <Carousel breakPoints={breakPoints} itemPadding={[10, 10]}  disableArrowsOnEnd={false}>
    <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"20px"}}>
        <div className={styles.card_container}>
        <Image src="/image/2.jpg" alt="" style={{width:"155px", height:"105px",}}/>
        <Image src="/image/2.jpg" alt="" style={{width:"155px", height:"105px",}}/>
        <Image src="/image/2.jpg" alt="" style={{width:"155px", height:"105px",overflow:"hidden"}}/>
        <Image src="/image/2.jpg" alt="" style={{width:"155px", height:"105px",overflow:"clip"}}/>
     
      
        </div>
        <div>
            <div style={{width:"58px", height:"58px", position:"absolute",marginLeft:"35%", marginTop:"-25px", background:"#fff", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Image src="/image/2.jpg" alt="" style={{width:"50px", height:"50px",borderRadius:"50%" }}/>
            </div>
      
       <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"30px 10px 0px 10px"}}>
       <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}> Doge</Text>
       <Button>7 items</Button>
       </div>
       </div>
           
    </Card>
    <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"20px"}}>
        <div className={styles.card_container}>
        <Image src="/image/2.jpg" alt="" style={{width:"155px", height:"105px",}}/>
        <Image src="/image/2.jpg" alt="" style={{width:"155px", height:"105px",}}/>
        <Image src="/image/2.jpg" alt="" style={{width:"155px", height:"105px",overflow:"hidden"}}/>
        <Image src="/image/2.jpg" alt="" style={{width:"155px", height:"105px",overflow:"clip"}}/>
     
      
        </div>
        <div>
            <div style={{width:"58px", height:"58px", position:"absolute",marginLeft:"35%", marginTop:"-25px", background:"#fff", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Image src="/image/2.jpg" alt="" style={{width:"50px", height:"50px",borderRadius:"50%" }}/>
            </div>
      
       <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"30px 10px 0px 10px"}}>
       <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}> Doge</Text>
       <Button>7 items</Button>
       </div>
       </div>
           
    </Card>
    <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"20px"}}>
        <div className={styles.card_container}>
        <Image src="/image/2.jpg" alt="" style={{width:"155px", height:"105px",}}/>
        <Image src="/image/2.jpg" alt="" style={{width:"155px", height:"105px",}}/>
        <Image src="/image/2.jpg" alt="" style={{width:"155px", height:"105px",overflow:"hidden"}}/>
        <Image src="/image/2.jpg" alt="" style={{width:"155px", height:"105px",overflow:"clip"}}/>
     
      
        </div>
        <div>
            <div style={{width:"58px", height:"58px", position:"absolute",marginLeft:"35%", marginTop:"-25px", background:"#fff", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Image src="/image/2.jpg" alt="" style={{width:"50px", height:"50px",borderRadius:"50%" }}/>
            </div>
      
       <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"30px 10px 0px 10px"}}>
       <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}> Doge</Text>
       <Button>7 items</Button>
       </div>
       </div>
           
    </Card>
    <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"20px"}}>
        <div className={styles.card_container}>
        <Image src="/image/2.jpg" alt="" style={{width:"155px", height:"105px",}}/>
        <Image src="/image/2.jpg" alt="" style={{width:"155px", height:"105px",}}/>
        <Image src="/image/2.jpg" alt="" style={{width:"155px", height:"105px",overflow:"hidden"}}/>
        <Image src="/image/2.jpg" alt="" style={{width:"155px", height:"105px",overflow:"clip"}}/>
     
      
        </div>
        <div>
            <div style={{width:"58px", height:"58px", position:"absolute",marginLeft:"35%", marginTop:"-25px", background:"#fff", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Image src="/image/2.jpg" alt="" style={{width:"50px", height:"50px",borderRadius:"50%" }}/>
            </div>
      
       <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"30px 10px 0px 10px"}}>
       <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}> Doge</Text>
       <Button>7 items</Button>
       </div>
       </div>
           
    </Card>
    <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"20px"}}>
        <div className={styles.card_container}>
        <Image src="/image/2.jpg" alt="" style={{width:"155px", height:"105px",}}/>
        <Image src="/image/2.jpg" alt="" style={{width:"155px", height:"105px",}}/>
        <Image src="/image/2.jpg" alt="" style={{width:"155px", height:"105px",overflow:"hidden"}}/>
        <Image src="/image/2.jpg" alt="" style={{width:"155px", height:"105px",overflow:"clip"}}/>
     
      
        </div>
        <div>
            <div style={{width:"58px", height:"58px", position:"absolute",marginLeft:"35%", marginTop:"-25px", background:"#fff", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Image src="/image/2.jpg" alt="" style={{width:"50px", height:"50px",borderRadius:"50%" }}/>
            </div>
      
       <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"30px 10px 0px 10px"}}>
       <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}> Doge</Text>
       <Button>7 items</Button>
       </div>
       </div>
           
    </Card>
         
           </Carousel>
    </div>
   
    </>
    
           
  )
}

export default TrendingCollection