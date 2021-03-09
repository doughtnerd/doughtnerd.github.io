<script>
  import { url } from "@roxi/routify";

  export let href = "";
</script>

<a
  class="flex flex-col justify-center h-full p-2 cursor-pointer"
  href={$url(href)}
>
  <slot />
</a>
