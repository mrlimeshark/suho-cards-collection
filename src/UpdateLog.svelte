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


		<h1 id="⚓-top">SUHO Cards Collection UPDATE LOG <sup>14/11/2024</sup>
		</h1>

		<section class="intro" id="⚓-intro">


			<h2>Latest major update: <strong>14/11/2024</strong></h2> <br/>
			<p>
				<mark>Five groups at once!</mark> 🎉 <br/>
				<strong>Red Velvet, B.A.P, BTOB, INFINITE, and VIXX</strong> cards have been added to the database.
				All the Halloween cards for the groups in our database have been added as well.
				Lastly, it is now possible to use '<strong>booster</strong>' and '<strong>patreon</strong>' keywords to search for such cards. <br/>

				<br/> Happy belated Halloween.<br/>
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


		<h2 id="⚓-log5">
				Five-group update <sup>14/11/2024</sup>
		</h2>
		<p>
			<br/>
			<mark>Five groups at once!</mark> 🎉 <br/>
			Updating five groups at once with the usual QOL features.<br/>

			<br/><mark>QOL updates:</mark><br/>

			- All Booster/Patreon cards are now searchable using the keywords <strong>'booster'</strong> and <strong>'patreon'</strong>.<br/><br/>

			- Either <strong>'huta'</strong> or <strong>'minhyuk'</strong> is fine for searching for BTOB Minhyuk cards. They are the same person.<br/><br/>

			- Either <strong>'b.a.p'</strong> or <strong>'bap'</strong> is fine for searching for B.A.P cards.<br/><br/>

			- Fixed <strong>e2exlh</strong> card displaying a wrong image.<br/><br/>
		</p>



		<h2 id="⚓-log4">
				RIIZE & aespa update <sup>30/10/2024</sup>
		</h2>
		<p>
			<br/>
			<mark>Rise and shine, everyone. RIIZE and aespa are here!</mark> 🎉 <br/>
			Updating two groups at once with the usual QOL features.<br/>

			<br/><mark>Other updates:</mark><br/>

			- Updated the front page and showcase cards.<br/><br/>

			- D.O. cards are now searchable using the keyword <strong>'do'</strong>.<br/><br/>

			- Fixed <strong>psedo</strong> card displaying a wrong image.<br/><br/>
		</p>



		<h2 id="⚓-log3">
				NCT & QOL update <sup>19/10/2024</sup>
		</h2>
		<p>
			<br/>
			<mark>NCT is now a proud citizen of our card database!</mark> 🎉 <br/>
			<strong>Available cards: NCT127, NCT Dream, WayV, KUN&XIAOJUN, NCT WISH, Soloist, and event cards.</strong><br/>
			
			<br/><strong>Usable keywords: nct, nct127, 127, nct dream, dream, wayv, nct wish, wish, group(for group photos), soloist, card codes, event names, etc.</strong><br/>
			Any search keywords one considers reasonable should work.<br/>
			
			<br/><mark>Other QOL updates:</mark><br/>

			- Previously missing SuperM members' cards(Mark, Taemin, Ten, and Taeyong cards) have been added.<br/><br/>

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
