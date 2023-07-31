import React, { useEffect, useState, useContext  } from 'react'
import styles from '../styles/marketplace.module.scss'
import { Button, Card, Image, Spinner, Text } from '@chakra-ui/react'
import { FaRegHeart } from "react-icons/fa";
import {ethers} from 'ethers'
import { BsCart4 } from "react-icons/bs";
import { ImPriceTags } from "react-icons/im";
import { AiFillDollarCircle, AiOutlineEye } from 'react-icons/ai'
import MarketplaceAbi from '../pages/datasmc/abi/marketplaceAbi.json';
import MarketplaceAddress from '../pages/datasmc/address/marketplaceAddress.json';
import NFTAbi from '../pages/datasmc/abi/nftAbi.json';
import NFTAddress from '../pages/datasmc/address/nftAddress.json';
import { BiCategory } from 'react-icons/bi';
import Link from 'next/link';
import { SearchContext } from './SearchContext';

declare var window: any;
const Marketplace = () => {
  
  const {handleConnect1} = useContext(SearchContext);
  useEffect(() => {
    loadMarketplaceItems();
    const addressData:any = localStorage.getItem('address');

		if(addressData?.length > 0) {
			handleConnect1(true)
		}
  }, []);
  
  const [nfts, setNFTs] = useState([]);
  const [checkEvent, setCheckEvent] = useState(1)
  
  const loadMarketplaceItems = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.infura.io/v3/4cd2c1a8018646908347fb2223053b30");
  
      const nft = new ethers.Contract(NFTAddress.address, NFTAbi, provider);
      const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi, provider);
  
      if (nft && marketplace) {
        const itemCount = await marketplace.itemCount();
        const items:any = [];
  
        for (let i = 1; i <= itemCount; i++) {
          const item = await marketplace.items(i);
  
          if (!item.sold) {
            const uri = await nft.tokenURI(item.tokenId);
            const response = await fetch(uri);
            const metadata = await response.json();
            const totalPrice = await marketplace.getTotalPrice(item.itemId);
            const owner = await nft.ownerOf(i);
            console.log(owner)
            console.log(metadata)
  
            items.push({
              totalPrice,
              itemId: item.itemId.toNumber(),
              seller: item.seller,
              name: metadata.name,
              description: metadata.description,
              image: metadata.image,
              price: metadata.price,
              owner: owner
            });
          }
        }

     
  
         // setNFTs(items);
         localStorage.setItem('nftsData', JSON.stringify(items));
         setCheckEvent(checkEvent + 1)
      }
    } catch (error) {
      console.error("Error loading marketplace items:", error);
    }
  };
  const [nftSearch, setNftSearch] = useState([]);
  useEffect(()=> {
    const nftData:any = localStorage.getItem('nftsData');
    const nfts:any = nftData ? JSON.parse(nftData) : [];
    setNFTs(nfts)

    // const nftDataSearch:any = localStorage.getItem('nftsSearch');
    // const nfts1:any =  nftDataSearch ? JSON.parse( nftDataSearch) : [];
    // setNftSearch(nfts1)
  

  },[checkEvent])

  const [loadingMap, setLoadingMap] = useState<Record<string, boolean>>({});
  
  const handleBuyNFT = async (item:any) => {
    try {
      setLoadingMap(prevLoadingMap => ({
        ...prevLoadingMap,
        [item.itemId]: true
      }));
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi, signer);
  
      await marketplace.purchaseItem(item.itemId, { value: item.totalPrice });
      loadMarketplaceItems();
      setLoadingMap(prevLoadingMap => ({
        ...prevLoadingMap,
        [item.itemId]: false
      }));
    } catch (error) {
      console.error("Error buying NFT:", error);
      setLoadingMap(prevLoadingMap => ({
        ...prevLoadingMap,
        [item.itemId]: false
      }));
    }
  };
  
  console.log(nfts);
 
    // const savedQuery = localStorage.getItem('searchQuery');
    // const query = savedQuery || '';
    // console.log(query)
  
    
    // if (query === '') {
    //   setNFTs(nfts)
    //   console.log(nfts)
    // } else {
    //   const filteredItems = nfts.filter((item:any) => item.name.includes(query));
    //   setNFTs(filteredItems);
    //   console.log(nfts)
    // }

    const { searchQuery } = useContext(SearchContext);

    useEffect(() => {
      const nftData:any = localStorage.getItem('nftsData');
      const nfts1:any = nftData ? JSON.parse(nftData) : [];
      if (searchQuery !== '') {
        const filteredItems = nfts1.filter((item:any) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
      
        setNFTs(filteredItems);
      } else {
      
        setNFTs(nfts1)
      }
    }, [searchQuery]);
 

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
             <Link href={`/ProductDetail/${ethers.BigNumber.from(item.itemId).toNumber()}`} >
               <Image src={item.image.replace("ipfs://", "https://ipfs.io/ipfs/")} alt="" />
             </Link>
           
            <div className={styles.card_body}>
              <Link href={`/ProductDetail/${ethers.BigNumber.from(item.itemId).toNumber()}`}>
               <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>{item.name}</Text>
               </Link>
             
              <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
              
            </div>
            <hr style={{borderColor:"#eee"}}/>
            <div className={styles.price}>
               <div>
               <Text style={{fontSize:"14px", color:"#909090", marginTop:"-5px"}}>Price</Text>
             
               <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>{item.price} ETH</Text>
             
             
               
            
               </div>
             
             <div>
             <Button onClick={() => handleBuyNFT(item)} style={{background: "#009cf7", color:"#fff", width:"150px"}} >
            
             {!loadingMap[item.itemId] ? ('BUY NFT')  :(<><Text style={{marginRight:'4px'}}>BUYING NFT</Text>  <Spinner size='sm'/></>) }
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
    {/*
      
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
      
    */}
    </div>
    </>
    
  )
}

export default Marketplace