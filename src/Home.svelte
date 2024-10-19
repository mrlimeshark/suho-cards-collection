<script>
  import { onMount } from "svelte";

	import Search from "./Search.svelte";
	import CardList from "./Cards.svelte";
	import Card from "./lib/components/CardProxy.svelte";
	import latestShowcase from "./latestCards.json";

	let showcase, ordinary, unordinary, rare, special, 
			extraordinary, priceless, altair, latest;

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
				ordinary = cards.slice(1, 4);
				unordinary = cards.slice(4, 7);
				rare = cards.slice(7, 10);
				special = cards.slice(10, 13);
				extraordinary = cards.slice(13, 16);
				priceless = cards.slice(16, 19);
				altair = cards.slice(19,22);
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
				The cards use <mark>3D transforms</mark>, <mark>filters</mark>, <mark>blend modes</mark>, <mark>css gradients</mark> and interactions to provide a unique experience when taking a closer look! <br/> <br/>
				<mark>Firefox on PC</mark> is recommended for the best experience.<br/><br/>
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
			<h2>Click on a Card to take a Closer Look!</h2>

			<hr />

			<p><nav> <a href="/#/update" style="color: springgreen">Check the update log</a> </nav>

			<p class="small">
				Latest card database update: <strong>19/10/2024</strong>  <br />
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
				 <strong><mark>NCT joins our interactive card collection!</mark></strong><br />
				 NCT127, NCT Dream, WayV, KUN&XIAOJUN, NCT WISH, Soloist, and all event cards are now searchable. <br />
				 Typing <strong>only</strong> the 'NCT' keyword will fetch every aforementioned card, so specific keywords are preferred for your convenience.
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


		<h2 id="⚓-ordinary">
			<a href="#⚓-ordinary">
				Ordinary Cards
			</a>
		</h2>
		<p>
			All cards get a 3D rotation with CSS based on the cursor position.<br />
			The default basic non-holo cards simply apply a <mark>flare/glare effect</mark> to the card which follows the mouse.
		</p>

		<CardList>
			{#if isLoading}
				loading...
			{:else}
				{#each ordinary as card, index}
					<Card
						id={card.id}
						name={card.name}
						img={card.card_img}
						types={card.types}
						
					/>
				{/each}
			{/if}
		</CardList>


		<h2 id="⚓-unordinary">
			<a href="#⚓-unordinary">
				Unordinary Cards
			</a>
		</h2>
		<p>
			A humble, but pretty effect for unordinary cards! Here we apply two glitter layers on top of each other with a overlay effect and
		<mark>slide the two layers in opposite directions</mark>. We also <mark>mask the foil image</mark> with a gadient so
		that foil and glitter layers are mutually exclusive. The resulting effect is a shimmering glitter layer!
		</p>

		<CardList>
			{#if isLoading}
				loading...
			{:else}
				{#each unordinary as card, index}
					<Card
						id={card.id}
						img={card.card_img}
						name={card.name}
						types={card.types}
						rarity={card.rarity}
					/>
				{/each}
			{/if}
		</CardList>

		<h2 id="⚓-rare">
			<a href="#⚓-rare">
				Rare Cards
			</a>
		</h2>
		<p>
			Rare cards have an additional <mark>vertical beam holo effect</mark>. <br /> This uses a
			combintation of <mark>repeating gradients and filters</mark>, with <mark>clip-path</mark> to mask
			the holo areas for each stage. To get the holo effect to change while rotating the card I set the
			background-position of each gradient layer based on cursor.
		</p>

		<CardList>
			{#if isLoading}
				loading...
			{:else}
				{#each rare as card, index}
					<Card
						id={card.id}
						img={card.card_img}
						name={card.name}
						types={card.types}
						rarity={card.rarity}
					/>
				{/each}
			{/if}
		</CardList>


		<h2 id="⚓-special">
			<a href="#⚓-special">
				Special Cards
			</a>
		</h2>
		<p>
			Special cards have sparkling <mark>galaxy effect holofoil</mark>
			with a <mark>gradient rainbow set to color-dodge & color-burn</mark> on top. Not too simple, yet not too flamboyant.
			This holofoil complements card images just enough.  <br/>
			
		</p>

		<CardList>
			{#if isLoading}
				loading...
			{:else}
				{#each special as card, index}
					<Card
						id={card.id}
						img={card.card_img}
						name={card.name}
						types={card.types}
						rarity={card.rarity}
					/>
				{/each}
			{/if}
		</CardList>



		<h2 id="⚓-extraordinary">
			<a href="#⚓-extraordinary">
				Extraordinary Cards
			</a>
		</h2>
		<p>
			Extraordinary cards appear to have colourful and detailed backgrounds in general, therefore a gorgeous
            effect was chosen: a <mark>criss-cross linear gradient pattern</mark> that moves
			across the card! <mark>Note: This effect might not work well on mobile.</mark>
		</p>

		<CardList>
			{#if isLoading}
				loading...
			{:else}
				{#each extraordinary as card, index}
					<Card
						id={card.id}
						img={card.card_img}
						name={card.name}
						types={card.types}
						rarity={card.rarity}
					/>
				{/each}
			{/if}
		</CardList>


		<h2 id="⚓-priceless">
			<a href="#⚓-priceless">
				Priceless Cards <sup>(Event Cards)</sup>
			</a>
		</h2>
		<p>
			Priceless cards are given quite a unique effect in whereby the foil background is a shiny silver
			color. To achieve this, we apply the foil image with some radial gradients to darken the foil
			over the background. This creates a slightly silver effect on top of the white card background.
			<br/><mark>This effect works best on Firefox.</mark>
		</p>

		<CardList>
			{#if isLoading}
				loading...
			{:else}
				{#each priceless as card, index}
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


		<h2 id="⚓-altair">
			<a href="#⚓-altair">
				Altair Cards <sup>(Event Cards)</sup>
			</a>
		</h2>
		<p>
			Default Altair cards have <mark>diagonal gradients overlayed on them</mark>,
            The cards are generally <mark>brighter with a pastel hue</mark>, though, which
			makes the gradient and texture more subtle.
			Since these are created for special occassions (anniversaries, etc.), you will see
			a number of different effects and holofoils applied to them.
		</p>
		<h3>Altair cards have most diverse effects fitting to their aesthetics!</h3>

		<CardList>
			{#if isLoading}
				loading...
			{:else}
				{#each altair as card, index}
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
