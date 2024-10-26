import { writeFileSync } from 'fs';

// 1. Declare a list of several img URLs.
const imageUrls = [
  "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700951/unwrk_unordinary_nct%20wish_riku.png",
  "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700951/unwys_unordinary_nct%20wish_yushi.png",
  "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700948/rnwsk_rare_nct%20wish_sakuya.png",
  "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700945/onwrk_ordinary_nct%20wish_riku.png",
  "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700945/unwjh_unordinary_nct%20wish_jaehee.png",
  "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700945/onwys_ordinary_nct%20wish_yushi.png",
  "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700945/unwsn_unordinary_nct%20wish_sion.png",
  "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700943/onwsn_ordinary_nct%20wish_sion.png",
  "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700942/rnwry_rare_nct%20wish_ryo.png",
  "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700935/unwry_unordinary_nct%20wish_ryo.png",
  "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700934/rnwrk_rare_nct%20wish_riku.png",
  "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700930/rnwys_rare_nct%20wish_yushi.png",
  "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700930/onwjh_ordinary_nct%20wish_jaehee.png",
  "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700928/onwry_ordinary_nct%20wish_ryo.png",
  "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700926/rnwjh_rare_nct%20wish_jaehee.png",
  "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700926/onwsk_ordinary_nct%20wish_sakuya.png",
  "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700923/unwsk_unordinary_nct%20wish_sakuya.png",
  "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700919/rnwsn_rare_nct%20wish_sion.png"
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
      cardGroup: "NCT WISH",
      //cardGroup: cardGroupRaw.toLowerCase() === 'nct dream' ? 'NCT Dream' : cardGroupRaw.charAt(0).toUpperCase() + cardGroupRaw.slice(1),
      name: name === 'do' ? 'D.O.' : name.charAt(0).toUpperCase() + name.slice(1), // Capitalize name
      group: "NCT", // DON'T FORGET TO CHANGE THIS FOR DIFFERENT GROUPS
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
    /*
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
        card.group = "NCT WISH";
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
      case "yushi":
        card.group = "NCT WISH"               
      }
      */

    return card;
  });

  const jsonContent = JSON.stringify(cards, null, 2);

  //Write the JSON string to a file named 'sorted_cards.json'
  writeFileSync('card_data.json', jsonContent, 'utf-8');

  console.log('Output written to card_data.json');
}

// Call the function with the image URLs
generateCards(imageUrls);

