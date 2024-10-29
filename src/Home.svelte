<script>
  import { onMount } from "svelte";

	import Search from "./Search.svelte";
	import CardList from "./Cards.svelte";
	import Card from "./lib/components/CardProxy.svelte";
	import latestShowcase from "./latestCards.json";

	let showcase, showcaseEffect, available, latest;

	let query = "";
	let isLoading = true;

	//Set this to 'true' when there is an update.
	let isLatestShowcase = true;


	const getCards = async () => {
		let promiseArray = [];
		let cardFetch = await fetch("/data/cardShowcase.json");
		let cards = await cardFetch.json();
		return cards;
	};

	const loadCards = async() => {
		latest = latestShowcase;
		return getCards()
			.then((cards) => {
				window.cards = cards;
				showcase = cards[0];
				showcaseEffect = cards.slice(1, 10);
				available = cards.slice(10, 16);
				isLoading = false;
			});
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
		<h1 id="⚓-top">SUHO Card Collection
		</h1>
		<p class="author">By <a href="https://github.com/mrlimeshark"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> mrlimeshark
		</p>

		<section class="intro" id="⚓-intro">
			<p>
				An <mark>unofficial card collection</mark>
				for the Discord bot <a href="https://top.gg/bot/1120361339253162004">SUHO</a>.
				The cards use <strong>3D transforms</strong>, <strong>filters</strong>, <strong>blend modes</strong>, <strong>css gradients</strong> and interactions to provide a unique experience when taking a closer look. <br/> <br/>
				
				<mark>Firefox on PC</mark> is recommended for the best experience.<br/>
				Some effects might not work well on Safari.<br/><br/>

				Shoutout to <a href="https://github.com/simeydotme/pokemon-cards-css"> simeydotme</a> for the amazing repository :3
			</p>
		</section>

		<div class="showcase">
			{#if !showcase}
				loading...
			{:else}
				<Card
				id={showcase.id}
				img={showcase.card_img}
				name={showcase.name}
				types={showcase.types}
				rarity={showcase.rarity}
				isReverse={showcase.isReverse}
				showcase={true}
				/>
			{/if}
		</div>

		<section class="info">
			<h2>Click on a Card to Take a Closer Look!</h2>

			<hr />

			<p><nav> <a href="/#/update" style="color: springgreen">Check the update log</a> </nav>

			<p class="small">
				Latest card database update: <strong>30/10/2024</strong>  <br />
				All EXO cards are up-to-date.
					<br>
					<a href="https://github.com/mrlimeshark/suho-cards-collection">Source code is in the repository</a>.
			</p>
		</section>
	</header>

	<Search bind:query />


	{#if query.length < 2}

		{#if isLatestShowcase}
			<h2 id="⚓-latest">
				<a href="⚓-latest">
					~Latest Update~ 
				</a>
			</h2>
			<p>
				
				 <br/>
				 <strong>Rise and shine, everyone.</strong>	 <mark>RIIZE</mark> and <mark>aespa</mark> just joined our interactive card collection!<br />
				 All regular cards and event cards are now searchable. Our database is slowly but surely growing.<br/>
				 <br/>PS, RIIZE is 7.
			</p>
			<h3></h3>

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
		{/if}


		<h2 id="⚓-available_card">
			<a href="#⚓-available_card">
				Which cards are registered? <sup>(30/10/2024)</sup>
			</a>
		</h2>
		<p>
			<mark>EXO</mark>, <mark>SuperM</mark>, <mark>NCT</mark>, <mark>RIIZE</mark>, <mark>aespa</mark>, and <mark>Seventeen</mark> cards are in our database. <br/>
			Sub-group cards (<mark>EXO-CBX</mark>, <mark>WayV</mark>, <mark>NCT WISH</mark>, etc.) are all included as well.
		</p>
		<h3>Stay tuned for more updates!</h3>

		<CardList>
			{#if isLoading}
				loading...
			{:else}
				{#each available as card, index}
					<Card
						id={card.id}
						img={card.card_img}
						name={card.name}
						types={card.types}
						rarity={card.rarity}
						mask={card.mask}
						foil={card.foil}
					/>
				{/each}
			{/if}
		</CardList>


		<h2 id="⚓-showcase_effect">
			<a href="#⚓-showcase_effect">
				Card Effects
			</a>
		</h2>
		<p>
			<mark>All cards receive outline colours and holofoil effects</mark> depending on their general colours and rarities respectively. <br/>
			<mark>The outline colour</mark> for each card only <mark>appear when clicking</mark> a card, and <mark>holofoil effects differ</mark> depending on the <mark>rarities of cards</mark>.<br/>
			Rarer cards tend to have fancier shines and holofoils. <strong>Altair cards have most diverse effects fitting to their aesthetics.</strong><br/>
			Some effects, especially the one for Extraordinary cards, might look weird on certain web browsers.<br/>
			
		</p>


		<CardList>
			{#if isLoading}
				loading...
			{:else}
				{#each showcaseEffect as card, index}
					<Card
						id={card.id}
						img={card.card_img}
						name={card.name}
						types={card.types}
						rarity={card.rarity}
						mask={card.mask}
						foil={card.foil}
					/>
				{/each}
			{/if}
		</CardList>

	{/if}
</main>

<div class="back-to-top">
  <a href="#⚓-top">Back to Top</a>
</div>

<style>
  .back-to-top a {
    color: inherit;
    text-decoration: none;
		z-index: 999;
  }
</style>
