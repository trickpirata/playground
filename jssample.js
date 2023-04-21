// create a variable to hold your NFT's
var nfts = [] 

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (nftHash, nftName) {
    const nft = {
        hash: nftHash,
        name: nftName
    }
    nfts.push(nft)
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    nfts.forEach( (nft) => {
        console.log("NFT Hash: " + nft.hash + "\nNFT Name: " + nft.name)
    })
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(nfts.length)
}

// call your functions below this line
mintNFT("asdasdasdasdas", "John Doe")
mintNFT("123", "Jane Doe")
listNFTs()
getTotalSupply()
