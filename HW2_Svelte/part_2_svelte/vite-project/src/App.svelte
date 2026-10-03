<script lang="ts">
  import type { Component } from "svelte";
  import { icons } from "@lucide/svelte/icons";
  import EmbeddedUIView from "./lib/EmbeddedUIView.svelte";
  import HybridView from "./lib/HybridView.svelte";
  import LeftControlPanel from "./lib/LeftControlPanel.svelte";
  import RightControlPanel from "./lib/RightControlPanel.svelte";
  import MobileUI from "./lib/MobileUI.svelte";

  interface Widget {
    icon: Component;
    textContent?: string | number;
  }

  let phLevel = $state(7.5);
  let currentVolumePercentage = $state(25);
  let quotaProgress = $state(0);
  let quotaGoal = $state(100);
  let refillCount = $state(0);
  let waterTemperature = $state(50);
  let currentTime = $state("");
  let outdoorTemperature = $state(42);

  const availableWidgets = $derived([
    {
      icon: icons.CloudDrizzle,
      textContent: `${outdoorTemperature}° F`
    },
    {
      icon: icons.TestTubeDiagonal,
      textContent: phLevel,
    },
    {
      icon: icons.Thermometer,
      textContent: `${waterTemperature}° F`,
    },
    {
      icon: icons.Clock,
      textContent: currentTime,
    }
  ] satisfies Widget[]);

  function updateTime() {
    currentTime = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })    
  }

  setInterval(updateTime, 6000);
  updateTime();
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

  .embedded-ui-content {
    background: black;
    background: linear-gradient(0deg, rgba(calc(-255 * (1 - (var(--water-temp) / 212)) + 255), 0, calc(255 * (1 - (var(--water-temp) / 212))), 1) 0%, rgba(26, 20, 20, 1) 50%);
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
          bind:waterTemperature={waterTemperature}
          widgets={availableWidgets}
        />
      </div>
    </section>
    <section id="embedded-ui-focus">
      <h2>Embedded UI Focus View</h2>
      <div class="section-content-container embedded-ui-content" style="--water-temp: {waterTemperature};">
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
          waterTemp={waterTemperature}
        />
      </div>
    </section>
  </main>
  <div class="control-panel">
    <RightControlPanel
      bind:phLevel={phLevel}
      bind:temperature={waterTemperature}
      bind:outdoorTemperature={outdoorTemperature}
    />
  </div>
</div>
