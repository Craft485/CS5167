<script lang="ts">
    import type { Component } from "svelte";
  import EmbeddedUIView from "./EmbeddedUIView.svelte";
  
  interface Widget {
    icon: Component;
    textContent?: string;
  }

  interface HybridViewProps {
    widgets: Widget[];
    refillCount: number;
    volume: number;
  }
  let { refillCount = $bindable(), volume = $bindable(), widgets }: Readonly<HybridViewProps> = $props()
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
    background-color: hsl(231, 14%, 10%);
    padding: 2.5%;
    border-radius: 30px;
  }
</style>

<div id="hybrid-view-container">
  <div class="hybrid-content-container">
    <EmbeddedUIView
      bind:refillCount={refillCount}
      bind:volume={volume}
      widgets={widgets}
      contentScale={0.5}
    />
  </div>
</div>