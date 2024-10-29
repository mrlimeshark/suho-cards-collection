import { writeFileSync } from 'fs';



const cards = [];

function addNewFields(cards) {
  return cards.map(card => {

    if (card.cardGroup === "Alexandrite" || card.cardGroup === "Amethyst" || card.cardGroup === "Aquamarine" ||
    card.cardGroup === "Diamond" || card.cardGroup === "Emerald" || card.cardGroup === "Ruby" || card.cardGroup === "Sapphire"
    || card.cardGroup === "Sardonyx") {
      card.category = "Gemstone";
      card.keyword = "Event ";
    }
    else if (card.cardGroup === "Cancer" || card.cardGroup === "Leo" || card.cardGroup === "Libra" ||
    card.cardGroup === "Sagittarius" || card.cardGroup === "Scorpio" || card.cardGroup === "Virgo") {
      card.category = "Event";
      card.keyword = "Zodiac ";
    }
    else if (card.cardRarity === "Priceless" || card.cardRarity === "Altair") {
      card.category = "Event";
      card.keyword = "";
    }
    else {
      card.category = "Regular";
      card.keyword = "";
    }

    
    return card;
  })
}

let m_cards = addNewFields(cards);

// Modify the data
m_cards.forEach(card => {

  if (card.cardGroup === "BSS") {
    card.group = "Seventeen";
  }
  card.keyword += "SVT"

  if (card.name === "S.Coups") {
    card.keyword += " scoups";
  }

  if (card.name === "Mark" || card.name === "Haechan") {
    card.group = "NCT";

    if (card.cardGroup != "NCT Dream") {
      card.keyword += "Dream"
    }

    if (card.cardGroup != "NCT127") {
      card.keyword += " NCT127"
    }
    card.keyword += " 127";
    
  }
  else if (card.name === "Chenle" || card.name === "Jaemin" || card.name === "Jeno" || card.name === "Jisung"
  || card.name === "Renjun") {
    card.group = "NCT";
    if (card.cardGroup != "NCT Dream") {
      card.keyword += "Dream";
    }
    
  }
  else if (card.name === "Jaehee" || card.name === "Riku"|| card.name === "Ryo" || 
  card.name === "Sakuya" || card.name === "Sion") {
    card.group = "NCT";
    if (card.cardGroup != "NCT WISH") {
      card.keyword += "WISH";
    }
  }
  else if (card.name === "Doyoung" || card.name === "Jaehyun" || card.name === "Johnny" || card.name === "Jungwoo"
  || card.name === "Taeyong" || card.name === "Yuta") {
    card.group = "NCT";
    if (card.cardGroup != "NCT127") {
      card.keyword += "NCT127";
    }
    card.keyword += " 127";
    
  }
  else if (card.name === "Hendery" || card.name === "Kun" || card.name === "Ten" || card.name === "Xiaojun"
  || card.name === "Yangyang" || card.name === "Riku" || card.name === "Winwin") {
    // WinWin is not of NCT127 anymore, I suppose?

    if (card.name === "Winwin") {
      card.name = "WinWin";
    }

    card.group = "NCT";

    if (card.cardGroup != "WayV") {
      card.keyword += "WayV";
    }
    
  }


});




const jsonContent = JSON.stringify(m_cards, null, 2);

//Write the JSON string to a file named 'sorted_cards.json'
writeFileSync('modified_cards.json', jsonContent, 'utf-8');

console.log('Output written to modified_cards.json');
