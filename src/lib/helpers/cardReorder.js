import { writeFileSync } from 'fs';

const cards =
[
  {
    "id": "eriwb",
    "cardRarity": "Extraordinary",
    "cardGroup": "RIIZE",
    "name": "Wonbin",
    "group": "RIIZE",
    "types": "",
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945245/eriwb_extraordinary_riize_wonbin_nqsjyn.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "erist",
    "cardRarity": "Extraordinary",
    "cardGroup": "RIIZE",
    "name": "Shotaro",
    "group": "RIIZE",
    "types": "",
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945232/erist_extraordinary_riize_shotaro_kiy3ip.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "erisn",
    "cardRarity": "Extraordinary",
    "cardGroup": "RIIZE",
    "name": "Seunghan",
    "group": "RIIZE",
    "types": "",
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945219/erisn_extraordinary_riize_seunghan_acuhtj.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "erish",
    "cardRarity": "Extraordinary",
    "cardGroup": "RIIZE",
    "name": "Sohee",
    "group": "RIIZE",
    "types": "",
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945204/erish_extraordinary_riize_sohee_vqfior.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "erisg",
    "cardRarity": "Extraordinary",
    "cardGroup": "RIIZE",
    "name": "Sungchan",
    "group": "RIIZE",
    "types": "",
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945141/erisg_extraordinary_riize_sungchan_jrz9ao.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "eriek",
    "cardRarity": "Extraordinary",
    "cardGroup": "RIIZE",
    "name": "Eunseok",
    "group": "RIIZE",
    "types": "",
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945128/eriek_extraordinary_riize_eunseok_i475c2.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "erian",
    "cardRarity": "Extraordinary",
    "cardGroup": "RIIZE",
    "name": "Anton",
    "group": "RIIZE",
    "types": "",
    "rarity": "Radiant Rare",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945114/erian_extraordinary_riize_anton_dgyrsg.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "sriwb",
    "cardRarity": "Special",
    "cardGroup": "RIIZE",
    "name": "Wonbin",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945097/sriwb_special_riize_wonbin_gcml7c.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "srist",
    "cardRarity": "Special",
    "cardGroup": "RIIZE",
    "name": "Shotaro",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945084/srist_special_riize_shotaro_tu0ikt.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "srisn",
    "cardRarity": "Special",
    "cardGroup": "RIIZE",
    "name": "Seunghan",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945073/srisn_special_riize_seunghan_yl2alw.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "srish",
    "cardRarity": "Special",
    "cardGroup": "RIIZE",
    "name": "Sohee",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945060/srish_special_riize_sohee_mm9vxd.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "srisg",
    "cardRarity": "Special",
    "cardGroup": "RIIZE",
    "name": "Sungchan",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945049/srisg_special_riize_sungchan_ikupdo.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "sriek",
    "cardRarity": "Special",
    "cardGroup": "RIIZE",
    "name": "Eunseok",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945040/sriek_special_riize_eunseok_dg59hu.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "srian",
    "cardRarity": "Special",
    "cardGroup": "RIIZE",
    "name": "Anton",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Holo Cosmos",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945027/srian_special_riize_anton_vawkgw.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "rriwb",
    "cardRarity": "Rare",
    "cardGroup": "RIIZE",
    "name": "Wonbin",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729944967/rriwb_rare_riize_wonbin_ebnw0h.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "rrist",
    "cardRarity": "Rare",
    "cardGroup": "RIIZE",
    "name": "Shotaro",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729944955/rrist_rare_riize_shotaro_sqzyiy.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "rrisn",
    "cardRarity": "Rare",
    "cardGroup": "RIIZE",
    "name": "Seunghan",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729944945/rrisn_rare_riize_seunghan_vqwubr.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "rrish",
    "cardRarity": "Rare",
    "cardGroup": "RIIZE",
    "name": "Sohee",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729944865/rrish_rare_riize_sohee_urls24.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "rrisg",
    "cardRarity": "Rare",
    "cardGroup": "RIIZE",
    "name": "Sungchan",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729944849/rrisg_rare_riize_sungchan_cr8rl0.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "rriek",
    "cardRarity": "Rare",
    "cardGroup": "RIIZE",
    "name": "Eunseok",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729944822/rriek_rare_riize_eunseok_mul1hc.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "rrian",
    "cardRarity": "Rare",
    "cardGroup": "RIIZE",
    "name": "Anton",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729944799/rrian_rare_riize_anton_gqh56f.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "uriwb",
    "cardRarity": "Unordinary",
    "cardGroup": "RIIZE",
    "name": "Wonbin",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729944773/uriwb_unordinary_riize_wonbin_hpkgip.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "urist",
    "cardRarity": "Unordinary",
    "cardGroup": "RIIZE",
    "name": "Shotaro",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729944753/urist_unordinary_riize_shotaro_zyirty.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "urisn",
    "cardRarity": "Unordinary",
    "cardGroup": "RIIZE",
    "name": "Seunghan",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729944728/urisn_unordinary_riize_seunghan_uysfbs.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "urish",
    "cardRarity": "Unordinary",
    "cardGroup": "RIIZE",
    "name": "Sohee",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729944703/urish_unordinary_riize_sohee_ij65ql.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "urisg",
    "cardRarity": "Unordinary",
    "cardGroup": "RIIZE",
    "name": "Sungchan",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729944692/urisg_unordinary_riize_sungchan_jwbd96.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "uriek",
    "cardRarity": "Unordinary",
    "cardGroup": "RIIZE",
    "name": "Eunseok",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729944684/uriek_unordinary_riize_eunseok_gln9yt.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "urian",
    "cardRarity": "Unordinary",
    "cardGroup": "RIIZE",
    "name": "Anton",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Secret",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729944675/urian_unordinary_riize_anton_e1kadz.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "oriwb",
    "cardRarity": "Ordinary",
    "cardGroup": "RIIZE",
    "name": "Wonbin",
    "group": "RIIZE",
    "types": "",
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729944666/oriwb_ordinary_riize_wonbin_kftxrn.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "orist",
    "cardRarity": "Ordinary",
    "cardGroup": "RIIZE",
    "name": "Shotaro",
    "group": "RIIZE",
    "types": "",
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729944658/orist_ordinary_riize_shotaro_ut90us.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "orisn",
    "cardRarity": "Ordinary",
    "cardGroup": "RIIZE",
    "name": "Seunghan",
    "group": "RIIZE",
    "types": "",
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729944652/orisn_ordinary_riize_seunghan_ahcg9u.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "orish",
    "cardRarity": "Ordinary",
    "cardGroup": "RIIZE",
    "name": "Sohee",
    "group": "RIIZE",
    "types": "",
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729944639/orish_ordinary_riize_sohee_xxevcl.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "orisg",
    "cardRarity": "Ordinary",
    "cardGroup": "RIIZE",
    "name": "Sungchan",
    "group": "RIIZE",
    "types": "",
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729944633/orisg_ordinary_riize_sungchan_jldybs.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "oriek",
    "cardRarity": "Ordinary",
    "cardGroup": "RIIZE",
    "name": "Eunseok",
    "group": "RIIZE",
    "types": "",
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729944627/oriek_ordinary_riize_eunseok_dusu98.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "orian",
    "cardRarity": "Ordinary",
    "cardGroup": "RIIZE",
    "name": "Anton",
    "group": "RIIZE",
    "types": "",
    "rarity": "Common",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729944575/orian_ordinary_riize_anton_ljcmjk.png",
    "category": "Regular",
    "keyword": ""
  },
  {
    "id": "xoton",
    "cardRarity": "Priceless",
    "cardGroup": "XOXO",
    "name": "Anton",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729946571/xoton_priceless_XOXO_anton_xvuslm.png",
    "category": "Event",
    "keyword": ""
  },
  {
    "id": "xmesk",
    "cardRarity": "Priceless",
    "cardGroup": "Xmas23",
    "name": "Eunseok",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729946506/xmesk_priceless_xmas23_eunseok_ctpxnb.png",
    "category": "Event",
    "keyword": "Christmas Xmas"
  },
  {
    "id": "virgch",
    "cardRarity": "Priceless",
    "cardGroup": "Virgo",
    "name": "Sungchan",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729946469/virgch_priceless_virgo_sungchan_qteyrj.png",
    "category": "Event",
    "keyword": "Zodiac"
  },
  {
    "id": "sumngc",
    "cardRarity": "Priceless",
    "cardGroup": "Psummer",
    "name": "Sungchan",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729946426/sumngc_priceless_psummer_sungchan_c774t9.png",
    "category": "Event",
    "keyword": "Summer"
  },
  {
    "id": "sroseu",
    "cardRarity": "Priceless",
    "cardGroup": "Psanrio",
    "name": "Seunghan",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729946365/sroseu_priceless_psanrio_seunghan_jm8krc.png",
    "category": "Event",
    "keyword": "Sanrio"
  },
  {
    "id": "slmscn",
    "cardRarity": "Priceless",
    "cardGroup": "Soulmate",
    "name": "Sungchan",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729946321/slmscn_priceless_soulmate_sungchan_zt5p29.png",
    "category": "Event",
    "keyword": "Soul Mate"
  },
  {
    "id": "scosoh",
    "cardRarity": "Priceless",
    "cardGroup": "Scorpio",
    "name": "Sohee",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729946045/scosoh_priceless_scorpio_sohee_diphdn.png",
    "category": "Event",
    "keyword": "Zodiac"
  },
  {
    "id": "sapsun",
    "cardRarity": "Priceless",
    "cardGroup": "Sapphire",
    "name": "Sungchan",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729946016/sapsun_priceless_sapphire_sungchan_msxs7l.png",
    "category": "Gemstone",
    "keyword": "Event"
  },
  {
    "id": "sagsho",
    "cardRarity": "Priceless",
    "cardGroup": "Sagittarius",
    "name": "Shotaro",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945985/sagsho_priceless_sagittarius_shotaro_ktef8s.png",
    "category": "Event",
    "keyword": "Zodiac"
  },
  {
    "id": "libseu",
    "cardRarity": "Priceless",
    "cardGroup": "Libra",
    "name": "Seunghan",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945955/libseu_priceless_libra_seunghan_y6okfb.png",
    "category": "Event",
    "keyword": "Zodiac"
  },
  {
    "id": "fwtaro",
    "cardRarity": "Altair",
    "cardGroup": "Farewell",
    "name": "Shotaro",
    "group": "RIIZE",
    "types": "",
    "rarity": "Trainer Gallery Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945898/fwtaro_altair_farewell_shotaro_ug6ysw.png",
    "category": "Event",
    "keyword": ""
  },
  {
    "id": "feseeu",
    "cardRarity": "Priceless",
    "cardGroup": "Friendship event",
    "name": "Eunseok seunghan",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945818/feseeu_priceless_friendship%20event_eunseok%20seunghan.png",
    "category": "Event",
    "keyword": ""
  },
  {
    "id": "cdywbn",
    "cardRarity": "Priceless",
    "cardGroup": "Bcandy",
    "name": "Wonbin",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945785/cdywbn_priceless_bcandy_wonbin_bcuinh.png",
    "category": "Event",
    "keyword": "Candy"
  },
  {
    "id": "btawon",
    "cardRarity": "Priceless",
    "cardGroup": "BTA",
    "name": "Wonbin",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945737/btawon_priceless_BTA_wonbin_kecj8m.png",
    "category": "Event",
    "keyword": ""
  },
  {
    "id": "aquwbn",
    "cardRarity": "Priceless",
    "cardGroup": "Aquamarine",
    "name": "Wonbin",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945668/aquwbn_priceless_aquamarine_wonbin.png",
    "category": "Gemstone",
    "keyword": "Event"
  },
  {
    "id": "aquton",
    "cardRarity": "Priceless",
    "cardGroup": "Aquamarine",
    "name": "Anton",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945665/aquton_priceless_aquamarine_anton.png",
    "category": "Gemstone",
    "keyword": "Event"
  },
  {
    "id": "aquseo",
    "cardRarity": "Priceless",
    "cardGroup": "Aquamarine",
    "name": "Eunseok",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945661/aquseo_priceless_aquamarine_eunseok.png",
    "category": "Gemstone",
    "keyword": "Event"
  },
  {
    "id": "aposho",
    "cardRarity": "Priceless",
    "cardGroup": "Papocalypse",
    "name": "Shotaro",
    "group": "RIIZE",
    "types": "",
    "rarity": "Rare Shiny",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945619/aposho_priceless_papocalypse_shotaro.png",
    "category": "Event",
    "keyword": "Apocalypse"
  },
  {
    "id": "anriwb",
    "cardRarity": "Altair",
    "cardGroup": "Anniversary",
    "name": "Wonbin",
    "group": "RIIZE",
    "types": "",
    "rarity": "Trainer Gallery Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945406/anriwb_altair_anniversary_wonbin.png",
    "category": "Event",
    "keyword": ""
  },
  {
    "id": "anrist",
    "cardRarity": "Altair",
    "cardGroup": "Anniversary",
    "name": "Shotaro",
    "group": "RIIZE",
    "types": "",
    "rarity": "Trainer Gallery Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945391/anrist_altair_anniversary_shotaro.png",
    "category": "Event",
    "keyword": ""
  },
  {
    "id": "anrise",
    "cardRarity": "Altair",
    "cardGroup": "Anniversary",
    "name": "Seunghan",
    "group": "RIIZE",
    "types": "",
    "rarity": "Trainer Gallery Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945370/anrise_altair_anniversary_seunghan.png",
    "category": "Event",
    "keyword": ""
  },
  {
    "id": "anrish",
    "cardRarity": "Altair",
    "cardGroup": "Anniversary",
    "name": "Sohee",
    "group": "RIIZE",
    "types": "",
    "rarity": "Trainer Gallery Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945354/anrish_altair_anniversary_sohee.png",
    "category": "Event",
    "keyword": ""
  },
  {
    "id": "anrisn",
    "cardRarity": "Altair",
    "cardGroup": "Anniversary",
    "name": "Sungchan",
    "group": "RIIZE",
    "types": "",
    "rarity": "Trainer Gallery Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945340/anrisn_altair_anniversary_sungchan.png",
    "category": "Event",
    "keyword": ""
  },
  {
    "id": "anriek",
    "cardRarity": "Altair",
    "cardGroup": "Anniversary",
    "name": "Eunseok",
    "group": "RIIZE",
    "types": "",
    "rarity": "Trainer Gallery Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945299/anriek_altair_anniversary_eunseok.png",
    "category": "Event",
    "keyword": ""
  },
  {
    "id": "anrian",
    "cardRarity": "Altair",
    "cardGroup": "Anniversary",
    "name": "Anton",
    "group": "RIIZE",
    "types": "",
    "rarity": "Trainer Gallery Rare Holo",
    "card_img": "https://res.cloudinary.com/djg9bhuwi/image/upload/v1729945286/anrian_altair_anniversary_anton.png",
    "category": "Event",
    "keyword": ""
  }
]
;

  // Define the order for each property
  //const groupOrder = ["EXO", "EXO-CBX", "EXO-SC", "SuperM", "Soloist"];
  //const groupOrder = ["NCT127", "NCT Dream", "WayV", "KUN&XIAOJUN", "NCT WISH", "Soloist"];
  const groupOrder= [];
  const rarityOrder = ["Ordinary", "Unordinary", "Rare", "Special", "Extraordinary", "Priceless", "Altair"];
  //const nameOrder = ["Baekhyun", "Chen", "Chanyeol", "D.O.", "Kai", "Lay", "Luhan", "Sehun", "Suho", "Tao", "Xiumin"];
  //const nameOrder = ["Chenle", "Doyoung", "Haechan", "Hendery", "Jaehee", "Jaehyun", "Jaemin", "Jeno", "Jisung", "Johnny", "Jungwoo", "Kun", "Mark", "Renjun", "Riku", "Ryo", "Sakuya", "Sion", "Taeyong", "Ten", "Winwin", "Xiaojun", "Yangyang", "Yushi", "Yuta"];
  const nameOrder = ["Anton", "Eunseok", "Sungchan", "Sohee", "Seunghan", "Shotaro", "Wonbin"];

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
