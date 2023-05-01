import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button, FormControl, FormHelperText, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text, Textarea } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {ethers, providers} from 'ethers'
import { NFTStorage, File } from 'nft.storage';
declare var window: any;

import MarketplaceAbi from './datasmc/abi/marketplaceAbi.json';
import MarketplaceAddress from './datasmc/address/marketplaceAddress.json';
import NFTAbi from './datasmc/abi/nftAbi.json';
import NFTAddress from './datasmc/address/nftAddress.json';


const createNewNFT = () => {
  
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
	};
  console.log(imageBuffer)


  console.log(name, description, price, image)
  
	const createNFT = async () => {

		const nftstorage = new NFTStorage({
			token:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEQ2Yzk0QzMxRTkxMTU4MTVEQjNGMzg0ODlCOWM0RTg4QTU0OGQzOGEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3NzEyMTMyMzIxMCwibmFtZSI6Ik5GVF9TVE9SQUdFX0tFWSJ9.0cZ-vUh5ouxp_TUVCThNhRA_YKmixC2Fwh5WEfTh-J8' ??
				'',
		});

		if (imageBuffer) {
			console.log(imageBuffer);
			const { ipnft } = await nftstorage.store({
				name,
				description,
				price,
				image: new File([imageBuffer], 'image', { type: 'image/png' }),
			});
			console.log(ipnft);

			const ipfsURL = `https://ipfs.io/ipfs/${ipnft}/metadata.json`;
			console.log(ipfsURL);

			// mint nft
			await (await nft.mint(ipfsURL)).wait();
			console.log(nft);
			// get tokenId of new nft
			const id = await nft.tokenCount();
			// approve marketplace to spend nft
      const idToken = parseInt(id._hex, 16)
     

			await (await nft.setApprovalForAll(marketplace.address, true)).wait();
			// add nft to marketplace

			// sử dụng biến price ở đây
			const listingPrice = ethers.utils.parseEther(price.toString());
			await (await marketplace.makeItem(nft.address, idToken, listingPrice)).wait();
		}
	};

  
	useEffect(() => {
		loadMarketplaceItems();
	}, []);

	const [items, setItems] = useState([]);
	const loadMarketplaceItems = async () => {
		// Load all unsold items
		if (marketplace !== undefined) {
			const itemCount = await marketplace.itemCount();
			let items: any = [];
			for (let i = 1; i <= itemCount; i++) {
				const item = await marketplace.items(i);
			
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
			setItems(items);
		}
	};
	console.log(items);
  return (
    <>
        <Navbar/>
        <div>
            <Text>Create Your NFT</Text>
            <Text>Upload File</Text>
                        <FormControl>
           
            <Input type='file'  onChange={uploadToIPFS}/>

            <FormLabel>Item Name</FormLabel>
            <Input type='text' onChange={(e: any) => setName(e.target.value)}/>
            <FormLabel>Description</FormLabel>
            <Textarea placeholder='Here is a sample placeholder' onChange={(e: any) => setDescription(e.target.value)}/>
            <FormLabel>Price</FormLabel>
                        <NumberInput max={10} min={0} onChange={(e: any) => setPrice(e)}>
                <NumberInputField />
                <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <FormHelperText>We'll never share your email.</FormHelperText>

            <Button
            mt={4}
            colorScheme='teal'
            // isLoading={props.isSubmitting}
            type='submit'
            onClick={createNFT}
          >
            Submit
          </Button>
            </FormControl>
        </div>
        <Footer/>
    </>
  )
}

export default createNewNFT