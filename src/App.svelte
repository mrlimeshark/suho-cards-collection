<script>
	import Router, {location, link} from "svelte-spa-router";
	import Home from "./Home.svelte";
	import UpdateLog from "./UpdateLog.svelte";
</script>




<Router routes={{
	"/": Home,
	"/update": UpdateLog
}} />