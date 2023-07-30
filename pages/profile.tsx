import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button, Card, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure } from '@chakra-ui/react'
import React, { useContext, useEffect , useState} from 'react'
import styles from '../styles/profile.module.scss'
import { FaRegHeart } from "react-icons/fa";
import {ethers} from 'ethers'
import MarketplaceAbi from './datasmc/abi/marketplaceAbi.json';
import MarketplaceAddress from './datasmc/address/marketplaceAddress.json';
import NFTAbi from './datasmc/abi/nftAbi.json';
import NFTAddress from './datasmc/address/nftAddress.json';
import AuctionAbi from './datasmc/abi/auctionAbi.json';
import AuctionAddress from './datasmc/address/auctionAddress.json';
import axios from 'axios';
declare var window: any;
import Countdown from 'react-countdown';
import { SearchContext } from '@/components/SearchContext'
import { useRouter } from 'next/router'
import Link from 'next/link'




const Profile = () => {

  interface NFT {
    idToken: number;
    name: string;
    image: string;
    description: string;
    price: number;
  }

  const [nftCollected, setNftCollected] = useState<NFT[]>([]);
  const [market, setMaket] = useState([]);

  const [purchases, setPurchases] = useState<NFT[]>([])
  const [checkEvent, setCheckEvent]=useState(0)
 
  useEffect(() => {


    const loadNFT = async () => {
      if(typeof window !== "undefined") {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

        const provider2:any = new ethers.providers.JsonRpcProvider('https://polygon-mumbai.infura.io/v3/4cd2c1a8018646908347fb2223053b30');

        //get contract of nft 
        const contract2 = new ethers.Contract(NFTAddress.address, NFTAbi, provider2);

      //get so luong nft trong smc nft
      const tokenCount = await contract2.tokenCount();
      
      //chuyên ve so binh thuong
      const tokenCount1 = tokenCount.toNumber()
  
      //khai bao mang de lưu item da tao
      var itemNFTArrayCollected: any[] = [];
  

      for(let i =1; i<=tokenCount1; i++) {
       
        const tokenId = i;  // ID của NFT
      const owner = await contract2.ownerOf(tokenId); // Địa chỉ của chủ sở hữu NFT

      if(owner.toLowerCase() === accounts[0]) {
        const tokenURI = await contract2.tokenURI(tokenId); // Đường dẫn đến metadata của NFT

        // console.log(`Owner of token ${tokenId}: ${owner}`);
        console.log(`Token URI of token ${tokenId}: ${tokenURI}`);
        //get metadata tu uri cua tung nft
        const response = await axios.get(tokenURI);
        console.log(response)
  
        const { name, image, description, price } = response.data;
    
        const newItem: NFT = {
          idToken: tokenId,
          name,
          image,
          description,
          price,
        };
        itemNFTArrayCollected.push(newItem);
      
      }
      else {
        console.log("ko trùng owner")
      }
     

      }
      console.log("item2",  itemNFTArrayCollected )
      localStorage.setItem('nftCollected', JSON.stringify(itemNFTArrayCollected));
      setCheckEvent(checkEvent + 1)
     
      // setNftCollected(prevItems => [...prevItems, ...itemNFTArrayCollected]);
      // console.log(nftCollected)

      //tab listing 
      const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi, provider2);
      if (marketplace !== undefined) {
        const itemCount = await marketplace.itemCount();
        let items: any = [];
        for (let i = 1; i <= itemCount; i++) {
          const item = await marketplace.items(i);
         
          if( item?.seller.toLowerCase() == accounts[0].toLowerCase()) {
            console.log(item.seller, accounts[0])
                // get uri url from nft contract
                const uri = await contract2.tokenURI(item.tokenId);
                // use uri to fetch the nft metadata stored on ipfs
                const response = await fetch(uri);

                const metadata = await response.json();
                console.log("metadata", metadata)
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
                  price: metadata.price
                });

          }else {
              console.log("không trùng owner")
              console.log(typeof item.seller, typeof accounts[0])
          }
          
        }

        
        // setMaket(items);
        localStorage.setItem('nftListing', JSON.stringify(items));
        setCheckEvent(checkEvent + 1)
      }

      //purchased
     
      const filter =  marketplace.filters.Bought(null,null,null,null,null,accounts[0]);
      const results = await marketplace.queryFilter(filter)

      const purchases:any = await Promise.all(results.map(async i => {
        // fetch arguments from each result
        var a:any = i.args; 
        // get uri url from nft contract
        const uri = await contract2.tokenURI(a.tokenId.toNumber())
        // use uri to fetch the nft metadata stored on ipfs 
        const response = await fetch(uri)
        const metadata = await response.json()
        // get total price of item (item price + fee)
        const totalPrice = await marketplace.getTotalPrice(a.itemId)
        // define listed item object
        let purchasedItem = {
          totalPrice,
          price: a.price,
          itemId: a.itemId,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image
        }
        return purchasedItem
      }))
      // setPurchases(purchases)

      localStorage.setItem('purchases', JSON.stringify(purchases));
    setCheckEvent(checkEvent + 1)

      //end
      }  
    }  
    
    loadNFT();
  }, []);


  const [nftCreated, setNftCreated] = useState<NFT[]>([])
  
  useEffect(()=> {
    const DataCollected:any = localStorage.getItem('nftCollected');
    const nftDataCollected:any = DataCollected ? JSON.parse(DataCollected) : [];
    const DataListing:any = localStorage.getItem('nftListing');
    const nftDataListing:any = DataListing ? JSON.parse(DataListing) : [];
    const DataPurchases:any = localStorage.getItem('purchases');
    const nftDataPurchases:any = DataPurchases ? JSON.parse(DataPurchases) : [];
    setNftCollected([])
    setNftCollected(nftDataCollected)
   console.log(nftDataPurchases)
   const uniqueItems = nftDataCollected.filter((item:any) => !nftDataPurchases.some((obj:any) => obj.name === item.name));

    console.log("uni", uniqueItems)
    setNftCreated(uniqueItems)
    setMaket(nftDataListing)
    setPurchases(nftDataPurchases)
    console.log("creat", nftCreated)

  },[checkEvent])
  
 


  console.log(nftCollected);
  console.log("maket",market)

 console.log(purchases,"purchas")
 

const { isLoggedIn, handleConnect1} = useContext(SearchContext);
	
const [address, setAddress] = useState('')
	useEffect(() => {

		const addressData:any = localStorage.getItem('address');
    setAddress(addressData)

		if(addressData?.length > 0) {
			handleConnect1(true)
		}
		console.log(isLoggedIn)

	  }, [isLoggedIn]);

    const [loadingMap, setLoadingMap] = useState<Record<string, boolean>>({});
    const [tx, setTx] = useState('')
    const [open, setOpen] = useState(false)


  //listing nft qua marketplace smc đêr ban
 const handleListForSale = async (item:any) => {
  if(!isLoggedIn) {
    alert("Vui lòng kết nối ví metamask! ")
  } else {
    try {
      setLoadingMap(prevLoadingMap => ({
        ...prevLoadingMap,
        [item.idToken]: true
      }));

     
      const provider: any = new ethers.providers.Web3Provider(window.ethereum);
    const signer: any = provider.getSigner();
    var nft = new ethers.Contract(NFTAddress.address, NFTAbi, signer);
    var marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi, signer);
      console.log(item,"item")
      await (await nft.setApprovalForAll(marketplace.address, true)).wait();
      const listingPrice = ethers.utils.parseEther(item.price.toString());
      console.log(listingPrice)
        const tx = await (await marketplace.makeItem(nft.address, item.idToken, listingPrice)).wait();
        console.log(tx)
        if(tx) {
					setTx(tx?.transactionHash);
          setOpen(true)
					setLoadingMap(prevLoadingMap => ({
            ...prevLoadingMap,
            [item.idToken]: false
          }));
				}
      

    } catch (error) {
      console.log(error)
      setLoadingMap(prevLoadingMap => ({
        ...prevLoadingMap,
        [item.idToken]: false
      }));
    }
    
  }
 
 }

 const [endTime, setEndTime1] = useState(Date.now() + 1200000000);
 const [endTime1, setEndTime2] = useState(Date.now() + 500000000);
 const [endTime2, setEndTim3] = useState(Date.now() + 800000000);
//  const handleReset = () => {
//   setEndTime(Date.now() + 5000);
// };
console.log("endtime", endTime)

const [imageNFTAuction, setImageNFTAuction] = useState('')
const [timeExpireAuction, setTimeExpireAuction] = useState('')
const [priceAuction, setPriceAuction] = useState("");
const [idNFTAuction,setIdNFTAuction] = useState(1)
const handleAuction = (item:any)=> {
  console.log(item)
  onOpen();
  setImageNFTAuction(item.image)
  setIdNFTAuction(item.idToken)

}

const { isOpen, onOpen, onClose } = useDisclosure()

const initialRef = React.useRef(null)
const finalRef = React.useRef(null)

const [count,setCount] = useState(1)

const handleCreateAuction = async () => {
  try {
    const provider: any = new ethers.providers.Web3Provider(window.ethereum);
    const signer: any = provider.getSigner();
    const nft:any = new ethers.Contract(NFTAddress.address, NFTAbi, signer);
    const auctionContract = new ethers.Contract(AuctionAddress.address, AuctionAbi, signer);
    console.log(auctionContract)
    // auctionContract.createAuction(id, price, Date.now(), end)
    console.log(idNFTAuction, Number(priceAuction),Math.round((new Date().getTime()/1000)  + 60),Math.round(new Date(timeExpireAuction).getTime()/ 1000)  )
    await (await nft.approve(auctionContract.address, idNFTAuction)).wait();
    const createAuction = await auctionContract.createAuction(idNFTAuction,ethers.utils.parseUnits(priceAuction) ,Math.round((new Date().getTime()/1000)  + 60),Math.round(new Date(timeExpireAuction).getTime()/ 1000) ,{gasLimit: 1000000})
    console.log(createAuction)
    setCount(count +1)
    onClose();
  } catch (error) {
    console.log(error)
  }
 
  
}
const [nftAuction, setNftAuction] = useState<any[]>([]);

useEffect(() => {
  const getListAuction = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai.infura.io/v3/4cd2c1a8018646908347fb2223053b30');
      const auctionContract = new ethers.Contract(AuctionAddress.address, AuctionAbi, provider);
      const nft:any = new ethers.Contract(NFTAddress.address, NFTAbi, provider);

      const createAuction = await auctionContract.getAuctionByStatus(true);
      const newItems:any[] = []; // Mảng chứa các phần tử newItem

      for (let i = 0; i < createAuction.length; i++) {
        const tokenId = createAuction[i]?._tokenId.toNumber();
        const auctionId = createAuction[i]?.auctionId.toNumber();
        const startTime = createAuction[i]?.startTime.toNumber();
        const endTime = createAuction[i]?.endTime.toNumber();

        const tokenURI = await nft.tokenURI(tokenId); // Đường dẫn đến metadata của NFT
        const response = await axios.get(tokenURI);
  
        const { name, image, description, price } = response.data;
    
        const newItem = {
          auctionId: auctionId,
          idToken: tokenId,
          name,
          image,
          description,
          price,
          startTime: startTime,
          endTime: endTime,
        };
        newItems.push(newItem);
      }
      setNftAuction([]);
      setNftAuction(prevItems => [...prevItems, ...newItems]);
    } catch (error) {
      console.log(error);
    }
  };

  getListAuction();
}, [count]);

console.log(nftAuction)

	// const navigate = useNavigate()
	const router = useRouter();
	const handleViewTx = () => {
		setOpen(false)
    onClose()
		router.push(`https://mumbai.polygonscan.com/tx/${tx}`);
	}

  console.log(nftCollected)
  console.log(market)
  console.log(purchases)


  const handleCancelAuction =async (auctionId:any) => {
    const provider: any = new ethers.providers.Web3Provider(window.ethereum);
    const signer: any = provider.getSigner();
    const auctionContract = new ethers.Contract(AuctionAddress.address, AuctionAbi, signer);
    const cancelAuctionTx = await auctionContract.cancelAuction(ethers.BigNumber.from(auctionId),{gasLimit: 1000000});

      // Đợi giao dịch được xác nhận
      await cancelAuctionTx.wait();

      console.log('Hủy đấu giá thành công!');
      setCount(count +1)
      
  }
  return (
    
    <>

    <Modal closeOnOverlayClick={true} isOpen={open} onClose={onClose}>
				<ModalOverlay />

				<ModalContent style={{textAlign:'center'}}>
				<ModalHeader >LIST NFT</ModalHeader>
				<ModalCloseButton />
				<ModalBody pb={6}>
					<Text style={{fontStyle:"italic"}}>(List your nft successfully)</Text>
					<Button style={{marginTop:"20px", background:"yellow"}} onClick={handleViewTx}>{tx.slice(0, 10)}...{tx.slice(-10)}</Button>
				</ModalBody> 
				</ModalContent>
			</Modal>

      <Modal  
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new auction</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <FormControl>
              <Image src={imageNFTAuction.replace("ipfs://", "https://ipfs.io/ipfs/")} alt="image auction" width={400}/>
            </FormControl>
            <FormControl>
              <FormLabel>Price auction</FormLabel>
              <Input ref={initialRef} placeholder='0' onChange={(e: any) => setPriceAuction(e.target.value)} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Expiration date</FormLabel>
              <Input type='date' onChange={(e)=> setTimeExpireAuction(e.target.value)}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleCreateAuction}>
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>  
        <div style={{margin:"-30px -75px 40px"}}>
        <Navbar/>
        </div>
      
        <div>
        <div style={{margin:"0 -70px"}}>
        <Image className={styles.nft_img} src="/image/bg4.avif" alt="" style={{backgroundImage:"cover", width:"100%", height:"300px"}} />
        <div style={{display:"flex",justifyContent:"center", width:"158px",margin:"20px 70px", height:"158px", boxShadow:"0px 0px 10px #ccc ", borderRadius:"50%", marginTop:"-100px"}}>
        <Image className={styles.nft_img} src="/image/avata2.avif" alt=""  style={{borderRadius:"50%", width:"150px", height:"150px"}}/>
        </div>
        </div>
        
        <Text style={{fontSize:"24px", fontWeight:"600", marginBottom:"4px"}}>Vanduc19it</Text>
        <div style={{display: "flex"}}>
        <Image className={styles.nft_img} src="/eth1.png" alt=""  style={{height:"20px", marginLeft:"-4px"}}/>
        <Text style={{color:"#484848", marginRight:"10px"}}>{address.substring(0, 6) + "..." + address.substring(38)}</Text>
        <Text style={{color:"#6d6d6d"}}>Joined February 2023</Text>
        </div>
        <Tabs>
  <TabList style={{marginTop:"22px"}}>
    <Tab style={{fontWeight:"600"}}>Collected {nftCollected.length }</Tab>
    <Tab style={{fontWeight:"600"}}>Created {nftCreated.length}</Tab>
    <Tab style={{fontWeight:"600"}}>Listing {market.length}</Tab>
    <Tab style={{fontWeight:"600"}}>Purchased {purchases.length}</Tab>
    <Tab style={{fontWeight:"600"}}>Live Auctions  {nftAuction.length}</Tab>
    <Tab style={{fontWeight:"600"}}>Favorited {market.length}</Tab>
  </TabList>

  <TabPanels>
    {/* collected = created+purchased */}
    <TabPanel>
      <div className={styles.container}>
      {
        nftCollected.length > 0 && (
          <>
            {nftCollected.map((item: any, id: any) => (
              <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}} key={id}>
                
                <Image src={item.image.replace("ipfs://", "https://ipfs.io/ipfs/")} alt=""/>
                <div className={styles.card_body}>
                  <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>{item.name}</Text>
                  <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
                </div>
                <hr style={{borderColor:"#eee"}}/>
                <div className={styles.price}>
                  <Text style={{fontSize:"14px", color:"#909090", marginBottom:"4px"}}>Price</Text>
                  <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>{item.price} ETH</Text>
                </div>
                <div className={styles.button_buy}>
                  {/* <Button style={{background: "linear-gradient(to right, #D01498,#647ECB,#647ECB,#D01498)", color:"#fff", width:"150px"}} >
                    <BsCart4 size={18} style={{marginRight:"4px"}} />Purchase
                  </Button> */}
                </div>
              </Card>
            ))}
          </>
        )
      }

    

      </div>
    </TabPanel>
    <TabPanel>
      {/* created by user */}
    <div className={styles.container}>
      {
      nftCreated.length > 0 && nftCreated.map((item:any, id) => (
         <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}} key ={id}>
         <Image src={item.image.replace("ipfs://", "https://ipfs.io/ipfs/")} alt=""/>
         <div className={styles.card_body}>
           <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>{item.name}</Text>
           <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
           
         </div>
         <hr style={{borderColor:"#eee"}}/>
         <div className={styles.price}>
          <Button style={{background:"#eae30b", color:"white"}} onClick={()=>handleListForSale(item)}>
          {!loadingMap[item.idToken] ? ('List for sale')  :(<><Text style={{marginRight:'4px'}}>Listing</Text>  <Spinner size='sm'/></>) }</Button>
          <Button style={{background:"#ea0061",  color:"white"}} onClick={()=>handleAuction(item)}>Auction</Button>
           
         </div>
         <div className={styles.button_buy}>
         {/* <Button style={{background: "linear-gradient(to right, #D01498,#647ECB,#647ECB,#D01498)", color:"#fff", width:"150px"}} >
          <BsCart4 size={18} style={{marginRight:"4px"}} />Purchase
          </Button> */}
         </div>
        
           
       </Card>
      ))
    }
    

      </div>
    </TabPanel>
    
    <TabPanel>
      {/* listing to sale*/}
    <div className={styles.container}>
      {
      market.length > 0 && market.map((item:any, id) => (
         <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}} key={id}>
            <Link href={`/ProductDetail/${ethers.BigNumber.from(item.itemId).toNumber()}`} >
         <Image src={item.image.replace("ipfs://", "https://ipfs.io/ipfs/")} alt=""/>
         </Link>
         <div className={styles.card_body}>
           <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>{item.name}</Text>
           <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
           
         </div>
         <hr style={{borderColor:"#eee"}}/>
         <div className={styles.price}>
           <Text style={{fontSize:"14px", color:"#909090", marginBottom:"4px"}}>Price</Text>
           <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>{(item.price)} ETH</Text>
         </div>
         <div className={styles.button_buy}>
         {/* <Button style={{background: "linear-gradient(to right, #D01498,#647ECB,#647ECB,#D01498)", color:"#fff", width:"150px"}} >
          <BsCart4 size={18} style={{marginRight:"4px"}} />Purchase
          </Button> */}
         </div>
        
           
       </Card>
      ))
    }
    

      </div>
    </TabPanel>
    {/* purchased */}
    <TabPanel>
    <div className={styles.container}>
      {
      purchases.length > 0 && purchases.map((item:any,id) => (
         <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}} key={id}>
         <Image src={item.image.replace("ipfs://", "https://ipfs.io/ipfs/")} alt=""/>
         <div className={styles.card_body}>
           <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>{item.name}</Text>
           <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
           
         </div>
         <hr style={{borderColor:"#eee"}}/>
         <div className={styles.price}>
           <Text style={{fontSize:"14px", color:"#909090", marginBottom:"4px"}}>Price</Text>
           <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>{(ethers.utils.formatEther(item.price))} ETH</Text>
         </div>
        
           
       </Card>
      ))
    }
    

      </div>
    </TabPanel>
    {/* live action */}
    <TabPanel>
    <div className={styles.container}>
     
      {nftAuction.length > 0 && nftAuction.map((item:any,id) => (
            <Card className={styles.card2} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}} key={id}>
            <Image src={item.image.replace("ipfs://", "https://ipfs.io/ipfs/")} alt=""/>
            <div className={styles.card_body}>
              <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>{item.name}</Text>
              <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
              
            </div>
            <hr style={{borderColor:"#eee"}}/>
            <div className={styles.price}>

              <Text style={{fontSize:"14px", color:"#909090", marginBottom:"4px"}}>Highest bid</Text>
              <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>{item.price} ETH</Text>
            </div>
            <div className={styles.button_buy}>
            <Button style={{border:"1px solid black", color:"#000"}} variant='outline' isDisabled >
              <Countdown
              date={item?.endTime * 1000}
              // onComplete={() => alert('Time is up!')}
            />
            </Button>
            <Button style={{background:"#ea0061",  color:"white"}} onClick={()=>handleCancelAuction(item.auctionId)}>Cancel</Button>
            </div>
              
            </Card>
      ))}
        
  
    
      </div>
    </TabPanel>
    {/* favorites */}
    <TabPanel>
    <div className={styles.container}>
      {
      market.length > 0 && market.map((item:any, id) => (
         <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}} key={id}>
         <Image src={item.image.replace("ipfs://", "https://ipfs.io/ipfs/")} alt=""/>
         <div className={styles.card_body}>
           <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>{item.name}</Text>
           <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
           
         </div>
         <hr style={{borderColor:"#eee"}}/>
         <div className={styles.price}>
           <Text style={{fontSize:"14px", color:"#909090", marginBottom:"4px"}}>Price</Text>
           <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>{(item.price)} ETH</Text>
         </div>
         <div className={styles.button_buy}>
         {/* <Button style={{background: "linear-gradient(to right, #D01498,#647ECB,#647ECB,#D01498)", color:"#fff", width:"150px"}} >
          <BsCart4 size={18} style={{marginRight:"4px"}} />Purchase
          </Button> */}
         </div>
        
           
       </Card>
      ))
    }
    

      </div>
    </TabPanel>
  </TabPanels>
</Tabs>
        </div>
        <Footer/>
    </>
  )
}

export default Profile