import { writeFileSync } from 'fs';

const cards =
[]
;

  // Define the order for each property
  //const groupOrder = ["EXO", "EXO-CBX", "EXO-SC", "SuperM", "Soloist"];
  //const groupOrder = ["NCT127", "NCT Dream", "WayV", "KUN&XIAOJUN", "NCT WISH", "Soloist"];
  const groupOrder= [];
  const rarityOrder = ["Ordinary", "Unordinary", "Rare", "Special", "Extraordinary", "Priceless", "Altair"];
  //const nameOrder = ["Baekhyun", "Chen", "Chanyeol", "D.O.", "Kai", "Lay", "Luhan", "Sehun", "Suho", "Tao", "Xiumin"];
  //const nameOrder = ["Chenle", "Doyoung", "Haechan", "Hendery", "Jaehee", "Jaehyun", "Jaemin", "Jeno", "Jisung", "Johnny", "Jungwoo", "Kun", "Mark", "Renjun", "Riku", "Ryo", "Sakuya", "Sion", "Taeyong", "Ten", "Winwin", "Xiaojun", "Yangyang", "Yushi", "Yuta"];
  //const nameOrder = ["Anton", "Eunseok", "Sungchan", "Sohee", "Seunghan", "Shotaro", "Wonbin"];
  const nameOrder = ["Giselle", "Karina", "Ningning", "Winter"];

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
