import { writeFileSync } from 'fs';

// 1. Declare a list of several img URLs.
const imageUrls =
[]
;


// Function to generate JSON objects
function generateCards(imageUrls) {
  let count = 0;
  const cards = imageUrls.map(url => {
    count++;
    // 2. Extract the image file name at the end of the http link.
    const fileName = url.split('/').pop().replace('.png', '');

    // 3. Split the extracted String into its components.
    let words = fileName.split('_');
    let artist = words[3];
    // words = [aaaaa, priceless, red velvet, seulgi, etc.]

    // Rectify group names.
    // words[2] is cardGroup.
    switch (words[2].toLowerCase()) {
      case "got":
        words[2] = "GOT the beat";
        artist = words[5];
        break;
      case "red":
        words[2] = "Red Velvet";
        artist = words[4];
        break;
      case "irene":
        words[2] = "Irene & Seulgi";
        artist = words[4];
        break;
      case "friendship":
        words[2] = "Friendship Event";
        artist = "Irene & Seulgi";
        break;
      case "stardust":
        words[2] = "Stardust Event";
        artist = words[4];
        break;
      case "royal":
        words[2] = "Royal Event";
        artist = words[4];
        break;
    }
    words[2] = words[2].replace("%20", " ");
    artist = artist.replace("%20", " ");

    // Exceptions
    if (artist === undefined || words[0] == "" || words[1] == "" || words[2] == "") {
      console.log('[',count,'] ',url);
      throw new Error("INCORRECTLY FORMATTED URL");
    }
    else if (words[4] != undefined) {
      console.log('[',count,'] ', 'POTENTIALLY INCORRECT DATA');
      console.log(words[0], ' ', words[1], ' ', words[2], ' ', artist);
      console.log('');
    }


    // 4. Construct the JSON object.
    const card = {
      id: words[0],
      cardRarity: words[1].charAt(0).toUpperCase() + words[1].slice(1), // Capitalise cardRarity
      //cardGroup: words[1] === "priceless" || words[1] === "altair" ? words[2].charAt(0).toUpperCase() + words[2].slice(1).toUpperCase() : "Red Velvet",
      cardGroup: words[2].charAt(0).toUpperCase() + words[2].slice(1),
      name: artist === 'do' ? 'D.O.' : artist.charAt(0).toUpperCase() + artist.slice(1), // Capitalise name
      group: "Red Velvet", // DON'T FORGET TO CHANGE THIS FOR DIFFERENT GROUPS
      types: "", // Pokémon type
      rarity: "", // Pokémon TCG rarity
      card_img: url,
      category: "Regular",
      keyword: ""
    };

    // Determine type and rarity based on card rarity
    switch (words[1].toLowerCase()) {
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
        console.log('[',count,'] ', words[0], ' =>', words[1], '<=');
        throw new Error("INVALID RARITY VALUE");
    }

    const validGroup = ["alexandrite", "amethyst", "aquamarine", "diamond", "emerald", "ruby", "sapphire", "sardonyx",
"cancer", "leo", "libra", "sagittarius", "scorpio", "virgo",
"anniversary", "apocalypse", "bta", "candy", "evil", "fairies", "farewell", "halloween", "royal event", "sanrio", "summer", "xoxo",
 "aespa", "red velvet", "riize", "got the beat"];

    // Initial category & keyword pass
    if (card.cardGroup === "") {
      card.cardGroup = "Red Velvet";
    }
    else if (card.cardGroup === "Alexandrite" || card.cardGroup === "Amethyst" || card.cardGroup === "Aquamarine" ||
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



    function addWhiteSpace (card) {
        if (card.keyword != "") {
            card.keyword += " ";
        }
    }

    function checkPB (card) {
      addWhiteSpace(card);
      const c = card.cardGroup.charAt(0).toLowerCase();
      if ( c === "p") {
        card.keyword += "Patreon";
      } else if ( c === "b") {
        card.keyword += "Booster";
      }
    }

    // Second pass
    if (card.cardGroup.toLowerCase === "bta") {
      card.cardGroup = "BTA";
    }


    if (card.cardGroup === "Papocalypse" || card.cardGroup === "Bapocalypse") {
        addWhiteSpace(card);
        card.keyword += "Apocalypse";
        checkPB(card);
    }
    else if (card.cardGroup === "Pcandy" || card.cardGroup === "Bcandy") {
        addWhiteSpace(card);
        card.keyword += "Candy";
        checkPB(card);
    }
    else if (card.cardGroup === "Cardcaptor" || card.cardGroup === "Pcardcaptor" || card.cardGroup === "Bcardcaptor") {
        addWhiteSpace(card);
        card.keyword += "Card Captor";
        checkPB(card);
    }
    else if (card.cardGroup === "Duoween") {
        addWhiteSpace(card);
        card.keyword += "Halloween";
        checkPB(card);
    }
    else if (card.cardGroup === "Phalloween" || card.cardGroup === "Bhalloween") {
      addWhiteSpace(card);
      card.keyword += "Halloween";
      checkPB(card);
    }
    else if (card.cardGroup === "Pevil" || card.cardGroup === "Bevil") {
        addWhiteSpace(card);
        card.keyword += "Evil";
        checkPB(card);
    }
    else if (card.cardGroup === "Pfairies" || card.cardGroup === "Bfairies") {
        addWhiteSpace(card);
        card.keyword += "Fairy Fairies";
        checkPB(card);
    }
    else if (card.cardGroup === "Apf" || card.cardGroup === "Papf" || card.cardGroup === "Bapf") {
        addWhiteSpace(card);
        card.keyword += "April Fools";
        checkPB(card);
    }
    else if (card.cardGroup === "Pfriendship Event" || card.cardGroup === "Bfriendship Event") {
        addWhiteSpace(card);
        card.keyword += "Friendship";    
        checkPB(card);
    }
    else if (card.cardGroup === "Psanrio" || card.cardGroup === "Bsanrio") {
        addWhiteSpace(card);
        card.keyword += "Sanrio";
        checkPB(card);
    }
    else if (card.cardGroup === "Soulmate" || card.cardGroup === "Psoulmate" || card.cardGroup === "Bsoulmate") {
        addWhiteSpace(card);
        card.keyword += "Soul Mate";
        checkPB(card);
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
        checkPB(card);
    }
    else if (card.cardGroup === "Thanku" || card.cardGroup === "Pthanku" || card.cardGroup === "Bthanku") {
        addWhiteSpace(card);
        card.keyword += "Thank You";
        checkPB(card);    
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
        checkPB(card);
    }
    else {
        if (!validGroup.includes(card.cardGroup.toLowerCase())) {
            console.log('[',count,'] ', 'POTENTIALLY INCORRECT CARDGROUP');
            console.log(words[0], ' ', words[1], ' =>', words[2], '<= ', words[3]);
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

