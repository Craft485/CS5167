<script lang="ts">
  import type { Component } from "svelte";

  interface Widget {
    icon: Component;
    scale: number;
    textContent?: string;
  }

  let { icon, scale, textContent }: Readonly<Widget> = $props()
</script>

<div class="widget">
  <svelte:component this={icon} color="white" size={32 * scale}/>
</div>