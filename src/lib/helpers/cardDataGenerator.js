// 1. Declare a list of several img URLs.
const imageUrls = [
    "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725053091/e2exbh_extraordinary_exo_baekhyun.png",
    "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725053097/e2excn_extraordinary_exo_chen.png",
    "https://res.cloudinary.com/djg9bhuwi/image/upload/v1724977870/e2excy_extraordinary_exo_chanyeol.png",
    "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725053106/e2exdo_extraordinary_exo_do.png",
    "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725053118/e2exka_extraordinary_exo_kai.png",
    "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725053124/e2exla_extraordinary_exo_lay.png",
    "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725053131/e2exlh_extraordinary_exo_luhan.png",
    "https://res.cloudinary.com/djg9bhuwi/image/upload/v1724977782/e2exsh_extraordinary_exo_sehun.png",
    "https://res.cloudinary.com/djg9bhuwi/image/upload/v1724977950/e2exsu_extraordinary_exo_suho.png",
"https://res.cloudinary.com/djg9bhuwi/image/upload/v1725053137/e2exto_extraordinary_exo_tao.png"
    
    
];

// Helper function to map the card rarity to display names
const rarityMap = {
  "ordinary": "Ordinary",
    "unordinary": "Unordinary",
  "rare": "Rare",
  "special": "Special",
  "extraordinary": "Extraordinary",
    "priceless": "Priceless",
    "altair": "Altair"
};

// Function to generate JSON objects
function generateCards(imageUrls) {
  const cards = imageUrls.map(url => {
    // 2. Extract the image file name at the end of the http link.
    const fileName = url.split('/').pop().replace('.png', '');

    // 3. Split the extracted String into its components.
    const [id, cardRarityKey, cardGroupRaw, name] = fileName.split('_');

    // 4. Construct the JSON object.
    const card = {
      id: id,
      cardRarity: rarityMap[cardRarityKey.toLowerCase()],
      cardGroup: cardGroupRaw.toLowerCase() === 'exo' ? 'EXO' : cardGroupRaw.charAt(0).toUpperCase() + cardGroupRaw.slice(1),
      name: name === 'do' ? 'D.O.' : name.charAt(0).toUpperCase() + name.slice(1), // Capitalize name
      group: "EXO", // DON'T FORGET TO CHANGE THIS FOR DIFFERENT GROUPS
      types: [], 
      rarity: "", 
      card_img: url
    };

    // Determine type and rarity based on card rarity
    switch (cardRarityKey.toLowerCase()) {
      case "ordinary":
        card.rarity = "Common";
        break;
      case "unordinary":
        card.rarity = "Rare Secret";
        break;
      case "rare":
        card.rarity = "Rare Holo";
        break;
      case "special":
        card.rarity = "Rare Holo Cosmos";
        break;
      case "extraordinary":
        card.rarity = "Radiant Rare";
        break;
      case "priceless":
        card.rarity = "Rare Shiny";
        break;      
      case "altair":
          card.rarity = "Trainer Gallery Rare Holo";
          break;
    }

    return card;
  });

  // 5. Output into the console log.
    console.log(JSON.stringify(cards, null, 2));
}

// Call the function with the image URLs
generateCards(imageUrls);
