/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const NFTs = [
    {
        id: 1231124123,
        item: "😀",
        name: "Smiley Face",
        description: "A classic smiley face nft",
    },
    {
        id: 1231124124,
        item: "🤡",
        name: "Clown Face",
        description: "A clown face nft",
    },
    {
        id: 1231124125,
        item: "👽",
        name: "Alien",
        description: "An alien nft",
    },
    {
        id: 1231124126,
        item: "👾",
        name: "Alien Monster",
        description: "An alien monster nft",
    },
    {
        id: 1231124127,
        item: "🤖",
        name: "Robot",
        description: "A robot nft",
    }
]

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT ({ id, item, name, description}) {
    const nft = { id, item, name, description}
    NFTs.push(nft)
    return nft
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    NFTs.forEach(nft => {
        console.log(`
        ------------------------
        ID: ${nft.id}
        Item: ${nft.item}
        Name: ${nft.name}
        Description: ${nft.description}
        ------------------------
        `)
    })
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(`Total NFTs: ${NFTs.length}`)
}

// call your functions below this line

mintNFT({
    id: 1231124128,
    item: "🐵",
    name: "Monkey",
    description: "An Monkey nft",
})
listNFTs()
getTotalSupply()