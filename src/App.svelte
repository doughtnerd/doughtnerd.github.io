<script>
  import Tailwindcss from "./Tailwindcss.svelte";
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>

<style>

</style>

<svelte:head>
  <title>doughtnerd.github.io - Welcome</title>
</svelte:head>

<Tailwindcss />

<Router {routes} />
