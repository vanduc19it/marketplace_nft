import React, { useEffect, useState } from 'react'
import {Poppins} from 'next/font/google'
import styles from '../styles/marketplace.module.scss'
import { Button, Card, Image, Text } from '@chakra-ui/react'
import logo from "../assets/NFT/2.jpg"
import { FiHeart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import {ethers} from 'ethers'
import { BsCart4 } from "react-icons/bs";

import MarketplaceAbi from '../pages/datasmc/abi/marketplaceAbi.json';
import MarketplaceAddress from '../pages/datasmc/address/marketplaceAddress.json';
import NFTAbi from '../pages/datasmc/abi/nftAbi.json';
import NFTAddress from '../pages/datasmc/address/nftAddress.json';
import { id } from 'ethers/lib/utils'
declare var window: any;
const Marketplace = () => {

 


  useEffect(() => {
    loadMarketplaceItems();
  }, []);
  
  const [nfts, setNFTs] = useState([]);
  const loadMarketplaceItems = async () => {
    const provider: any = new ethers.providers.Web3Provider(window.ethereum);
  
      const signer: any = provider.getSigner();
     // Get deployed copies of contracts
     var marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi, signer)
   
   
     
     const nft = new ethers.Contract(NFTAddress.address, NFTAbi, signer)
  
  
  
   
    // Load all unsold items
    if (marketplace !== undefined) {
      const itemCount = await marketplace.itemCount();
      let items: any = [];
      for (let i = 1; i <= itemCount; i++) {
        const item = await marketplace.items(i);
        // alert(item);
        if (!item.sold) {
          // get uri url from nft contract
          const uri = await nft.tokenURI(item.tokenId);
          // use uri to fetch the nft metadata stored on ipfs
          const response = await fetch(uri);
  
          const metadata = await response.json();
          // get total price of item (item price + fee)
          const totalPrice = await marketplace.getTotalPrice(item.itemId);
          // Add item to items array
          items.push({
            totalPrice,
            itemId: item.itemId,
            seller: item.seller,
            name: metadata.name,
            description: metadata.description,
            image: metadata.image,
          });
        }
      }
      setNFTs(items);
    }
  };
  console.log(nfts);

  
const handleBuyNFT = async (item:any) => {
  const provider: any = new ethers.providers.Web3Provider(window.ethereum);

  const signer: any = provider.getSigner();
  console.log(item)
 // Get deployed copies of contracts
 var marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi, signer)
  await (await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })).wait()
  loadMarketplaceItems();
}


  return (
    <>
    <div className={styles.heading}>Explore NFTs
    </div>
    <div className={styles.container}>
      {
      nfts.length > 0 && nfts.map((item:any, id) => (
         <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}} key ={id}>
         <Image src={item.image.replace("ipfs://", "https://ipfs.io/ipfs/")} alt=""/>
         <div className={styles.card_body}>
           <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>{item.name}</Text>
           <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
           
         </div>
         <hr style={{borderColor:"#eee"}}/>
         <div className={styles.price}>
           <Text style={{fontSize:"14px", color:"#909090", marginBottom:"4px"}}>Reserve Price</Text>
           <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>£{ethers.utils.formatEther(item.totalPrice)}</Text>
         </div>
         <div className={styles.button_buy}>
         <Button onClick={() => handleBuyNFT(item)} style={{background: "linear-gradient(to right, #D01498,#647ECB,#647ECB,#D01498)", color:"#fff", width:"150px"}} >
          <BsCart4 size={18} style={{marginRight:"4px"}} />Purchase
          </Button>
         </div>
        
           
       </Card>
      ))
    }
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