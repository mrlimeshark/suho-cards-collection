<script>
  import { onMount } from "svelte";

	import CardList from "./Cards.svelte";
	import Card from "./lib/components/CardProxy.svelte";
	import latestShowcase from "./latestCards.json";

	let latest;

	let isLoading = true;

	const loadCards = async() => {
		latest = latestShowcase;
		isLoading = false;
	};

	onMount(() => {
		loadCards();
		const $headings = document.querySelectorAll("h1,h2,h3");
		const $anchor = [...$headings].filter((el) => {
			const id = el.getAttribute("id")?.replace(/^.*?-/g,"");
			const hash = window.location.hash?.replace(/^.*?-/g,"")
			return id === hash;
		})[0];
		if( $anchor ) {
			setTimeout(() => {
				$anchor.scrollIntoView();
			},100);
		}
	});
</script>

<main>
	<header>


		<h1 id="⚓-top">SUHO Cards Collection UPDATE LOG <sup>30/09/2024</sup>
		</h1>

		<section class="intro" id="⚓-intro">


			<h2>Latest card library update: <strong>11/09/2024</strong></h2> <br/>
			<p>
				<mark>Please welcome the newest addition to our card database: Seventeen!</mark> 🎉 <br/>
				Seventeen cards have many inconsistent search keywords especially with duo cards (JeongCheol, SoonHoon, etc.).
				Worry not. Our flexible search system on this website has fixed such a problem. <br/>
				
				Simply use keywords like "<strong>Jeonghan</strong>," "<strong>S.Coups</strong>," or "<strong>JeongCheol</strong>" to quickly find the <strong>ansvjc JeongCheol</strong> card, for instance.

				<br/> We are certain that everyone will be delighted with this update. :) <br/>
			</p>
		</section>

		<section class="info">
			
			<p><nav> <a href="/" style="color: springgreen">Go back to the front page</a> </nav>

			<hr />

			
			
			<p class= "small">
				meow meow meow meow :3
				<br>
				<a href="https://github.com/mrlimeshark/suho-cards-collection">Visit the repository for more detailed update log</a>.
			</p>	
		</section>
	</header>


	<CardList>
		{#if isLoading}
			loading...
		{:else}
			{#each latest as card, index}
				<Card
				id={card.id}
				name={card.name}
				img={card.card_img}
				types={card.types}
				rarity={card.rarity}
				mask={card.mask}
				foil={card.foil}
				/>
			{/each}
		{/if}
	</CardList>

		<h2 id="⚓-log1">
				Grand opening! <sup>31/08/2024</sup>
		</h2>
		<p>
			<br/>
			<mark>The SUHO Cards Collection website is live as of 31/08/2024!</mark> 🎉 <br/>
			Everyone can view all EXO cards faster than ever with 3D interactions and pretty holofoils! <br/>
			New cards are going to be added whenever there is any update.
		</p>
		<h3></h3>

</main>

<style>
  .back-to-top a {
    color: inherit;
    text-decoration: none;
		z-index: 999;
  }
</style>
