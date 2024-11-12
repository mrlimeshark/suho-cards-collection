import { writeFileSync } from 'fs';

const cards =
[]
;

  // Define the order for each property
  const groupOrder = 
  //["EXO", "EXO-CBX", "EXO-SC", "SuperM", "Soloist"];
  //["NCT127", "NCT Dream", "WayV", "KUN&XIAOJUN", "NCT WISH", "Soloist"];
  //["Red Velvet", "Irene & Seulgi", "GOT the beat", "Soloist"];
  ["VIXX", "Soloist"];

  const rarityOrder = ["Ordinary", "Unordinary", "Rare", "Special", "Extraordinary", "Priceless", "Altair"];

  const nameOrder = 
  //["Baekhyun", "Chen", "Chanyeol", "D.O.", "Kai", "Lay", "Luhan", "Sehun", "Suho", "Tao", "Xiumin"];
  //["Chenle", "Doyoung", "Haechan", "Hendery", "Jaehee", "Jaehyun", "Jaemin", "Jeno", "Jisung", "Johnny", "Jungwoo", "Kun", "Mark", "Renjun", "Riku", "Ryo", "Sakuya", "Sion", "Taeyong", "Ten", "Winwin", "Xiaojun", "Yangyang", "Yushi", "Yuta"];
  //["Anton", "Eunseok", "Sungchan", "Sohee", "Seunghan", "Shotaro", "Wonbin"];
  //["Giselle", "Karina", "Ningning", "Winter"];
  //["Irene", "Joy", "Seulgi", "Wendy", "Yeri"];
  //["Daehyun", "Jongup", "Yongguk", "Youngjae", "Zelo"]; // B.A.P
  //["Changsub", "Eunkwang", "Hyunsik", "Ilhoon", "Minhyuk", "HUTA", "Peniel", "Sungjae"]; // BTOB
  //["Dongwoo", "Hoya", "L", "Sungjong", "Sungkyu", "Sungyeol", "Woohyun"]; // INFINITE
  ["Hongbin", "Hyuk", "Ken", "Leo", "N", "Ravi"]; // VIXX

  // Sorting
  cards.sort((a, b) => {
    const rarityDiff = rarityOrder.indexOf(a.cardRarity) - rarityOrder.indexOf(b.cardRarity);
    if (rarityDiff !== 0) return rarityDiff;

    const groupDiff = groupOrder.indexOf(a.cardGroup) - groupOrder.indexOf(b.cardGroup);
    if (groupDiff !== 0) return groupDiff;
    
    return nameOrder.indexOf(a.name) - nameOrder.indexOf(b.name);
  });
  

const jsonContent = JSON.stringify(cards, null, 2);

//Write the JSON string to a file named 'sorted_cards.json'
writeFileSync('sorted_cards.json', jsonContent, 'utf-8');

console.log('Output written to sorted_cards.json');
