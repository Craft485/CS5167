<script lang="ts">
  import type { Component } from "svelte";
    import Widget from "./Widget.svelte";

  interface Widget {
    icon: Component;
    textContent?: string;
  }

  interface EmbeddedUIView {
    widgets: Widget[];
    refillCount: number;
    volume: number;
    contentScale: number;
  }

  let { widgets, refillCount = $bindable(), volume = $bindable(), contentScale }: Readonly<EmbeddedUIView> = $props();
</script>

<style>
  .embedded-view-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    font-size-adjust: var(--scale-factor);
  }

  .widgets {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  .embedded-view-main-display {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .fill {
    border: thin solid black;
    border-radius: 100%;
    width: calc(50px * var(--scale-factor));
    height: calc(50px * var(--scale-factor));
    background: black;
    background: linear-gradient(0deg, blue var(--progress), white var(--progress));
  }
</style>

<div class="embedded-view-container" style="--scale-factor: {contentScale};">
  <section class="widgets">
    {#each widgets as widget}
      <Widget icon={widget.icon} textContent={widget.textContent} scale={contentScale}/>
    {/each}
  </section>
  <section class="embedded-view-main-display">
    <div class="fill" style="--progress: {volume}%;"></div>
    <span>{refillCount}</span>
  </section>
</div>