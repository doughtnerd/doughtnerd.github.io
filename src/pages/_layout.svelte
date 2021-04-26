<script>
  import HeaderLink from "../components/HeaderLink.svelte";
</script>

<nav
  class="absolute top-0 left-0 w-full h-12 max-h-12 flex flex-row justify-end items-center px-4"
>
  <HeaderLink href="/">Home</HeaderLink>
  <HeaderLink href="/about">About</HeaderLink>
  <HeaderLink href="/projects">Projects</HeaderLink>
  <HeaderLink href="/blog">Blog</HeaderLink>
</nav>

<slot />

<style>
</style>
