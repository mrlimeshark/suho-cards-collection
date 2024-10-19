import { writeFileSync } from 'fs';



const cards = [];


// Modify the data
cards.forEach(card => {
  if (card.name === "Mark" || card.name === "Haechan") {
    card.group = "NCT Dream NCT127";
  }
  else if (card.name === "Chenle" || card.name === "Jaemin" || card.name === "Jeno" || card.name === "Jisung"
  || card.name === "Renjun" || card.name === "Riku") {
    card.group = "NCT Dream";
  }
  else if (card.name === "Jaehee" || card.name === "Ryo" || card.name === "Sakuya" || card.name === "Sion") {
    card.group = "NCT WISH";
  }
  else if (card.name === "Doyoung" || card.name === "Jaehyun" || card.name === "Johnny" || card.name === "Jungwoo"
  || card.name === "Taeyong" || card.name === "Yuta") {
    card.group = "NCT NCT127";
  }
  else if (card.name === "Winwin") {
    card.group = "NCT WayV NCT127";
  }
  else if (card.name === "Hendery" || card.name === "Kun" || card.name === "Ten" || card.name === "Xiaojun"
  || card.name === "Yangyang" || card.name === "Riku") {
    card.group = "NCT WayV";
  }
});


const jsonContent = JSON.stringify(cards, null, 2);

//Write the JSON string to a file named 'sorted_cards.json'
writeFileSync('modified_cards.json', jsonContent, 'utf-8');

console.log('Output written to modified_cards.json');
