<script>
  import HeaderLink from "../components/HeaderLink.svelte";
</script>

<nav class="h-12 max-h-12 bg-gray-200 flex flex-row justify-end items-center">
  <HeaderLink href="/">Home</HeaderLink>
  <HeaderLink href="/about">About</HeaderLink>
  <HeaderLink href="/projects">Projects</HeaderLink>
  <HeaderLink href="/blog">Blog</HeaderLink>
</nav>

<slot />

<style>
</style>
