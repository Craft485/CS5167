<script lang="ts">
  import type { Component } from "svelte";

  interface Widget {
    icon: Component;
    scale: number;
    textContent?: string;
  }

  let { icon, scale, textContent }: Readonly<Widget> = $props()
</script>

<style>
  .widget {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .widget-text-content {
    font-size: xx-small;
  }
</style>

<div class="widget">
  <svelte:component this={icon} color="white" size={32 * scale}/>
  <span class="widget-text-content">{textContent ?? "--"}</span>
</div>