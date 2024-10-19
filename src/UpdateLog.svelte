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


		<h1 id="⚓-top">SUHO Cards Collection UPDATE LOG <sup>19/10/2024</sup>
		</h1>

		<section class="intro" id="⚓-intro">


			<h2>Latest major update: <strong>19/10/2024</strong></h2> <br/>
			<p>
				<mark>NCT is now proud citizens of our card database!</mark> 🎉 <br/>
				NCT has multiple subgroups, and some members of NCT are part of more than one subgroup.
				For instance, both NCT127 and NCT Dream have Mark cards, and obviously, the search system of the SUHO bot
				is not quite flexible for looking up every Mark card at once. <br/>
				Fortunately, our database has QOL features to fix such a problem!<br/><br/>
				
				<mark>All NCT cards, NCT127, NCT Dream, WayV, KUN-XIAOJUN, NCT WISH, Soloist, and event cards, are available.</mark><br/>
				NCT WISH group has not been officially added to the SUHO bot, but using the keyword <strong>"WISH"</strong> will still show up NCT WISH members.<br/>

				<br/><strong>Usable keywords: nct, nct127, 127, nct dream, dream, wayv, nct wish, wish, group(for group photos), soloist, card codes, event names, etc.</strong><br/>
				Any keywords one considers reasonable should work.<br/>

				<br/>The full update log is available below.
				<br/> Have a great day, everyone.<br/>
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
		<h2 id="⚓-log3">
				NCT & QOL update <sup>19/10/2024</sup>
		</h2>
		<p>
			<br/>
			<mark>NCT is now proud citizens of our card database!</mark> 🎉 <br/>
			<strong>Available cards: NCT127, NCT Dream, WayV, KUN&XIAOJUN, NCT WISH, Soloist, and event cards.</strong><br/>
			
			<br/><strong>Usable keywords: nct, nct127, 127, nct dream, dream, wayv, nct wish, wish, group(for group photos), soloist, card codes, event names, etc.</strong><br/>
			Any search keywords one considers reasonable should work.<br/>
			
			<br/><mark>Other QOL updates:</mark><br/>
			- Keywords are not case-sensitive; 'EXO' or 'exo' do not matter.<br/>
			It has always been like this, but this feature has not been explicitly stated.<br/><br/>
			
			- <strong>p0rtr4it Altair Suho</strong> card is now searchable using the keyword <strong>'portrait'</strong><br/><br/>
			
			- EXO-CBX cards are now searchable using the keyword <strong>'CBX'</strong><br/><br/>

			- All Evil Event cards are now searchable using the keyword <strong>'evil'</strong><br/><br/>

			- All Fairies cards are now searchable using the keywords <strong>'fairy'</strong> and <strong>'fairies'</strong><br/><br/>

			- All Xmas-related cards are now searchable using the keyword <strong>'xmas'</strong><br/>
			Adding <strong>'fanmade'</strong> or <strong>'xmas23'</strong> narrows the search result.<br/><br/>


			<br/> This is our biggest update yet! <br/>
		</p>
		<h3></h3>


		<h2 id="⚓-log2">
				Seventeen update <sup>11/09/2024</sup>
		</h2>
		<p>
			<br/>
			<mark>Please welcome the newest addition to our card database: Seventeen!</mark> 🎉 <br/>
			Seventeen cards have many inconsistent search keywords especially with duo cards (JeongCheol, SoonHoon, etc.).
			Worry not. Our flexible search system on this website has fixed such a problem. <br/>
			
			Simply use keywords like "<strong>Jeonghan</strong>," "<strong>S.Coups</strong>," or "<strong>JeongCheol</strong>" to quickly find the <strong>ansvjc JeongCheol</strong> card, for instance.

			<br/> We are certain that everyone will be delighted with this update. :) <br/>
		</p>


		<h2 id="⚓-log1">
				Grand opening! <sup>31/08/2024</sup>
		</h2>
		<p>
			<br/>
			<mark>The SUHO Cards Collection website is live as of 31/08/2024!</mark> 🎉 <br/>
			Everyone can view all EXO cards faster than ever with 3D interactions and pretty holofoils! <br/>
			New cards are going to be added whenever there is any update.
		</p>

</main>
