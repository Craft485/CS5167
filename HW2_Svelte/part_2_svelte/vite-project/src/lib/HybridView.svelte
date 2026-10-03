<script lang="ts">
    import type { Component } from "svelte";
  import EmbeddedUIView from "./EmbeddedUIView.svelte";
  
  interface Widget {
    icon: Component;
    textContent?: string | number;
  }

  interface HybridViewProps {
    widgets: Widget[];
    refillCount: number;
    volume: number;
    waterTemperature: number;
  }
  let { refillCount = $bindable(), volume = $bindable(), waterTemperature = $bindable(), widgets }: Readonly<HybridViewProps> = $props()
</script>
<style>
  #hybrid-view-container {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-image: url("hybrid-view-bg.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .hybrid-content-container {
    width: 50%;
    height: 40%;
    padding: 2.5%;
    border-radius: 30px;
    background: black;
    background: linear-gradient(0deg, rgba(calc(-255 * (1 - (var(--water-temp) / 212)) + 255), 0, calc(255 * (1 - (var(--water-temp) / 212))), 1) 11%, rgba(26, 20, 20, 1) 100%);
  }
</style>

<div id="hybrid-view-container" style="--water-temp: {waterTemperature}">
  <div class="hybrid-content-container">
    <EmbeddedUIView
      bind:refillCount={refillCount}
      bind:volume={volume}
      widgets={widgets}
      contentScale={0.5}
    />
  </div>
</div>