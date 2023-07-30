import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button, Card, FormControl, FormHelperText, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Spinner, Text, Textarea, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState,useContext } from 'react'
import {ethers, providers} from 'ethers'
import { NFTStorage, File } from 'nft.storage';
declare var window: any;
import styles from '../styles/createNFT.module.scss'
import MarketplaceAbi from './datasmc/abi/marketplaceAbi.json';
import MarketplaceAddress from './datasmc/address/marketplaceAddress.json';
import NFTAbi from './datasmc/abi/nftAbi.json';
import NFTAddress from './datasmc/address/nftAddress.json';
import { FaRegHeart } from 'react-icons/fa'
import { SearchContext } from '@/components/SearchContext'
import { useRouter } from 'next/router'
import { useNavigate } from 'react-router-dom';
// import ipfsClient from 'ipfs-http-client';
// import { Buffer } from 'buffer';
// const projectId = '4cd2c1a8018646908347fb2223053b30';
// const projectSecret = '8f714e35d70742d78cab98b27a934f4f';
// const auth =
//     'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

// const client = ipfsClient.create({
//     host: 'ipfs.infura.io',
//     port: 5001,
//     protocol: 'https',
//     headers: {
//         authorization: auth,
//     },
// });


const CreateNewNFT = () => {

	
	const { isLoggedIn, handleConnect1} = useContext(SearchContext);
	 
	useEffect(() => {

		const addressData:any = localStorage.getItem('address');
    

		if(addressData?.length > 0) {
			handleConnect1(true)
		}
		console.log(isLoggedIn)

	  }, [isLoggedIn]);
  
	const [image, setImage] = useState('');
	const [price, setPrice] = useState<number>(0);
  const [name, setName] = useState('');
	const [description, setDescription] = useState('');


  if (typeof window !== 'undefined') {
		const provider: any = new ethers.providers.Web3Provider(window.ethereum);

		const signer: any = provider.getSigner();
		var nft = new ethers.Contract(NFTAddress.address, NFTAbi, signer);
		var marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi, signer);
    console.log(provider)
	}



  const [imageBuffer, setImageBuffer] = useState(null);

  const uploadToIPFS = async (event: any) => {
		event.preventDefault();
		const file: any = event.target.files[0];

		const reader: any = new FileReader();
		reader.readAsArrayBuffer(file);
		reader.onload = () => {
			// sử dụng buffer ở đây
			setImageBuffer(reader.result);
		};

		// if (typeof file !== 'undefined') {
		// 	try {
		// 	  const result = await client.add(file)
		// 	  console.log(result)
		// 	  setImage(`https://ipfs.infura.io/ipfs/${result.path}`)
		// 	} catch (error){
		// 	  console.log("ipfs image upload error: ", error)
		// 	}
		//   }
	};
  console.log(imageBuffer)


  console.log(name, description, price, image)
  const [loading, setLoading] = useState(false)
  const [tx, setTx] = useState('')
	const createNFT = async () => {
		if (!isLoggedIn) {
			alert("Vui lòng kết nối ví metamask! ")
		  } 
		  else
		  {
			const nftstorage = new NFTStorage({
				token:
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEQ2Yzk0QzMxRTkxMTU4MTVEQjNGMzg0ODlCOWM0RTg4QTU0OGQzOGEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3NzEyMTMyMzIxMCwibmFtZSI6Ik5GVF9TVE9SQUdFX0tFWSJ9.0cZ-vUh5ouxp_TUVCThNhRA_YKmixC2Fwh5WEfTh-J8' ??
					'',
			});
	
			if (imageBuffer && name != '' && description != '') {
				try {
					console.log(imageBuffer);
				setLoading(true)
				const { ipnft } = await nftstorage.store({
					name,
					description,
					price,
					image: new File([imageBuffer], 'image', { type: 'image/png' }),
				});
				console.log(ipnft);
	
				const ipfsURL = `https://ipfs.io/ipfs/${ipnft}/metadata.json`;
				console.log(ipfsURL);
	
	
	
				// const result = await client.add(JSON.stringify({image, price, name, description}))
				// const uri = `https://ipfs.infura.io/ipfs/${result.path}`
	
				// mint nft
				const tx = await (await nft.mint(ipfsURL)).wait();// taoj nft
				console.log(tx)
				if(tx) {
					setTx(tx?.transactionHash);
					onOpen();
					setLoading(false)
				}
				
				// get tokenId of new nft
				const id = await nft.tokenCount();
				// approve marketplace to spend nft
				  const idToken = parseInt(id._hex, 16)
		 
				console.log(id,idToken)
				// await (await nft.setApprovalForAll(marketplace.address, true)).wait();
				// // add nft to marketplace
	
				// // sử dụng biến price ở đây
				// const listingPrice = ethers.utils.parseEther(price.toString());
				// await (await marketplace.makeItem(nft.address, idToken, listingPrice)).wait();
				} catch (error) {
					console.log(error);
				setLoading(false)
				}
				
			} else {
				alert("Vui lòng nhập đầy đủ thông tin nft !")
			}
		  }

	
	};

	const { isOpen, onOpen, onClose } = useDisclosure()
	// const navigate = useNavigate()
	const router = useRouter();
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


		<div style={{margin:"-20px -80px 20px", borderBottom:"1px solid #eee", paddingBottom:"20px"}} >
			 <Navbar/>
		</div>
		<div style={{display:"flex", justifyContent:"space-around", alignItems:"center", marginBottom:"20px"}}>
		<div style={{width:"60vw"}}>
            <Text style={{fontSize:"28px", fontWeight:"600", margin:"20px 0px"}}>Create Your NFT</Text>
            <Text style={{fontWeight:"600", margin:"10px 0px"}}>Upload Image</Text>
                        <FormControl>
           
            <Input type='file'  onChange={uploadToIPFS}/>

            <FormLabel style={{fontWeight:"600", margin:"10px 0px"}}>Item Name</FormLabel>
            <Input type='text' onChange={(e: any) => setName(e.target.value)} placeholder='NFT name'/>
            <FormLabel style={{fontWeight:"600",margin:"10px 0px"}}>Description</FormLabel>
            <Textarea placeholder='Provide description for your NFT ' onChange={(e: any) => setDescription(e.target.value)}/>
            <FormLabel style={{fontWeight:"600",margin:"10px 0px"}}>Price</FormLabel>
            <NumberInput max={10} min={0} onChange={(e: any) => setPrice(e)}>
                <NumberInputField />
                <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
           

            <Button
            mt={8}
            colorScheme='teal'
            // isLoading={props.isSubmitting}
            type='submit'
            onClick={createNFT}
          >
			{!loading ? ('Create New NFT')  :(<><Text style={{marginRight:'4px'}}>Creating</Text>  <Spinner size='sm'/></>) }
           
          </Button>
            </FormControl>
        </div>
		<div>
		<Text style={{fontWeight:"600", margin:"10px 0px", fontSize:"18px"}}>Preview NFT</Text>
		<Card className={styles.card} style={{boxShadow:"0 0 25px rgba(0, 0, 0, 0.1)", borderRadius:"2px"}}>
			<div style={{background:"#000", borderRadius:"20px", display:"flex", justifyContent:"center",margin:"0 10px", height:"320px"}}>
			<Image src={imageBuffer ? URL.createObjectURL(new Blob([imageBuffer])) : "/image/preview.png"} alt="" style={{backgroundSize:"contain"}}/>
			</div>
         
          <div className={styles.card_body}>
            <Text style={{fontWeight:"600", color:"#484848", fontSize:"18px"}}> {name == '' ? "NFT Name" : name}</Text>
            <Text style={{fontWeight:"600", color:"#484848"}}><FaRegHeart/></Text>
            
          </div>
          <hr style={{borderColor:"#eee"}}/>
          <div className={styles.price}>
            <Text style={{fontSize:"14px", color:"#909090", marginBottom:"4px"}}>Price</Text>
            <Text style={{fontSize:"14px", color:"#222", fontWeight:"600"}}>{price} ETH</Text>
          </div>
            
        </Card>
		</div>
		</div>
       
        <Footer/>
    </>
  )
}

export default CreateNewNFT