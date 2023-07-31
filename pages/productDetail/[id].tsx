import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button, Card, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure } from '@chakra-ui/react'
import React,{useEffect, useState} from 'react'
import { FaRegHeart } from "react-icons/fa";
import styles from '../../styles/productdetail.module.scss'
import { BsCart4 } from "react-icons/bs";
import { AiOutlineEye } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { ethers } from 'ethers';
import MarketplaceAbi from '../datasmc/abi/marketplaceAbi.json';
import MarketplaceAddress from '../datasmc/address/marketplaceAddress.json';
import Link from 'next/link';
declare var window: any;
const ProductDetail = () => {

  interface NftData {
    name: string;
    image: string;
    price: number;
    owner: string;
    description: string;
  }
  

  const router = useRouter();
  const { id } = router.query;
  console.log(typeof (id))
  const [nft, setNft] = useState<NftData>({ name: '', image: '', price: 0, owner:'', description:'' });
  
  useEffect(() => {

    const nftData = localStorage.getItem('nftsData');
    const nfts = nftData ? JSON.parse(nftData) : [];
    const parsedId = typeof id === 'string' ? parseInt(id) : null;
  
    if (parsedId !== null) {
      const nft = nfts.find((item: any) => ethers.BigNumber.from(item.itemId).toNumber() === parsedId);
      console.log(nft);
      setNft(nft)
    } else {
      console.error('Invalid id:', id);
    }
  }, [id]);

  const [loading, setLoading] = useState(false)
  const [tx, setTx] = useState('')
  const handleBuyNFT = async (item:any) => {
    try {
      setLoading(true)
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi, signer);
  
      const tx = await marketplace.purchaseItem(item.itemId, { value: item.totalPrice });
      console.log(tx)
      if(tx) {
        setTx(tx?.hash);
        onOpen();
        setLoading(false)
      }

    } catch (error) {
      console.error("Error buying NFT:" , error);
      setLoading(false)
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure()

	const handleViewTx = () => {
		router.push(`https://mumbai.polygonscan.com/tx/${tx}`);
		setTimeout(() => {
			onClose();
		}
		,4000)
	}
  return (
    <>
		<Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} >
				<ModalOverlay />
				<ModalContent style={{textAlign:'center'}}>
				<ModalHeader >CREATE NFT</ModalHeader>
				<ModalCloseButton />
				<ModalBody pb={6}>
					<Text style={{fontStyle:"italic"}}>(Create your nft successfully)</Text>
					<Button style={{marginTop:"20px", background:"yellow"}} onClick={handleViewTx}>{tx.slice(0, 10)}...{tx.slice(-10)}</Button>
				</ModalBody> 
				</ModalContent>
			</Modal>

    <div style={{margin:"-30px -80px 0px", borderBottom:"1px solid #eee", paddingBottom:"10px"}} >
    <Navbar/>
    </div>
   
    <div className={styles.detail}>
        <div className={styles.left}>
            <Image src={nft.image.replace("ipfs://", "https://ipfs.io/ipfs/")}  alt="" style={{width:"600px", height:"600px"}}/>
        </div>
        <div className={styles.right}>
            <Text style={{fontSize:"34px", fontWeight:"700", marginTop:"10px"}}>{nft.name}</Text>
            <Text style={{ fontWeight:"500"}}>Owned by {nft.owner.slice(0, 5)}...{nft.owner.slice(-5)}</Text>
            <div style={{margin:"30px 0px"}}>
            <Text style={{ fontWeight:"500", fontSize:"20px"}}>Current price</Text>
            <div style={{display:"flex"}}>
              <Image src="/eth1.png" alt="" style={{width:"40px"}}/>
              <Text style={{ fontWeight:"500", fontSize:"30px"}}>{nft.price} ETH</Text>
            </div>
            </div>
                <div style={{margin:"20px 0px 40px"}}>
                <Button style={{borderRadius:"10px", background:"#2081E2", width:"160px", color:"white"}} onClick={() => handleBuyNFT(nft)}>
                {!loading ? ('Buy Now')  :(<><Text style={{marginRight:'4px'}}>Buying</Text>  <Spinner size='sm'/></>) }
                    </Button>
                    <Button style={{borderRadius:"10px", background:"#000", width:"160px", color:"white", marginLeft:"20px"}}>
                        <BsCart4 style={{marginRight:"4px"}}/>
                        Add to Cart
                    </Button>
                </div>

                <Tabs>
                <TabList>
                    <Tab style={{ fontWeight:"500", fontSize:"18px"}}>Description</Tab>
                    <Tab style={{ fontWeight:"500", fontSize:"18px"}}>Reviews</Tab>
                    <Tab style={{ fontWeight:"500", fontSize:"18px"}}>Details</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                    <p style={{textAlign:"justify"}}>{nft.description} NFT is a unique and captivating type of NFT (Non-Fungible Token) designed around the space and mystical creatures theme. The {nft.description} NFT is specifically inspired by the image of a adventurous cat searching for an exciting journey on the Red Planet. This NFT captures the charm and spirit of exploration, and is perfect for collectors and enthusiasts who appreciate the beauty of art, space and feline companions. With its one-of-a-kind design, the {nft.description} NFT is sure to be a treasured addition to any collection.</p>
                    </TabPanel>
                    <TabPanel>
                    <p>Review</p>
                    </TabPanel>
                    <TabPanel>
                    <p>Detail</p>
                    </TabPanel>
                </TabPanels>
                </Tabs>
        </div>
       
    </div>
    <div className=''>
    <div style={{display:"flex", justifyContent:"space-between", alignItems:'center'}}>
    
  <div className={styles.heading}>Related Products
    </div>
    <div style={{marginRight:"26px"}}>
    <Link href='/'>
    
         <Button style={{background:"#3A9BFC", color:"white", marginTop:"20px"}}><AiOutlineEye style={{marginRight:"4px"}} />View All</Button>
    </Link>
    </div>
    </div>
    <div className={styles.container}>
    <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
          <Image src="/image/marscat2.png" alt=""/>
          <div className={styles.card_body}>
            <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>Mars Cat 2</Text>
            <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
            
          </div>
          <hr style={{borderColor:"#eee"}}/>
          <div className={styles.price}>
            <Text style={{fontSize:"14px", color:"#909090", marginBottom:"4px"}}>Price</Text>
            <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>0.05 ETH</Text>
          </div>
            
        </Card>
        <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
          <Image src="/image/marscat3.png" alt=""/>
          <div className={styles.card_body}>
            <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>Mars Cat 3</Text>
            <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
            
          </div>
          <hr style={{borderColor:"#eee"}}/>
          <div className={styles.price}>
            <Text style={{fontSize:"14px", color:"#909090", marginBottom:"4px"}}>Price</Text>
            <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>0.05 ETH</Text>
          </div>
            
        </Card>
        <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
          <Image src="/image/marscat4.avif" alt=""/>
          <div className={styles.card_body}>
            <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>Mars Cat 4</Text>
            <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
            
          </div>
          <hr style={{borderColor:"#eee"}}/>
          <div className={styles.price}>
            <Text style={{fontSize:"14px", color:"#909090", marginBottom:"4px"}}>Price</Text>
            <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>0.05 ETH</Text>
          </div>
            
        </Card>
        <Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
          <Image src="/image/marscat5.avif" alt=""/>
          <div className={styles.card_body}>
            <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}>Mars Cat 5</Text>
            <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
            
          </div>
          <hr style={{borderColor:"#eee"}}/>
          <div className={styles.price}>
            <Text style={{fontSize:"14px", color:"#909090", marginBottom:"4px"}}>Price</Text>
            <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>0.05 ETH</Text>
          </div>
            
        </Card>
      
    </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default ProductDetail