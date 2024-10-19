import { writeFileSync } from 'fs';

// 1. Declare a list of several img URLs.
const imageUrls = [
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
      //cardGroup: "placeholder",
      cardGroup: cardGroupRaw.toLowerCase() === 'nct dream' ? 'NCT Dream' : cardGroupRaw.charAt(0).toUpperCase() + cardGroupRaw.slice(1),
      name: name === 'do' ? 'D.O.' : name.charAt(0).toUpperCase() + name.slice(1), // Capitalize name
      group: "NCT placeholder", // DON'T FORGET TO CHANGE THIS FOR DIFFERENT GROUPS
      types: "", 
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

    
    // Why does this NCT lot have so many freakin members bloody hell
    switch (name.toLowerCase()) {
      case "chenle":
        card.group = "NCT Dream";
        break;
      case "doyoung":
        card.group = "NCT NCT127";
        break;
      case "haechan":
        card.group = "NCT Dream NCT127";
        break;
      case "hendery":
        card.group = "NCT WayV";
        break;
      case "jaehyun":
        card.group = "NCT NCT127";
        break;
      case "jaehee":
        card.group = "NCT WISH";
        break;
      case "jaemin":
        card.group = "NCT Dream";
        break;
      case "jeno":
        card.group = "NCT Dream";
        break;
      case "jisung":
        card.group = "NCT Dream";
        break;
      case "johnny":
        card.group = "NCT NCT127";
        break;
      case "jungwoo":
        card.group = "NCT NCT127";
        break;
      case "kun":
        card.group = "NCT WayV";
        break;
      case "mark":
        card.group = "NCT Dream NCT127";
        break;
      case "renjun":
        card.group = "NCT Dream";
        break;
      case "riku":
        card.group = "NCT Dream";
        break;
      case "ryo":
        card.group = "NCT WISH";
        break;
      case "sakuya":
        card.group = "NCT WISH";
        break;
      case "sion":
        card.group = "NCT WISH";
        break;
      case "taeyong":
        card.group = "NCT NCT127";
        break;
      case "ten":
        card.group = "NCT WayV";
        break;
      case "winwin":
        card.group = "NCT WayV NCT127";
        break;
      case "xiaojun":
        card.group = "NCT WayV";
        break;
      case "yangyang":
        card.group = "NCT WayV";
        break;
      case "yuta":
        card.group = "NCT NCT127";
        break;               
      }
      

    return card;
  });

  const jsonContent = JSON.stringify(cards, null, 2);

  //Write the JSON string to a file named 'sorted_cards.json'
  writeFileSync('card_data.json', jsonContent, 'utf-8');

  console.log('Output written to card_data.json');
}

// Call the function with the image URLs
generateCards(imageUrls);

