<script>
	import Card from "./Card.svelte";

  // data / SUHO card properties
  export let id = undefined;
  export let cardRarity = undefined;
  export let cardGroup = undefined;
  export let name = undefined; // Artist name
  export let group = undefined; // The "root" group of an artist
  export let types = undefined; // Card outline colour (Pokemon types)
  export let rarity = undefined; // Foil effect based on the rarities of Pokemon cards.
  export let category = undefined; // Regular or Event or Gemstones?
  export let keyword = undefined; // Search tokens
  //export let isReverse = false;

  // image props
  export let img = undefined;
  export let back = undefined;
  export let foil = undefined;
  export let mask = undefined;

  // context/environment props
  export let showcase = false;


  
  function isDefined (v) {
    return typeof v !== "undefined" && v !== null;
  }
  
  function isArray (v) {
    return typeof v !== "undefined" && Array.isArray(v);
  }

  const proxy = {
    
    img: img,
    back,
    foil: foil,
    mask: mask,

    id,
    cardRarity,
    cardGroup,
    name,
    group,
    types,
    rarity,
    category,
    keyword,
    showcase

  }

</script>





<Card {...proxy} />