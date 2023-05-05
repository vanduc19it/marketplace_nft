import React, { useEffect, useState } from 'react'
import styles from '../styles/marketplace.module.scss'
import { Button, Card, Image, Text } from '@chakra-ui/react'
import { FaRegHeart } from "react-icons/fa";
import {ethers} from 'ethers'
import { BsCart4 } from "react-icons/bs";
import { ImPriceTags } from "react-icons/im";
import { AiFillDollarCircle, AiOutlineEye } from 'react-icons/ai'
import MarketplaceAbi from '../pages/datasmc/abi/marketplaceAbi.json';
import MarketplaceAddress from '../pages/datasmc/address/marketplaceAddress.json';
import NFTAbi from '../pages/datasmc/abi/nftAbi.json';
import NFTAddress from '../pages/datasmc/address/nftAddress.json';
import Link from 'next/link';
import { BiCategory } from 'react-icons/bi';

declare var window: any;
const Marketplace = () => {

  useEffect(() => {
    loadMarketplaceItems();
  }, []);
  
  const [nfts, setNFTs] = useState([]);
  const loadMarketplaceItems = async () => {

    if(typeof window !== "undefined") {
    // const provider: any = new ethers.providers.Web3Provider(window.ethereum);
    // await provider.send('eth_requestAccounts', []); 
    // // await window.ethereum.request({ method: 'eth_requestAccounts' });
    //   const signer: any = provider.getSigner();
     // Get deployed copies of contracts
    //  var marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi, signer)
    //   console.log(marketplace, "abc")



     const provider1 = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.infura.io/v3/4cd2c1a8018646908347fb2223053b30");

     const nft = new ethers.Contract(NFTAddress.address, NFTAbi, provider1)
     const marketplace = new ethers.Contract( MarketplaceAddress.address, MarketplaceAbi, provider1);

    //  console.log(contract, "contratc")
    console.log(nft)
    if (nft !== undefined) {
      // const tokenCount = await nft.itemCount();
      // console.log(tokenCount, "token111")
    }
    
    // //   console.log(contract, "contarc")
    //   if (contract !== undefined) {
    //     const tokenCount = await contract.itemCount();
    //     console.log(tokenCount, "token")
    //   }
    
   
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
  }
  };
  console.log(nfts);

  
const handleBuyNFT = async (item:any) => {
  // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

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
    <div style={{display:"flex", justifyContent:"space-between", margin:"0 30px"}}>
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <Button style={{background:"#ae4cff", color:"white", marginRight:"10px"}}><BiCategory style={{marginRight:"4px"}}/>Category</Button>
      <Button style={{background:"#ae4cff", color:"white",  marginRight:"10px"}}><AiFillDollarCircle style={{marginRight:"4px"}}/>Price Range</Button>
      <Button style={{background:"#ae4cff", color:"white",  marginRight:"10px"}}><ImPriceTags style={{marginRight:"4px"}}/>Sale Type</Button>
      </div>
      <div>
      <Button style={{background:"#3A9BFC", color:"white"}}><AiOutlineEye style={{marginRight:"4px"}}/>View All NFT</Button>
      </div>
    </div>
    <div className={styles.container}>
      {
      nfts.length > 0 && nfts.map((item:any, id) => (
         <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}} key ={id}>
         <Image src={item.image.replace("ipfs://", "https://ipfs.io/ipfs/")} alt=""/>
         <div className={styles.card_body}>
            {/* <Link href="/productDetail"> */}
            <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>{item.name}</Text>
            {/* </Link> */}
          
           <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
           
         </div>
         <hr style={{borderColor:"#eee"}}/>
         <div className={styles.price}>
            <div>
            <Text style={{fontSize:"14px", color:"#909090", marginTop:"-5px"}}>Price</Text>
          
            <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>{ethers.utils.formatEther(item.totalPrice)} ETH</Text>
          
          
            
         
            </div>
          
          <div>
          <Button onClick={() => handleBuyNFT(item)} style={{background: "#009cf7", color:"#fff", width:"150px"}} >
          BUY NFT
          </Button>
          </div>
         </div>
         <div className={styles.button_buy}>
         <Button style={{background: "linear-gradient(to right, #D01498,#647ECB)", color:"#fff", width:"160px"}} >
          <BsCart4 size={20} style={{marginRight:"2px"}} />ADD TO CART
          </Button>
         </div>
        
           
       </Card>
      ))
    }
    {/* <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
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
            
        </Card> */}
    </div>
    </>
    
  )
}

export default Marketplace