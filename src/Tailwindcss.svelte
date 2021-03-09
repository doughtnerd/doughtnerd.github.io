<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  @layer utilities {
    @variants hover, focus, active {
      .brightness-50 {
        filter: brightness(50%);
      }
    }
  }
</style>
