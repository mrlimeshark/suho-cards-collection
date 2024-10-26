import { writeFileSync } from 'fs';



const cards = 
[
  {
    "id": "osvdk",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "DK",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881672/osvdk_ordinary_seventeen_dk.png"
  },
  {
    "id": "o2svdk",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "DK",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881629/o2svdk_ordinary_seventeen_dk.png"
  },
  {
    "id": "osvdn",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "Dino",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881688/osvdn_ordinary_seventeen_dino.png"
  },
  {
    "id": "o2svdn",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "Dino",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881649/o2svdn_ordinary_seventeen_dino.png"
  },
  {
    "id": "osldn",
    "cardRarity": "Ordinary",
    "cardGroup": "Soloist",
    "name": "Dino",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725866470/osldn_ordinary_soloist_dino.png"
  },
  {
    "id": "osvhs",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "Hoshi",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881713/osvhs_ordinary_seventeen_hoshi.png"
  },
  {
    "id": "o2svhs",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "Hoshi",
    "group": "Seventeen",
    "types": ["Grass"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881700/o2svhs_ordinary_seventeen_hoshi.png"
  },
  {
    "id": "oslhs",
    "cardRarity": "Ordinary",
    "cardGroup": "Soloist",
    "name": "Hoshi",
    "group": "Seventeen",
    "types": ["Fire"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725866757/oslhs_ordinary_soloist_hoshi.png"
  },
  {
    "id": "osvjh",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "Jeonghan",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881776/osvjh_ordinary_seventeen_jeonghan.png"
  },
  {
    "id": "o2svjh",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "Jeonghan",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881739/o2svjh_ordinary_seventeen_jeonghan.png"
  },
  {
    "id": "osvjn",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "Jun",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881787/osvjn_ordinary_seventeen_jun.png"
  },
  {
    "id": "o2svjn",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "Jun",
    "group": "Seventeen",
    "types": ["Fire"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881762/o2svjn_ordinary_seventeen_jun.png"
  },
  {
    "id": "osljn",
    "cardRarity": "Ordinary",
    "cardGroup": "Soloist",
    "name": "Jun",
    "group": "Seventeen",
    "types": ["Fire"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725867064/osljn_ordinary_soloist_jun.png"
  },
  {
    "id": "osvjs",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "Joshua",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881827/osvjs_ordinary_seventeen_joshua.png"
  },
  {
    "id": "o2svjs",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "Joshua",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881816/o2svjs_ordinary_seventeen_joshua.png"
  },
  {
    "id": "osvmg",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "Mingyu",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881909/osvmg_ordinary_seventeen_mingyu.png"
  },
  {
    "id": "o2svmg",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "Mingyu",
    "group": "Seventeen",
    "types": ["Water"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881849/o2svmg_ordinary_seventeen_mingyu.png"
  },
  {
    "id": "osvsc",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "S.Coups",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881952/osvsc_ordinary_seventeen_s.coups.png"
  },
  {
    "id": "o2svsc",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "S.Coups",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881942/o2svsc_ordinary_seventeen_s.coups.png"
  },
  {
    "id": "osvsk",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "Seungkwan",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881896/osvsk_ordinary_seventeen_seungkwan.png"
  },
  {
    "id": "o2svsk",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "Seungkwan",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881867/o2svsk_ordinary_seventeen_seungkwan.png"
  },
  {
    "id": "osvt8",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "The8",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725882713/osvt8_ordinary_seventeen_the8.png"
  },
  {
    "id": "o2svt8",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "The8",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881964/o2svt8_ordinary_seventeen_the8.png"
  },
  {
    "id": "osvvn",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "Vernon",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725882738/osvvn_ordinary_seventeen_vernon.png"
  },
  {
    "id": "o2svvn",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "Vernon",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725882726/o2svvn_ordinary_seventeen_vernon.png"
  },
  {
    "id": "oslvn",
    "cardRarity": "Ordinary",
    "cardGroup": "Soloist",
    "name": "Vernon",
    "group": "Seventeen",
    "types": ["Fire"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725869811/oslvn_ordinary_soloist_vernon.png"
  },
  {
    "id": "osvwo",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "Wonwoo",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725882765/osvwo_ordinary_seventeen_wonwoo.png"
  },
  {
    "id": "o2svwo",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "Wonwoo",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725882754/o2svwo_ordinary_seventeen_wonwoo.png"
  },
  {
    "id": "o2svwz",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "Woozi",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725882790/o2svwz_ordinary_seventeen_woozi.png"
  },
  {
    "id": "osvwz",
    "cardRarity": "Ordinary",
    "cardGroup": "Seventeen",
    "name": "Woozi",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725882777/osvwz_ordinary_seventeen_woozi.png"
  },
  {
    "id": "oslwo",
    "cardRarity": "Ordinary",
    "cardGroup": "Soloist",
    "name": "Woozi",
    "group": "Seventeen",
    "types": ["Darkness"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725870063/oslwo_ordinary_soloist_woozi.png"
  },
  {
    "id": "usvdk",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "DK",
    "group": "Seventeen",
    "types": ["Dragon"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725880334/usvdk_unordinary_seventeen_dk.png"
  },
  {
    "id": "u2svdk",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "DK",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725880301/u2svdk_unordinary_seventeen_dk.png"
  },
  {
    "id": "usvdn",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "Dino",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725880416/usvdn_unordinary_seventeen_dino.png"
  },
  {
    "id": "u2svdn",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "Dino",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725880380/u2svdn_unordinary_seventeen_dino.png"
  },
  {
    "id": "usldn",
    "cardRarity": "Unordinary",
    "cardGroup": "Soloist",
    "name": "Dino",
    "group": "Seventeen",
    "types": ["Dragon"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725866638/usldn_unordinary_soloist_dino.png"
  },
  {
    "id": "usvhs",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "Hoshi",
    "group": "Seventeen",
    "types": ["Grass"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725880619/usvhs_unordinary_seventeen_hoshi.png"
  },
  {
    "id": "u2svhs",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "Hoshi",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725880525/u2svhs_unordinary_seventeen_hoshi.png"
  },
  {
    "id": "uslhs",
    "cardRarity": "Unordinary",
    "cardGroup": "Soloist",
    "name": "Hoshi",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725866923/uslhs_unordinary_soloist_hoshi.png"
  },
  {
    "id": "usvjh",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "Jeonghan",
    "group": "Seventeen",
    "types": ["Dragon"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725880706/usvjh_unordinary_seventeen_jeonghan.png"
  },
  {
    "id": "u2svjh",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "Jeonghan",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725880666/u2svjh_unordinary_seventeen_jeonghan.png"
  },
  {
    "id": "usvjn",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "Jun",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725880893/usvjn_unordinary_seventeen_jun.png"
  },
  {
    "id": "u2svjn",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "Jun",
    "group": "Seventeen",
    "types": ["Dragon"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725880785/u2svjn_unordinary_seventeen_jun.png"
  },
  {
    "id": "usljn",
    "cardRarity": "Unordinary",
    "cardGroup": "Soloist",
    "name": "Jun",
    "group": "Seventeen",
    "types": ["Fire"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725869477/usljn_unordinary_soloist_jun.png"
  },
  {
    "id": "usvjs",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "Joshua",
    "group": "Seventeen",
    "types": ["Darkness"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881082/usvjs_unordinary_seventeen_joshua.png"
  },
  {
    "id": "u2svjs",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "Joshua",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881018/u2svjs_unordinary_seventeen_joshua.png"
  },
  {
    "id": "usvmg",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "Mingyu",
    "group": "Seventeen",
    "types": ["Dragon"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881122/usvmg_unordinary_seventeen_mingyu.png"
  },
  {
    "id": "u2svmg",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "Mingyu",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881111/u2svmg_unordinary_seventeen_mingyu.png"
  },
  {
    "id": "usvsc",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "S.Coups",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881217/usvsc_unordinary_seventeen_s.coups.png"
  },
  {
    "id": "u2svsc",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "S.Coups",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881176/u2svsc_unordinary_seventeen_s.coups.png"
  },
  {
    "id": "usvsk",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "Seungkwan",
    "group": "Seventeen",
    "types": ["Dragon"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881164/usvsk_unordinary_seventeen_seungkwan.png"
  },
  {
    "id": "u2svsk",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "Seungkwan",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881148/u2svsk_unordinary_seventeen_seungkwan.png"
  },
  {
    "id": "usvt8",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "The8",
    "group": "Seventeen",
    "types": ["Dragon"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881267/usvt8_unordinary_seventeen_the8.png"
  },
  {
    "id": "u2svt8",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "The8",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881246/u2svt8_unordinary_seventeen_the8.png"
  },
  {
    "id": "usvvn",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "Vernon",
    "group": "Seventeen",
    "types": ["Dragon"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881302/usvvn_unordinary_seventeen_vernon.png"
  },
  {
    "id": "u2svvn",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "Vernon",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881284/u2svvn_unordinary_seventeen_vernon.png"
  },
  {
    "id": "uslvn",
    "cardRarity": "Unordinary",
    "cardGroup": "Soloist",
    "name": "Vernon",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725869975/uslvn_unordinary_soloist_vernon.png"
  },
  {
    "id": "usvwo",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "Wonwoo",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881384/usvwo_unordinary_seventeen_wonwoo.png"
  },
  {
    "id": "u2svwo",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "Wonwoo",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881341/u2svwo_unordinary_seventeen_wonwoo.png"
  },
  {
    "id": "usvwz",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "Woozi",
    "group": "Seventeen",
    "types": ["Grass"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881398/usvwz_unordinary_seventeen_woozi.png"
  },
  {
    "id": "u2svwz",
    "cardRarity": "Unordinary",
    "cardGroup": "Seventeen",
    "name": "Woozi",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881368/u2svwz_unordinary_seventeen_woozi.png"
  },
  {
    "id": "uslwo",
    "cardRarity": "Unordinary",
    "cardGroup": "Soloist",
    "name": "Woozi",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725870191/uslwo_unordinary_soloist_woozi.png"
  },
  {
    "id": "rsvdk",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "DK",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725878819/rsvdk_rare_seventeen_dk.png"
  },
  {
    "id": "r2svdk",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "DK",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725878782/r2svdk_rare_seventeen_dk.png"
  },
  {
    "id": "rsvdn",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "Dino",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725878929/rsvdn_rare_seventeen_dino.png"
  },
  {
    "id": "r2svdn",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "Dino",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725878863/r2svdn_rare_seventeen_dino.png"
  },
  {
    "id": "rsldn",
    "cardRarity": "Rare",
    "cardGroup": "Soloist",
    "name": "Dino",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725866553/rsldn_rare_soloist_dino.png"
  },
  {
    "id": "rsvhs",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "Hoshi",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725879051/rsvhs_rare_seventeen_hoshi.png"
  },
  {
    "id": "r2svhs",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "Hoshi",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725878968/r2svhs_rare_seventeen_hoshi.png"
  },
  {
    "id": "rslhs",
    "cardRarity": "Rare",
    "cardGroup": "Soloist",
    "name": "Hoshi",
    "group": "Seventeen",
    "types": ["Fire"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725866810/rslhs_rare_soloist_hoshi.png"
  },
  {
    "id": "rsvjh",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "Jeonghan",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725879115/rsvjh_rare_seventeen_jeonghan.png"
  },
  {
    "id": "r2svjh",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "Jeonghan",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725879079/r2svjh_rare_seventeen_jeonghan.png"
  },
  {
    "id": "rsvjn",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "Jun",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725879200/rsvjn_rare_seventeen_jun.png"
  },
  {
    "id": "r2svjn",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "Jun",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725879151/r2svjn_rare_seventeen_jun.png"
  },
  {
    "id": "rsljn",
    "cardRarity": "Rare",
    "cardGroup": "Soloist",
    "name": "Jun",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725867167/rsljn_rare_soloist_jun.png"
  },
  {
    "id": "rsvjs",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "Joshua",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725879294/rsvjs_rare_seventeen_joshua.png"
  },
  {
    "id": "r2svjs",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "Joshua",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725879238/r2svjs_rare_seventeen_joshua.png"
  },
  {
    "id": "rsvmg",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "Mingyu",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725879402/rsvmg_rare_seventeen_mingyu.png"
  },
  {
    "id": "r2svmg",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "Mingyu",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725879348/r2svmg_rare_seventeen_mingyu.png"
  },
  {
    "id": "rsvsc",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "S.Coups",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725879614/rsvsc_rare_seventeen_s.coups.png"
  },
  {
    "id": "r2svsc",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "S.Coups",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725879573/r2svsc_rare_seventeen_s.coups.png"
  },
  {
    "id": "rsvsk",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "Seungkwan",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725879531/rsvsk_rare_seventeen_seungkwan.png"
  },
  {
    "id": "r2svsk",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "Seungkwan",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725879488/r2svsk_rare_seventeen_seungkwan.png"
  },
  {
    "id": "rsvt8",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "The8",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725879692/rsvt8_rare_seventeen_the8.png"
  },
  {
    "id": "r2svt8",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "The8",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725879655/r2svt8_rare_seventeen_the8.png"
  },
  {
    "id": "rsvvn",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "Vernon",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725879784/rsvvn_rare_seventeen_vernon.png"
  },
  {
    "id": "r2svvn",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "Vernon",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725879731/r2svvn_rare_seventeen_vernon.png"
  },
  {
    "id": "rslvn",
    "cardRarity": "Rare",
    "cardGroup": "Soloist",
    "name": "Vernon",
    "group": "Seventeen",
    "types": ["Fire"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725869862/rslvn_rare_soloist_vernon.png"
  },
  {
    "id": "rsvwo",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "Wonwoo",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725879946/rsvwo_rare_seventeen_wonwoo.png"
  },
  {
    "id": "r2svwo",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "Wonwoo",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725879891/r2svwo_rare_seventeen_wonwoo.png"
  },
  {
    "id": "rsvwz",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "Woozi",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725880014/rsvwz_rare_seventeen_woozi.png"
  },
  {
    "id": "r2svwz",
    "cardRarity": "Rare",
    "cardGroup": "Seventeen",
    "name": "Woozi",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725879982/r2svwz_rare_seventeen_woozi.png"
  },
  {
    "id": "rslwo",
    "cardRarity": "Rare",
    "cardGroup": "Soloist",
    "name": "Woozi",
    "group": "Seventeen",
    "types": ["Darkness"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725870114/rslwo_rare_soloist_woozi.png"
  },
  {
    "id": "ssvdk",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "DK",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725877357/ssvdk_special_seventeen_dk.png"
  },
  {
    "id": "s2svdk",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "DK",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725877315/s2svdk_special_seventeen_dk.png"
  },
  {
    "id": "ssvdn",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "Dino",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725877443/ssvdn_special_seventeen_dino.png"
  },
  {
    "id": "s2svdn",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "Dino",
    "group": "Seventeen",
    "types": ["Water"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725877394/s2svdn_special_seventeen_dino.png"
  },
  {
    "id": "ssldn",
    "cardRarity": "Special",
    "cardGroup": "Soloist",
    "name": "Dino",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725866596/ssldn_special_soloist_dino.png"
  },
  {
    "id": "ssvhs",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "Hoshi",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725877716/ssvhs_special_seventeen_hoshi.png"
  },
  {
    "id": "s2svhs",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "Hoshi",
    "group": "Seventeen",
    "types": ["Water"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725877672/s2svhs_special_seventeen_hoshi.png"
  },
  {
    "id": "sslhs",
    "cardRarity": "Special",
    "cardGroup": "Soloist",
    "name": "Hoshi",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725866863/sslhs_special_soloist_hoshi.png"
  },
  {
    "id": "ssvjh",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "Jeonghan",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725877519/ssvjh_special_seventeen_jeonghan.png"
  },
  {
    "id": "s2svjh",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "Jeonghan",
    "group": "Seventeen",
    "types": ["Water"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725877477/s2svjh_special_seventeen_jeonghan.png"
  },
  {
    "id": "ssvjn",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "Jun",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725877620/ssvjn_special_seventeen_jun.png"
  },
  {
    "id": "s2svjn",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "Jun",
    "group": "Seventeen",
    "types": ["Water"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725877565/s2svjn_special_seventeen_jun.png"
  },
  {
    "id": "ssljn",
    "cardRarity": "Special",
    "cardGroup": "Soloist",
    "name": "Jun",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725867249/ssljn_special_soloist_jun.png"
  },
  {
    "id": "ssvjs",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "Joshua",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725877836/ssvjs_special_seventeen_joshua.png"
  },
  {
    "id": "s2svjs",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "Joshua",
    "group": "Seventeen",
    "types": ["Water"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725877774/s2svjs_special_seventeen_joshua.png"
  },
  {
    "id": "ssvmg",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "Mingyu",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725877936/ssvmg_special_seventeen_mingyu.png"
  },
  {
    "id": "s2svmg",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "Mingyu",
    "group": "Seventeen",
    "types": ["Water"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725877892/s2svmg_special_seventeen_mingyu.png"
  },
  {
    "id": "ssvsc",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "S.Coups",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725878092/ssvsc_special_seventeen_s.coups.png"
  },
  {
    "id": "s2svsc",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "S.Coups",
    "group": "Seventeen",
    "types": ["Water"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725878053/s2svsc_special_seventeen_s.coups.png"
  },
  {
    "id": "ssvsk",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "Seungkwan",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725878016/ssvsk_special_seventeen_seungkwan.png"
  },
  {
    "id": "s2svsk",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "Seungkwan",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725877981/s2svsk_special_seventeen_seungkwan.png"
  },
  {
    "id": "ssvt8",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "The8",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725878186/ssvt8_special_seventeen_the8.png"
  },
  {
    "id": "s2svt8",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "The8",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725878142/s2svt8_special_seventeen_the8.png"
  },
  {
    "id": "ssvvn",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "Vernon",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725878291/ssvvn_special_seventeen_vernon.png"
  },
  {
    "id": "s2svvn",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "Vernon",
    "group": "Seventeen",
    "types": ["Water"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725878247/s2svvn_special_seventeen_vernon.png"
  },
  {
    "id": "sslvn",
    "cardRarity": "Special",
    "cardGroup": "Soloist",
    "name": "Vernon",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725869905/sslvn_special_soloist_vernon.png"
  },
  {
    "id": "ssvwo",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "Wonwoo",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725878460/ssvwo_special_seventeen_wonwoo.png"
  },
  {
    "id": "s2svwo",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "Wonwoo",
    "group": "Seventeen",
    "types": ["Water"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725878427/s2svwo_special_seventeen_wonwoo.png"
  },
  {
    "id": "ssvwz",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "Woozi",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725878553/ssvwz_special_seventeen_woozi.png"
  },
  {
    "id": "s2svwz",
    "cardRarity": "Special",
    "cardGroup": "Seventeen",
    "name": "Woozi",
    "group": "Seventeen",
    "types": ["Water"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725878509/s2svwz_special_seventeen_woozi.png"
  },
  {
    "id": "sslwo",
    "cardRarity": "Special",
    "cardGroup": "Soloist",
    "name": "Woozi",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725870150/sslwo_special_soloist_woozi.png"
  },
  {
    "id": "esvdk",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "DK",
    "group": "Seventeen",
    "types": ["Water"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725875755/esvdk_extraordinary_seventeen_dk.png"
  },
  {
    "id": "e2svdk",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "DK",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725874644/e2svdk_extraordinary_seventeen_dk.png"
  },
  {
    "id": "esvdn",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "Dino",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725875838/esvdn_extraordinary_seventeen_dino.png"
  },
  {
    "id": "e2svdn",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "Dino",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725874743/e2svdn_extraordinary_seventeen_dino.png"
  },
  {
    "id": "esldn",
    "cardRarity": "Extraordinary",
    "cardGroup": "Soloist",
    "name": "Dino",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725866402/esldn_extraordinary_soloist_dino.png"
  },
  {
    "id": "esvhs",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "Hoshi",
    "group": "Seventeen",
    "types": ["Fire"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725876094/esvhs_extraordinary_seventeen_hoshi.png"
  },
  {
    "id": "e2svhs",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "Hoshi",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725874888/e2svhs_extraordinary_seventeen_hoshi.png"
  },
  {
    "id": "eslhs",
    "cardRarity": "Extraordinary",
    "cardGroup": "Soloist",
    "name": "Hoshi",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725866706/eslhs_extraordinary_soloist_hoshi.png"
  },
  {
    "id": "esvjh",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "Jeonghan",
    "group": "Seventeen",
    "types": ["Psychic"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725876198/esvjh_extraordinary_seventeen_jeonghan.png"
  },
  {
    "id": "e2svjh",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "Jeonghan",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725874974/e2svjh_extraordinary_seventeen_jeonghan.png"
  },
  {
    "id": "esvjn",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "Jun",
    "group": "Seventeen",
    "types": ["Water"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725876257/esvjn_extraordinary_seventeen_jun.png"
  },
  {
    "id": "e2svjn",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "Jun",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725875068/e2svjn_extraordinary_seventeen_jun.png"
  },
  {
    "id": "esljn",
    "cardRarity": "Extraordinary",
    "cardGroup": "Soloist",
    "name": "Jun",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725867013/esljn_extraordinary_soloist_jun.png"
  },
  {
    "id": "esvjs",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "Joshua",
    "group": "Seventeen",
    "types": ["Water"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725876311/esvjs_extraordinary_seventeen_joshua.png"
  },
  {
    "id": "e2svjs",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "Joshua",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725875137/e2svjs_extraordinary_seventeen_joshua.png"
  },
  {
    "id": "esvmg",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "Mingyu",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725876404/esvmg_extraordinary_seventeen_mingyu.png"
  },
  {
    "id": "e2svmg",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "Mingyu",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725875297/e2svmg_extraordinary_seventeen_mingyu.png"
  },
  {
    "id": "esvsc",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "S.Coups",
    "group": "Seventeen",
    "types": ["Psychic"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725876504/esvsc_extraordinary_seventeen_s.coups.png"
  },
  {
    "id": "e2svsc",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "S.Coups",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725875427/e2svsc_extraordinary_seventeen_s.coups.png"
  },
  {
    "id": "esvsk",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "Seungkwan",
    "group": "Seventeen",
    "types": ["Fire"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725876558/esvsk_extraordinary_seventeen_seungkwan.png"
  },
  {
    "id": "e2svsk",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "Seungkwan",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725875396/e2svsk_extraordinary_seventeen_seungkwan.png"
  },
  {
    "id": "esvt8",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "The8",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725876619/esvt8_extraordinary_seventeen_the8.png"
  },
  {
    "id": "e2svt8",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "The8",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725875503/e2svt8_extraordinary_seventeen_the8.png"
  },
  {
    "id": "esvvn",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "Vernon",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725876659/esvvn_extraordinary_seventeen_vernon.png"
  },
  {
    "id": "e2svvn",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "Vernon",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725875560/e2svvn_extraordinary_seventeen_vernon.png"
  },
  {
    "id": "eslvn",
    "cardRarity": "Extraordinary",
    "cardGroup": "Soloist",
    "name": "Vernon",
    "group": "Seventeen",
    "types": ["Darkness"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725869716/eslvn_extraordinary_soloist_vernon.png"
  },
  {
    "id": "esvwo",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "Wonwoo",
    "group": "Seventeen",
    "types": ["Fire"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725876708/esvwo_extraordinary_seventeen_wonwoo.png"
  },
  {
    "id": "e2svwo",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "Wonwoo",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725875636/e2svwo_extraordinary_seventeen_wonwoo.png"
  },
  {
    "id": "esvwz",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "Woozi",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725876753/esvwz_extraordinary_seventeen_woozi.png"
  },
  {
    "id": "e2svwz",
    "cardRarity": "Extraordinary",
    "cardGroup": "Seventeen",
    "name": "Woozi",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725875673/e2svwz_extraordinary_seventeen_woozi.png"
  },
  {
    "id": "eslwo",
    "cardRarity": "Extraordinary",
    "cardGroup": "Soloist",
    "name": "Woozi",
    "group": "Seventeen",
    "types": ["Fire"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725870022/eslwo_extraordinary_soloist_woozi.png"
  },
  {
    "id": "fethju",
    "cardRarity": "Priceless",
    "cardGroup": "Pfriendship Event",
    "name": "The8 & Jun",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725886196/fethju_priceless_Pfriendship%20Event_the8_jun.png"
  },
  {
    "id": "fesemo",
    "cardRarity": "Priceless",
    "cardGroup": "Friendship Event",
    "name": "Moonbin & Seungkwan",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725886060/fesemo_priceless_Friendship%20Event_moonbin_seungkwan.png"
  },
  {
    "id": "amedkk",
    "cardRarity": "Priceless",
    "cardGroup": "Amethyst",
    "name": "DK",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725871725/amedkk_priceless_amethyst_dk.png"
  },
  {
    "id": "paqdk",
    "cardRarity": "Priceless",
    "cardGroup": "Aphrodite",
    "name": "DK",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725871797/paqdk_priceless_aphrodite_dk.png"
  },
  {
    "id": "amedin",
    "cardRarity": "Priceless",
    "cardGroup": "Amethyst",
    "name": "Dino",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725871882/amedin_priceless_amethyst_dino.png"
  },
  {
    "id": "sumdin",
    "cardRarity": "Priceless",
    "cardGroup": "Summer Event Bsummer",
    "name": "Dino",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725871949/sumdin_priceless_bsummer_dino.png"
  },
  {
    "id": "xodin",
    "cardRarity": "Priceless",
    "cardGroup": "XOXO Event",
    "name": "Dino",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725872528/xodin_priceless_XOXO_dino.png"
  },
  {
    "id": "alehos",
    "cardRarity": "Priceless",
    "cardGroup": "Alexandrite",
    "name": "Hoshi",
    "group": "Seventeen",
    "types": ["Psychic"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725872603/alehos_priceless_alexandrite_hoshi.png"
  },
  {
    "id": "apfshi",
    "cardRarity": "Priceless",
    "cardGroup": "April Fools Event Apf",
    "name": "Hoshi",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725873104/apfshi_priceless_apf_hoshi.png"
  },
  {
    "id": "xmhsi",
    "cardRarity": "Priceless",
    "cardGroup": "Xmas Xmas23",
    "name": "Hoshi",
    "group": "Seventeen",
    "types": ["Fire"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725873202/xmhsi_priceless_xmas23_hoshi.png"
  },
  {
    "id": "evghan",
    "cardRarity": "Priceless",
    "cardGroup": "Evil Event",
    "name": "Jeonghan",
    "group": "Seventeen",
    "types": ["Darkness"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725873300/evghan_priceless_evil_jeonghan.png"
  },
  {
    "id": "faejhn",
    "cardRarity": "Priceless",
    "cardGroup": "Fairy Fairies Event Bfairies",
    "name": "Jeonghan",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725873347/faejhn_priceless_bfairies_jeonghan.png"
  },
  {
    "id": "libjeo",
    "cardRarity": "Priceless",
    "cardGroup": "Libra",
    "name": "Jeonghan",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725873457/libjeo_priceless_libra_jeonghan.png"
  },
  {
    "id": "royhan",
    "cardRarity": "Priceless",
    "cardGroup": "Royal Event",
    "name": "Jeonghan",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725873512/royhan_priceless_Royal%20Event_jeonghan.png"
  },
  {
    "id": "hbdpocket",
    "cardRarity": "Priceless",
    "cardGroup": "Staff Birthday",
    "name": "Jeonghan",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725873402/hbdpocket_priceless_Staff%20Birthday_jeonghan.png"
  },
  {
    "id": "alejun",
    "cardRarity": "Priceless",
    "cardGroup": "Alexandrite",
    "name": "Jun",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725881927/alejun_priceless_alexandrite_jun.png"
  },
  {
    "id": "srojun",
    "cardRarity": "Priceless",
    "cardGroup": "Psanrio",
    "name": "Jun",
    "group": "Seventeen",
    "types": ["Fire"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725882042/srojun_priceless_psanrio_jun.png"
  },
  {
    "id": "hbdsophiya",
    "cardRarity": "Priceless",
    "cardGroup": "Staff Birthday",
    "name": "Joshua",
    "group": "Seventeen",
    "types": ["Darkness"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725882710/hbdsophiya_priceless_Staff%20Birthday_joshua.png"
  },
  {
    "id": "hbdsophiya2",
    "cardRarity": "Priceless",
    "cardGroup": "Staff Birthday",
    "name": "Joshua",
    "group": "Seventeen",
    "types": ["Water"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729778645/hbdsophiya2_priceless_staff%20birthday_joshua.png"
  },
  {
    "id": "hbdcami",
    "cardRarity": "Priceless",
    "cardGroup": "Staff Birthday",
    "name": "Joshua",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725882512/hbdcami_priceless_Staff%20Birthday_joshua.png"
  },
  {
    "id": "sfmami",
    "cardRarity": "Priceless",
    "cardGroup": "Staffmate Event",
    "name": "Joshua",
    "group": "Seventeen",
    "types": ["Fire"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725882760/sfmami_priceless_staffmate_joshua.png"
  },
  {
    "id": "zuhmgy",
    "cardRarity": "Priceless",
    "cardGroup": "Pcardcaptor",
    "name": "Mingyu",
    "group": "Seventeen",
    "types": ["Water"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725883130/zuhmgy_priceless_pcardcaptor_mingyu.png"
  },
  {
    "id": "diagyu",
    "cardRarity": "Priceless",
    "cardGroup": "Diamond",
    "name": "Mingyu",
    "group": "Seventeen",
    "types": ["Dragon"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725883074/diagyu_priceless_diamond_mingyu.png"
  },
  {
    "id": "btasco",
    "cardRarity": "Priceless",
    "cardGroup": "BTA",
    "name": "S.Coups",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725883258/btasco_priceless_BTA_s.coups.png"
  },
  {
    "id": "leoups",
    "cardRarity": "Priceless",
    "cardGroup": "Leo",
    "name": "S.Coups",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725883364/leoups_priceless_leo_s.coups.png"
  },
  {
    "id": "sarsco",
    "cardRarity": "Priceless",
    "cardGroup": "Sardonyx",
    "name": "S.Coups",
    "group": "Seventeen",
    "types": ["Dragon"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725883470/sarsco_priceless_sardonyx_s.coups.png"
  },
  {
    "id": "hbdtellie",
    "cardRarity": "Priceless",
    "cardGroup": "Staff Birthday",
    "name": "Seungkwan",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725883556/hbdtellie_priceless_Staff%20Birthday_seungkwan.png"
  },
  {
    "id": "cdythe",
    "cardRarity": "Priceless",
    "cardGroup": "Candy Event Bcandy",
    "name": "The8",
    "group": "Seventeen",
    "types": ["Psychic"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725883864/cdythe_priceless_bcandy_the8.png"
  },
  {
    "id": "scothe",
    "cardRarity": "Priceless",
    "cardGroup": "Scorpio",
    "name": "The8",
    "group": "Seventeen",
    "types": ["Fire"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725883960/scothe_priceless_scorpio_the8.png"
  },
  {
    "id": "pset8",
    "cardRarity": "Priceless",
    "cardGroup": "Stardust Event",
    "name": "The8",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725883902/pset8_priceless_Stardust%20Event_the8.png"
  },
  {
    "id": "tyuth8",
    "cardRarity": "Priceless",
    "cardGroup": "Pthanku",
    "name": "The8",
    "group": "Seventeen",
    "types": ["Water"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725884091/tyuth8_priceless_pthanku_the8.png"
  },
  {
    "id": "amever",
    "cardRarity": "Priceless",
    "cardGroup": "Amethyst",
    "name": "Vernon",
    "group": "Seventeen",
    "types": ["Psychic"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725884165/amever_priceless_amethyst_vernon.png"
  },
  {
    "id": "apover",
    "cardRarity": "Priceless",
    "cardGroup": "Apocalypse Event Papocalypse",
    "name": "Vernon",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725884197/apover_priceless_papocalypse_vernon.png"
  },
  {
    "id": "sfmshy",
    "cardRarity": "Priceless",
    "cardGroup": "Staffmate Event",
    "name": "Vernon",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725884239/sfmshy_priceless_staffmate_vernon.png"
  },
  {
    "id": "canwon",
    "cardRarity": "Priceless",
    "cardGroup": "Cancer",
    "name": "Wonwoo",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725884302/canwon_priceless_cancer_wonwoo.png"
  },
  {
    "id": "ubywoo",
    "cardRarity": "Priceless",
    "cardGroup": "Ruby",
    "name": "Wonwoo",
    "group": "Seventeen",
    "types": ["Fire"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725884378/ubywoo_priceless_ruby_wonwoo.png"
  },
  {
    "id": "slmwwo",
    "cardRarity": "Priceless",
    "cardGroup": "Soulmate Event",
    "name": "Wonwoo",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725884344/slmwwo_priceless_soulmate_wonwoo.png"
  },
  {
    "id": "sagwoo",
    "cardRarity": "Priceless",
    "cardGroup": "Sagittarius",
    "name": "Woozi",
    "group": "Seventeen",
    "types": ["Lightning"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725884487/sagwoo_priceless_sagittarius_woozi.png"
  },
  {
    "id": "hbdlou",
    "cardRarity": "Priceless",
    "cardGroup": "Staff Birthday",
    "name": "Woozi",
    "group": "Seventeen",
    "types": ["Water"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725884439/hbdlou_priceless_Staff%20Birthday_woozi.png"
  },
  {
    "id": "sfmnco",
    "cardRarity": "Priceless",
    "cardGroup": "Staffmate Event",
    "name": "Woozi",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725884529/sfmnco_priceless_staffmate_woozi.png"
  },
  {
    "id": "ansvbcs",
    "cardRarity": "Altair",
    "cardGroup": "Anniversary",
    "name": "Vernon & Dino & Seungkwan & BooChanSol",
    "group": "Seventeen",
    "types": ["Grass"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725885647/ansvbcs_altair_anniversary_Vernon%20Dino%20Seungkwan.png"
  },
  {
    "id": "ansvjc",
    "cardRarity": "Altair",
    "cardGroup": "Anniversary",
    "name": "S.Coups & Jeonghan & JeongCheol",
    "group": "Seventeen",
    "types": ["Fire"],
    "rarity": "Amazing Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725885527/ansvjc_altair_anniversary_S.Coups%20Jeonghan.png",
    "foil":"https://res.cloudinary.com/djg9bhuwi/image/upload/v1725213270/card_foil_v3.png"
  },
  {
    "id": "ansvsh",
    "cardRarity": "Altair",
    "cardGroup": "Anniversary",
    "name": "Hoshi & Woozi & SoonHoon",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Trainer Gallery Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725885425/ansvsh_altair_anniversary_Hoshi%20Woozi.png"
  },
  {
    "id": "ansvss",
    "cardRarity": "Altair",
    "cardGroup": "Anniversary",
    "name": "Seungkwan & DK & SeokSoo",
    "group": "Seventeen",
    "types": ["Fighting"],
    "rarity": "Amazing Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725885187/ansvss_altair_anniversary_Seungkwan%20DK.png",
    "foil":"https://res.cloudinary.com/djg9bhuwi/image/upload/v1725213270/card_foil_v3.png"
  },
  {
    "id": "ansvmw",
    "cardRarity": "Altair",
    "cardGroup": "Anniversary",
    "name": "Mingyu & Wonwoo & MinWon",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Amazing Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725885017/ansvmw_altair_anniversary_Mingyu%20Wonwoo.png",
    "foil":"https://res.cloudinary.com/djg9bhuwi/image/upload/v1725213270/card_foil_v3.png"
  },
  {
    "id": "ansvjh",
    "cardRarity": "Altair",
    "cardGroup": "Anniversary",
    "name": "Jun & The8 & JunHao",
    "group": "Seventeen",
    "types": ["Grass"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725884947/ansvjh_altair_anniversary_Jun%20The8.png"
  },
  {
    "id": "foolpic",
    "cardRarity": "Altair",
    "cardGroup": "Fools",
    "name": "Pi Cheolin & Dino",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Trainer Gallery Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725887787/foolpic_altair_fools_Pi%20Cheolin_dino.png"
  },
  {
    "id": "kittyjayjun",
    "cardRarity": "Altair",
    "cardGroup": "Kitties",
    "name": "Jay & Jun",
    "group": "Seventeen",
    "types": ["Metal"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725887398/kittyjayjun_altair_kitties_Jay%20Jun.png"
  },
  {
    "id": "xmasseoksoo",
    "cardRarity": "Altair",
    "cardGroup": "Xmas",
    "name": "Joshua & DK & SeokSoo",
    "group": "Seventeen",
    "types": ["Fairy"],
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725887721/xmasseoksoo_altair_xmas_Joshua%20DK.png"
  },
  {
    "id": "woofhao",
    "cardRarity": "Altair",
    "cardGroup": "Wild Animal",
    "name": "The8",
    "group": "Seventeen",
    "types": ["Darkness"],
    "rarity": "Rare Holo VSTAR",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725883672/woofhao_altair_Wild%20Animal_the8.png"
  },
  {
    "id": "obsdk",
    "cardRarity": "Ordinary",
    "cardGroup": "BSS",
    "name": "DK",
    "group": "BSS",
    "types": ["Darkness"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725864973/obsdk_ordinary_BSS_dk.png"
  },
  {
    "id": "obshs",
    "cardRarity": "Ordinary",
    "cardGroup": "BSS",
    "name": "Hoshi",
    "group": "BSS",
    "types": ["Darkness"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725865054/obshs_ordinary_BSS_hoshi.png"
  },
  {
    "id": "obssk",
    "cardRarity": "Ordinary",
    "cardGroup": "BSS",
    "name": "Seungkwan",
    "group": "BSS",
    "types": ["Darkness"],
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725865120/oBSSk_ordinary_BSS_seungkwan.png"
  },
  {
    "id": "ubsdk",
    "cardRarity": "Unordinary",
    "cardGroup": "BSS",
    "name": "DK",
    "group": "BSS",
    "types": ["Metal"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725865521/ubsdk_unordinary_BSS_dk.png"
  },
  {
    "id": "ubshs",
    "cardRarity": "Unordinary",
    "cardGroup": "BSS",
    "name": "Hoshi",
    "group": "BSS",
    "types": ["Psychic"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725865576/ubshs_unordinary_BSS_hoshi.png"
  },
  {
    "id": "ubssk",
    "cardRarity": "Unordinary",
    "cardGroup": "BSS",
    "name": "Seungkwan",
    "group": "BSS",
    "types": ["Fighting"],
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725865620/uBSSk_unordinary_BSS_seungkwan.png"
  },
  {
    "id": "rbsdk",
    "cardRarity": "Rare",
    "cardGroup": "BSS",
    "name": "DK",
    "group": "BSS",
    "types": ["Darkness"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725865174/rbsdk_rare_BSS_dk.png"
  },
  {
    "id": "rbshs",
    "cardRarity": "Rare",
    "cardGroup": "BSS",
    "name": "Hoshi",
    "group": "BSS",
    "types": ["Water"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725865221/rbshs_rare_BSS_hoshi.png"
  },
  {
    "id": "rbssk",
    "cardRarity": "Rare",
    "cardGroup": "BSS",
    "name": "Seungkwan",
    "group": "BSS",
    "types": ["Fire"],
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725865270/rBSSk_rare_BSS_seungkwan.png"
  },
  {
    "id": "sbsdk",
    "cardRarity": "Special",
    "cardGroup": "BSS",
    "name": "DK",
    "group": "BSS",
    "types": ["Lightning"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725865328/sbsdk_special_BSS_dk.png"
  },
  {
    "id": "sbshs",
    "cardRarity": "Special",
    "cardGroup": "BSS",
    "name": "Hoshi",
    "group": "BSS",
    "types": ["Lightning"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725865394/sbshs_special_BSS_hoshi.png"
  },
  {
    "id": "sbssk",
    "cardRarity": "Special",
    "cardGroup": "BSS",
    "name": "Seungkwan",
    "group": "BSS",
    "types": ["Grass"],
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725865457/sBSSk_special_BSS_seungkwan.png"
  },
  {
    "id": "ebsdk",
    "cardRarity": "Extraordinary",
    "cardGroup": "BSS",
    "name": "DK",
    "group": "BSS",
    "types": ["Fighting"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725864332/ebsdk_extraordinary_BSS_dk.png"
  },
  {
    "id": "ebshs",
    "cardRarity": "Extraordinary",
    "cardGroup": "BSS",
    "name": "Hoshi",
    "group": "BSS",
    "types": ["Metal"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725864845/ebshs_extraordinary_BSS_hoshi.png"
  },
  {
    "id": "ebssk",
    "cardRarity": "Extraordinary",
    "cardGroup": "BSS",
    "name": "Seungkwan",
    "group": "BSS",
    "types": ["Fighting"],
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1725864925/eBSSk_extraordinary_BSS_seungkwan.png"
  }
]
;

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

  if (card.cardGroup == "Staffmate Event") {
    card.cardGroup = "Staffmate";
    card.keyword += " Staff Mate";
  }
  else if (card.cardGroup == "Soulmate Event") {
    card.cardGroup = "Soulmate"
    card.keyword += " Soul Mate";
  }
  else if (card.cardGroup == "Apocalypse Event") {
    card.cardGroup = "Apocalypse";
  }


});




const jsonContent = JSON.stringify(m_cards, null, 2);

//Write the JSON string to a file named 'sorted_cards.json'
writeFileSync('modified_cards.json', jsonContent, 'utf-8');

console.log('Output written to modified_cards.json');
