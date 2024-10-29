import { writeFileSync } from 'fs';

// 1. Declare a list of several img URLs.
const imageUrls = [

];


// Function to generate JSON objects
function generateCards(imageUrls) {
  let count = 0;
  const cards = imageUrls.map(url => {
    count++;
    // 2. Extract the image file name at the end of the http link.
    const fileName = url.split('/').pop().replace('.png', '');

    // 3. Split the extracted String into its components.
    let [id, cardRarityKey, cardGroupRaw, name, extra] = fileName.split('_');
    cardGroupRaw = cardGroupRaw.replace("%20", " ");
    name = name.replace("%20", " ");

    // Exceptions
    if (name === undefined || id == "" || cardRarityKey == "" || cardGroupRaw == "" || name == "") {
      console.log('[',count,'] ',url);
      throw new Error("INCORRECTLY FORMATTED URL");
    }
    else if (extra != undefined) {
      console.log('[',count,'] ', 'POTENTIALLY INCORRECT DATA');
      console.log(id, ' ', cardRarityKey, ' ', cardGroupRaw, ' ', name);
      console.log('');
    }


    // 4. Construct the JSON object.
    const card = {
      id: id,
      cardRarity: cardRarityKey.charAt(0).toUpperCase() + cardRarityKey.slice(1),
      cardGroup: cardRarityKey === "priceless" || cardRarityKey === "altair" ? cardGroupRaw.charAt(0).toUpperCase() + cardGroupRaw.slice(1) : "RIIZE",
      //cardGroup: cardGroupRaw.toLowerCase() === 'nct dream' ? 'NCT Dream' : cardGroupRaw.charAt(0).toUpperCase() + cardGroupRaw.slice(1),
      name: name === 'do' ? 'D.O.' : name.charAt(0).toUpperCase() + name.slice(1), // Capitalize name
      group: "RIIZE", // DON'T FORGET TO CHANGE THIS FOR DIFFERENT GROUPS
      types: "", 
      rarity: "", 
      card_img: url,
      category: "Regular",
      keyword: ""
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
      default:
        console.log('[',count,'] ', id, ' =>', cardRarityKey, '<=');
        throw new Error("INVALID RARITY VALUE");
    }

    const validGroup = ["alexandrite", "amethyst", "aquamarine", "diamond", "emerald", "ruby", "sapphire", "sardonyx",
"cancer", "leo", "libra", "sagittarius", "scorpio", "virgo",
"apocalypse", "bta", "candy", "evil", "fairies", "farewell", "friendship event", "summer", "xoxo", "anniversary",
"riize"];

    // Initial category & keyword pass
    if (card.cardGroup === "Alexandrite" || card.cardGroup === "Amethyst" || card.cardGroup === "Aquamarine" ||
    card.cardGroup === "Diamond" || card.cardGroup === "Emerald" || card.cardGroup === "Ruby" || card.cardGroup === "Sapphire"
    || card.cardGroup === "Sardonyx") {
      card.category = "Gemstone";
      card.keyword = "Event";
    }
    else if (card.cardGroup === "Cancer" || card.cardGroup === "Leo" || card.cardGroup === "Libra" ||
    card.cardGroup === "Sagittarius" || card.cardGroup === "Scorpio" || card.cardGroup === "Virgo") {
      card.category = "Event";
      card.keyword = "Zodiac";
    }
    else if (card.cardRarity === "Priceless" || card.cardRarity === "Altair") {
      card.category = "Event";
      card.keyword = "";
    }

    // Second pass
    function addWhiteSpace (card) {
        if (card.keyword != "") {
            card.keyword += " ";
        }

    }

    if (card.cardGroup === "Papocalypse" || card.cardGroup === "Bapocalypse") {
        addWhiteSpace(card);
        card.keyword += "Apocalypse";
    }
    else if (card.cardGroup === "Pcandy" || card.cardGroup === "Bcandy") {
        addWhiteSpace(card);
        card.keyword += "Candy";
    }
    else if (card.cardGroup === "Cardcaptor" || card.cardGroup === "Pcardcaptor" || card.cardGroup === "Bcardcaptor") {
        addWhiteSpace(card);
        card.keyword += "Card Captor";
    }
    else if (card.cardGroup === "Duoween") {
        addWhiteSpace(card);
        card.keyword += "Halloween";
    }
    else if (card.cardGroup === "Pevil" || card.cardGroup === "Bevil") {
        addWhiteSpace(card);
        card.keyword += "Evil";
    }
    else if (card.cardGroup === "Pfairies" || card.cardGroup === "Bfairies") {
        addWhiteSpace(card);
        card.keyword += "Fairy Fairies";
    }
    else if (card.cardGroup === "Apf" || card.cardGroup === "Papf" || card.cardGroup === "Bapf") {
        addWhiteSpace(card);
        card.keyword += "April Fools";
    }
    else if (card.cardGroup === "Pfriendship Event" || card.cardGroup === "Bfriendship Event") {
        addWhiteSpace(card);
        card.keyword += "Friendship";    
    }
    else if (card.cardGroup === "Psanrio" || card.cardGroup === "Bsanrio") {
        addWhiteSpace(card);
        card.keyword += "Sanrio";
    }
    else if (card.cardGroup === "Soulmate" || card.cardGroup === "Psoulmate" || card.cardGroup === "Bsoulmate") {
        addWhiteSpace(card);
        card.keyword += "Soul Mate";
    }
    else if (card.cardGroup === "Staffmate") {
        addWhiteSpace(card);
        card.keyword += "Staff Mate";
    }
    else if (card.cardGroup === "Stardust Event") {
        addWhiteSpace(card);
        card.keyword += "Star Dust";
    }
    else if (card.cardGroup === "Psummer" || card.cardGroup === "Bsummer") {
        addWhiteSpace(card);
        card.keyword += "Summer";    
    }
    else if (card.cardGroup === "Thanku" || card.cardGroup === "Pthanku" || card.cardGroup === "Bthanku") {
        addWhiteSpace(card);
        card.keyword += "Thank You";    
    }
    else if (card.cardGroup === "Fanmade Xmas") {
        addWhiteSpace(card);
        card.keyword += "Christmas";
    }
    else if (card.cardGroup === "Xmas23") {
        addWhiteSpace(card);
        card.keyword += "Christmas Xmas"; 
    }
    else if (card.cardGroup.toLowerCase === "pxoxo" || card.cardGroup.toLowerCase === "bxoxo") {
        addWhiteSpace(card);
        card.keyword += "XOXO";    
    }
    else {

        if (!validGroup.includes(card.cardGroup.toLowerCase())) {
            console.log('[',count,'] ', 'POTENTIALLY INCORRECT CARDGROUP');
            console.log(id, ' ', cardRarityKey, ' =>', cardGroupRaw, '<= ', name);
            console.log('');
        }

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

