<script>
  	import { onMount } from "svelte";

	import CardList from "./Cards.svelte";
	import Card from "./lib/components/CardProxy.svelte";
	//import latestShowcase from "./latestCards.json";

	let latest;

	let isLoading = true;

	const loadCards = async() => {
		//latest = latestShowcase;
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

		<style>
			header {
    			grid-template-columns: 100% 1fr;
  			}
		</style>

		<h1 id="⚓-top">SUHO Cards Collection UPDATE LOG
		</h1>

		<section class="intro" id="⚓-intro">

			<h2>Latest card library update: <strong>31/08/2024</strong></h2> <br/>
			<p>
				<mark>The SUHO Cards Collection website is live as of 31/08/2024!</mark> 🎉 <br/>
				Everyone can view all EXO cards faster than ever with 3D interactions and pretty holofoils! <br/>
				New cards are going to be added whenever there is any update.
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

		<h2 id="⚓-log1">
				No new update yet... <sup></sup>
		</h2>
		<p>
			Update log will be added when there is an update.
		</p>
		<h3></h3>

		<CardList>
			{#if isLoading}
				loading...
			{:else}
				<Card 
				name="C"
				img="https://res.cloudinary.com/djg9bhuwi/image/upload/v1725814478/IMG_4135_twwfds.jpg"
				rarity="Rare Secret"
				isReverse={false}
		  		/>
				<Card 
				name="B"
				img="https://res.cloudinary.com/djg9bhuwi/image/upload/v1725814208/IMG_4134_f4npqm.jpg"
				rarity="Rare Secret"
				isReverse={false}
				/>
				<Card 
				name="X"
				img="https://res.cloudinary.com/djg9bhuwi/image/upload/v1725814208/IMG_4136_tyx9i6.jpg"
				rarity="Rare Secret"
				isReverse={false}
				/>

			{/if}
		</CardList>
</main>

<style>
  .back-to-top a {
    color: inherit;
    text-decoration: none;
		z-index: 999;
  }
</style>
