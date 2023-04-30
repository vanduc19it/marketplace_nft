import React from 'react'
import {Poppins} from 'next/font/google'
import styles from '../styles/marketplace.module.scss'
import { Card, Image, Text } from '@chakra-ui/react'
import logo from "../assets/NFT/2.jpg"
import { FiHeart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
const Marketplace = () => {
  return (
    <>
    <div className={styles.heading}>Explore NFTs
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
    </>
    
  )
}

export default Marketplace