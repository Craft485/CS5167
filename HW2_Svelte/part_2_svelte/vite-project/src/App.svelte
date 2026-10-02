<script lang="ts">
  import type { Component } from "svelte";
  import Controls from "./lib/Controls.svelte";
  import { icons } from "@lucide/svelte/icons";
    import EmbeddedUIView from "./lib/EmbeddedUIView.svelte";
    import HybridView from "./lib/HybridView.svelte";
    import LeftControlPanel from "./lib/LeftControlPanel.svelte";
    import RightControlPanel from "./lib/RightControlPanel.svelte";
    import MobileUI from "./lib/MobileUI.svelte";

  interface Widget {
    icon: Component;
    textContent?: string;
  }

  let phLevel = $state(0);
  let currentVolumePercentage = $state(0.0);
  let quotaProgress = $state(0);
  let quotaGoal = $state(100);
  let refillCount = $state(0);

  const availableWidgets = [
    {
      icon: icons.CloudDrizzle,
    },
    {
      icon: icons.TestTubeDiagonal,
    }
  ] satisfies Widget[]
</script>

<style>
  #page-content {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100%;
  }

  main {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  section {
    display: flex;
    flex-direction: column;
    width: 33%;
  }

  h2 {
    border: thin solid white;
    border-top: none;
  }

  .section-content-container {
    flex-grow: 1;
  }

  .control-panel {
    height: 100svh;
    width: 20%;
  }
</style>

<div id="page-content">
  <div class="control-panel">
    <LeftControlPanel
      bind:quota={quotaGoal}
      bind:quotaProgress={quotaProgress}
      bind:volume={currentVolumePercentage}
      bind:refillCount={refillCount}
    />
  </div>
  <main>
    <section id="hybrid-view">
      <h2>Hybrid View</h2>
      <div class="section-content-container">
        <HybridView
          bind:refillCount={refillCount}
          bind:volume={currentVolumePercentage}
          widgets={availableWidgets}
        />
      </div>
    </section>
    <section id="embedded-ui-focus">
      <h2>Embedded UI Focus View</h2>
      <div class="section-content-container">
        <EmbeddedUIView
          bind:refillCount={refillCount}
          bind:volume={currentVolumePercentage}
          widgets={availableWidgets}
          contentScale={1}
        />
      </div>
    </section>
    <section id="mobile-ui-focus">
      <h2>Mobile UI Focus View</h2>
      <div class="section-content-container">
        <MobileUI
          bind:refillCount={refillCount}
          bind:volume={currentVolumePercentage}
          widgets={availableWidgets}
        />
      </div>
    </section>
  </main>
  <div class="control-panel">
    <RightControlPanel
      bind:phLevel={phLevel}
    />
  </div>
</div>
