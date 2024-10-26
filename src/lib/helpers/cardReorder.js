import { writeFileSync } from 'fs';

const cards =
[
  {
    "id": "unwrk",
    "cardRarity": "Unordinary",
    "cardGroup": "NCT WISH",
    "name": "Riku",
    "group": "NCT",
    "types": "",
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700951/unwrk_unordinary_nct%20wish_riku.png"
  },
  {
    "id": "unwys",
    "cardRarity": "Unordinary",
    "cardGroup": "NCT WISH",
    "name": "Yushi",
    "group": "NCT",
    "types": "",
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700951/unwys_unordinary_nct%20wish_yushi.png"
  },
  {
    "id": "rnwsk",
    "cardRarity": "Rare",
    "cardGroup": "NCT WISH",
    "name": "Sakuya",
    "group": "NCT",
    "types": "",
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700948/rnwsk_rare_nct%20wish_sakuya.png"
  },
  {
    "id": "onwrk",
    "cardRarity": "Ordinary",
    "cardGroup": "NCT WISH",
    "name": "Riku",
    "group": "NCT",
    "types": "",
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700945/onwrk_ordinary_nct%20wish_riku.png"
  },
  {
    "id": "unwjh",
    "cardRarity": "Unordinary",
    "cardGroup": "NCT WISH",
    "name": "Jaehee",
    "group": "NCT",
    "types": "",
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700945/unwjh_unordinary_nct%20wish_jaehee.png"
  },
  {
    "id": "onwys",
    "cardRarity": "Ordinary",
    "cardGroup": "NCT WISH",
    "name": "Yushi",
    "group": "NCT",
    "types": "",
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700945/onwys_ordinary_nct%20wish_yushi.png"
  },
  {
    "id": "unwsn",
    "cardRarity": "Unordinary",
    "cardGroup": "NCT WISH",
    "name": "Sion",
    "group": "NCT",
    "types": "",
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700945/unwsn_unordinary_nct%20wish_sion.png"
  },
  {
    "id": "onwsn",
    "cardRarity": "Ordinary",
    "cardGroup": "NCT WISH",
    "name": "Sion",
    "group": "NCT",
    "types": "",
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700943/onwsn_ordinary_nct%20wish_sion.png"
  },
  {
    "id": "rnwry",
    "cardRarity": "Rare",
    "cardGroup": "NCT WISH",
    "name": "Ryo",
    "group": "NCT",
    "types": "",
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700942/rnwry_rare_nct%20wish_ryo.png"
  },
  {
    "id": "unwry",
    "cardRarity": "Unordinary",
    "cardGroup": "NCT WISH",
    "name": "Ryo",
    "group": "NCT",
    "types": "",
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700935/unwry_unordinary_nct%20wish_ryo.png"
  },
  {
    "id": "rnwrk",
    "cardRarity": "Rare",
    "cardGroup": "NCT WISH",
    "name": "Riku",
    "group": "NCT",
    "types": "",
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700934/rnwrk_rare_nct%20wish_riku.png"
  },
  {
    "id": "rnwys",
    "cardRarity": "Rare",
    "cardGroup": "NCT WISH",
    "name": "Yushi",
    "group": "NCT",
    "types": "",
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700930/rnwys_rare_nct%20wish_yushi.png"
  },
  {
    "id": "onwjh",
    "cardRarity": "Ordinary",
    "cardGroup": "NCT WISH",
    "name": "Jaehee",
    "group": "NCT",
    "types": "",
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700930/onwjh_ordinary_nct%20wish_jaehee.png"
  },
  {
    "id": "onwry",
    "cardRarity": "Ordinary",
    "cardGroup": "NCT WISH",
    "name": "Ryo",
    "group": "NCT",
    "types": "",
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700928/onwry_ordinary_nct%20wish_ryo.png"
  },
  {
    "id": "rnwjh",
    "cardRarity": "Rare",
    "cardGroup": "NCT WISH",
    "name": "Jaehee",
    "group": "NCT",
    "types": "",
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700926/rnwjh_rare_nct%20wish_jaehee.png"
  },
  {
    "id": "onwsk",
    "cardRarity": "Ordinary",
    "cardGroup": "NCT WISH",
    "name": "Sakuya",
    "group": "NCT",
    "types": "",
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700926/onwsk_ordinary_nct%20wish_sakuya.png"
  },
  {
    "id": "unwsk",
    "cardRarity": "Unordinary",
    "cardGroup": "NCT WISH",
    "name": "Sakuya",
    "group": "NCT",
    "types": "",
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700923/unwsk_unordinary_nct%20wish_sakuya.png"
  },
  {
    "id": "rnwsn",
    "cardRarity": "Rare",
    "cardGroup": "NCT WISH",
    "name": "Sion",
    "group": "NCT",
    "types": "",
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729700919/rnwsn_rare_nct%20wish_sion.png"
  }
]
;

  // Define the order for each property
  //const groupOrder = ["EXO", "EXO-CBX", "EXO-SC", "SuperM", "Soloist"];
  const groupOrder = ["NCT127", "NCT Dream", "WayV", "KUN&XIAOJUN", "NCT WISH", "Soloist"];
  const rarityOrder = ["Ordinary", "Unordinary", "Rare", "Special", "Extraordinary", "Priceless", "Altair"];
  //const nameOrder = ["Baekhyun", "Chen", "Chanyeol", "D.O.", "Kai", "Lay", "Luhan", "Sehun", "Suho", "Tao", "Xiumin"];
  const nameOrder = ["Chenle", "Doyoung", "Haechan", "Hendery", "Jaehee", "Jaehyun", "Jaemin", "Jeno", "Jisung", "Johnny", "Jungwoo",
  "Kun", "Mark", "Renjun", "Riku", "Ryo", "Sakuya", "Sion", "Taeyong", "Ten", "Winwin", "Xiaojun", "Yangyang", "Yushi", "Yuta"];

  // Sorting
  cards.sort((a, b) => {
    const groupDiff = groupOrder.indexOf(a.cardGroup) - groupOrder.indexOf(b.cardGroup);
    if (groupDiff !== 0) return groupDiff;
    
    const rarityDiff = rarityOrder.indexOf(a.cardRarity) - rarityOrder.indexOf(b.cardRarity);
    if (rarityDiff !== 0) return rarityDiff;
    
    return nameOrder.indexOf(a.name) - nameOrder.indexOf(b.name);
  });
  

const jsonContent = JSON.stringify(cards, null, 2);

//Write the JSON string to a file named 'sorted_cards.json'
writeFileSync('sorted_cards.json', jsonContent, 'utf-8');

console.log('Output written to sorted_cards.json');
