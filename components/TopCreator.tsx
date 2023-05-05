import { Button, Card, Image, Text } from '@chakra-ui/react'
import React from 'react'
import styles from '../styles/topcreator.module.scss'
import { Badge } from '@chakra-ui/react'
import { BsRocketTakeoff } from 'react-icons/bs'
const TopCreator = () => {
  return (
    <>
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <div className={styles.heading}>Top Creators</div>
    <div className={styles.heading}>
        <Button style={{background:"#3A9BFC", color:"white"}}><BsRocketTakeoff style={{marginRight:"4px"}}/>View Rankings</Button>
    </div>  
    </div>
    
    <div className={styles.container}>
        <Card  style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
        <div className={styles.card}>
        <Badge colorScheme='cyan' style={{width:"30px", height:"30px",display:"flex", borderRadius:"50%", marginRight:"15px"}}>
                <Text style={{margin:"auto"}}>1</Text>
            </Badge>
            <Image src="/image/creator1.png" alt="" style={{width:"60px", borderRadius:"50%", marginRight:"10px", position:"relative"}}/>
            <Image src="/vip.svg" alt="" style={{width:"20px", borderRadius:"50%", marginRight:"10px", position:"absolute", left:"106px", bottom:"22px"}}/>
            <div className={styles.card_body}>
                    <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>Keepitreal</Text>
                    <Text style={{fontSize:"13px", color:"#222", fontWeight:"600", display:"flex"}}><Image src="eth1.png" alt="" style={{width:"20px", marginLeft:"-4px"}}/>128.50 ETH</Text>
            
             </div>
        </div>
           
            
        </Card>
        <Card  style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
        <div className={styles.card}>
        <Badge colorScheme='cyan' style={{width:"30px", height:"30px",display:"flex", borderRadius:"50%", marginRight:"15px",}}>
                <Text style={{margin:"auto"}}>2</Text>
            </Badge>
            <Image src="/image/creator2.png" alt="" style={{width:"60px", borderRadius:"50%", marginRight:"10px", position:"relative"}}/>
            <Image src="/vip.svg" alt="" style={{width:"20px", borderRadius:"50%", marginRight:"10px", position:"absolute", left:"106px", bottom:"22px"}}/>
            <div className={styles.card_body}>
                    <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>Digilab</Text>
                    <Text style={{fontSize:"13px", color:"#222", fontWeight:"600", display:"flex"}}><Image src="eth1.png" alt="" style={{width:"20px", marginLeft:"-4px"}}/>119.75 ETH</Text>
            
             </div>
        </div>
           
            
        </Card>
        <Card  style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
        <div className={styles.card}>
        <Badge colorScheme='cyan' style={{width:"30px", height:"30px",display:"flex", borderRadius:"50%", marginRight:"15px"}}>
                <Text style={{margin:"auto"}}>3</Text>
            </Badge>
            <Image src="/image/creator3.png" alt="" style={{width:"60px", borderRadius:"50%", marginRight:"10px", position:"relative"}}/>
            <Image src="/vip.svg" alt="" style={{width:"20px", borderRadius:"50%", marginRight:"10px", position:"absolute", left:"106px", bottom:"22px"}}/>
            <div className={styles.card_body}>
                    <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>Gravityone</Text>
                    <Text style={{fontSize:"13px", color:"#222", fontWeight:"600", display:"flex"}}><Image src="eth1.png" alt="" style={{width:"20px", marginLeft:"-4px"}}/>112.20 ETH</Text>
            
             </div>
        </div>
           
            
        </Card>
        <Card  style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
        <div className={styles.card}>
        <Badge colorScheme='cyan' style={{width:"30px", height:"30px",display:"flex", borderRadius:"50%", marginRight:"15px"}}>
                <Text style={{margin:"auto"}}>4</Text>
            </Badge>
            <Image src="/image/creator4.png" alt="" style={{width:"60px", borderRadius:"50%", marginRight:"10px", position:"relative"}}/>
            <Image src="/vip.svg" alt="" style={{width:"20px", borderRadius:"50%", marginRight:"10px", position:"absolute", left:"106px", bottom:"22px"}}/>
            <div className={styles.card_body}>
                    <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>Juanie</Text>
                    <Text style={{fontSize:"13px", color:"#222", fontWeight:"600", display:"flex"}}><Image src="eth1.png" alt="" style={{width:"20px", marginLeft:"-4px"}}/>102.86 ETH</Text>
            
             </div>
        </div>
           
            
        </Card>
        <Card  style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
        <div className={styles.card}>
        <Badge colorScheme='cyan' style={{width:"30px", height:"30px",display:"flex", borderRadius:"50%", marginRight:"15px"}}>
                <Text style={{margin:"auto"}}>5</Text>
            </Badge>
            <Image src="/image/creator5.png" alt="" style={{width:"60px", borderRadius:"50%", marginRight:"10px", position:"relative"}}/>
            <Image src="/vip.svg" alt="" style={{width:"20px", borderRadius:"50%", marginRight:"10px", position:"absolute", left:"106px", bottom:"22px"}}/>
            <div className={styles.card_body}>
                    <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>Bluewhale</Text>
                    <Text style={{fontSize:"13px", color:"#222", fontWeight:"600", display:"flex"}}><Image src="eth1.png" alt="" style={{width:"20px", marginLeft:"-4px"}}/>98.59 ETH</Text>
            
             </div>
        </div>
           
            
        </Card>
        <Card  style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
        <div className={styles.card}>
        <Badge colorScheme='cyan' style={{width:"30px", height:"30px",display:"flex", borderRadius:"50%", marginRight:"15px"}}>
                <Text style={{margin:"auto"}}>6</Text>
            </Badge>
            <Image src="/image/creator6.png" alt="" style={{width:"60px", borderRadius:"50%", marginRight:"10px", position:"relative"}}/>
            <Image src="/vip.svg" alt="" style={{width:"20px", borderRadius:"50%", marginRight:"10px", position:"absolute", left:"106px", bottom:"22px"}}/>
            <div className={styles.card_body}>
                    <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>Mr Fox</Text>
                    <Text style={{fontSize:"13px", color:"#222", fontWeight:"600", display:"flex"}}><Image src="eth1.png" alt="" style={{width:"20px", marginLeft:"-4px"}}/>79.87 ETH</Text>
            
             </div>
        </div>
           
            
        </Card>
        <Card  style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
        <div className={styles.card}>
        <Badge colorScheme='cyan' style={{width:"30px", height:"30px",display:"flex", borderRadius:"50%", marginRight:"15px"}}>
                <Text style={{margin:"auto"}}>7</Text>
            </Badge>
            <Image src="/image/creator7.png" alt="" style={{width:"60px", borderRadius:"50%", marginRight:"10px", position:"relative"}}/>
            <Image src="/vip.svg" alt="" style={{width:"20px", borderRadius:"50%", marginRight:"10px", position:"absolute", left:"106px", bottom:"22px"}}/>
            <div className={styles.card_body}>
                    <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>Shroomie</Text>
                    <Text style={{fontSize:"13px", color:"#222", fontWeight:"600", display:"flex"}}><Image src="eth1.png" alt="" style={{width:"20px", marginLeft:"-4px"}}/>65.56 ETH</Text>
            
             </div>
        </div>
           
            
        </Card>
        <Card  style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
        <div className={styles.card}>
        <Badge colorScheme='cyan' style={{width:"30px", height:"30px",display:"flex", borderRadius:"50%", marginRight:"15px"}}>
                <Text style={{margin:"auto"}}>8</Text>
            </Badge>
            <Image src="/image/creator8.png" alt="" style={{width:"60px", borderRadius:"50%", marginRight:"10px", position:"relative"}}/>
            <Image src="/vip.svg" alt="" style={{width:"20px", borderRadius:"50%", marginRight:"10px", position:"absolute", left:"106px", bottom:"22px"}}/>
            <div className={styles.card_body}>
                    <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>Robotica</Text>
                    <Text style={{fontSize:"13px", color:"#222", fontWeight:"600", display:"flex"}}><Image src="eth1.png" alt="" style={{width:"20px", marginLeft:"-4px"}}/>59.65 ETH</Text>
            
             </div>
        </div>
           
            
        </Card>
        <Card  style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
        <div className={styles.card}>
        <Badge colorScheme='cyan' style={{width:"30px", height:"30px",display:"flex", borderRadius:"50%", marginRight:"15px"}}>
                <Text style={{margin:"auto"}}>9</Text>
            </Badge>
            <Image src="/image/creator9.png" alt="" style={{width:"60px", borderRadius:"50%", marginRight:"10px", position:"relative"}}/>
            <Image src="/vip.svg" alt="" style={{width:"20px", borderRadius:"50%", marginRight:"10px", position:"absolute", left:"106px", bottom:"22px"}}/>
            <div className={styles.card_body}>
                    <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>Rustyrobot</Text>
                    <Text style={{fontSize:"13px", color:"#222", fontWeight:"600", display:"flex"}}><Image src="eth1.png" alt="" style={{width:"20px", marginLeft:"-4px"}}/>42.75 ETH</Text>
            
             </div>
        </div>
           
            
        </Card>
        <Card  style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
        <div className={styles.card}>
        <Badge colorScheme='cyan' style={{width:"30px", height:"30px",display:"flex", borderRadius:"50%", marginRight:"15px"}}>
                <Text style={{margin:"auto"}}>10</Text>
            </Badge>
            <Image src="/image/creator10.png" alt="" style={{width:"60px", borderRadius:"50%", marginRight:"10px", position:"relative"}}/>
            <Image src="/vip.svg" alt="" style={{width:"20px", borderRadius:"50%", marginRight:"10px", position:"absolute", left:"106px", bottom:"22px"}}/>
            <div className={styles.card_body}>
                    <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>Animakid</Text>
                    <Text style={{fontSize:"13px", color:"#222", fontWeight:"600", display:"flex"}}><Image src="eth1.png" alt="" style={{width:"20px", marginLeft:"-4px"}}/>36.69 ETH</Text>
            
             </div>
        </div>
           
            
        </Card>
        <Card  style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
        <div className={styles.card}>
        <Badge colorScheme='cyan' style={{width:"30px", height:"30px",display:"flex", borderRadius:"50%", marginRight:"15px"}}>
                <Text style={{margin:"auto"}}>11</Text>
            </Badge>
            <Image src="/image/creator11.png" alt="" style={{width:"60px", borderRadius:"50%", marginRight:"10px", position:"relative"}}/>
            <Image src="/vip.svg" alt="" style={{width:"20px", borderRadius:"50%", marginRight:"10px", position:"absolute", left:"106px", bottom:"22px"}}/>
            <div className={styles.card_body}>
                    <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>Dotgu</Text>
                    <Text style={{fontSize:"13px", color:"#222", fontWeight:"600", display:"flex"}}><Image src="eth1.png" alt="" style={{width:"20px", marginLeft:"-4px"}}/>30.80 ETH</Text>
            
             </div>
        </div>
           
            
        </Card>
        <Card  style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
        <div className={styles.card}>
        <Badge colorScheme='cyan' style={{width:"30px", height:"30px",display:"flex", borderRadius:"50%", marginRight:"15px"}}>
                <Text style={{margin:"auto"}}>12</Text>
            </Badge>
            <Image src="/image/creator12.png" alt="" style={{width:"60px", borderRadius:"50%", marginRight:"10px", position:"relative"}}/>
            <Image src="/vip.svg" alt="" style={{width:"20px", borderRadius:"50%", marginRight:"10px", position:"absolute", left:"106px", bottom:"22px"}}/>
            <div className={styles.card_body}>
                    <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>Ghiblier</Text>
                    <Text style={{fontSize:"13px", color:"#222", fontWeight:"600", display:"flex"}}><Image src="eth1.png" alt="" style={{width:"20px", marginLeft:"-4px"}}/>28.53 ETH</Text>
            
             </div>
        </div>
           
            
        </Card>
    </div>
    </>

  )
}

export default TopCreator