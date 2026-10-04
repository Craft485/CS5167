<script lang="ts">
  import type { Component } from "svelte";
  import { icons } from "@lucide/svelte/icons";
  import EmbeddedUIView from "./lib/EmbeddedUIView.svelte";
  import HybridView from "./lib/HybridView.svelte";
  import LeftControlPanel from "./lib/LeftControlPanel.svelte";
  import RightControlPanel from "./lib/RightControlPanel.svelte";
  import MobileUI from "./lib/MobileUI.svelte";

  interface Widget {
    name: string;
    icon: Component;
    textContent?: string | number;
  }

  let phLevel = $state(7.5);
  let currentVolumePercentage = $state(33.33);
  let quotaProgress = $state(0);
  let quotaGoal = $state(100);
  let refillCount = $state(0);
  let waterTemperature = $state(50);
  let currentTime = $state("");
  let outdoorTemperature = $state(42);
  let daysSinceCleaned = $state(0);

  const availableWidgets = $derived([
    {
      name: "weather",
      icon: icons.CloudDrizzle,
      textContent: `${outdoorTemperature}° F`
    },
    {
      name: "ph",
      icon: icons.TestTubeDiagonal,
      textContent: phLevel,
    },
    {
      name: "water-temp",
      icon: icons.Droplet,
      textContent: `${waterTemperature}° F`,
    },
    {
      name: "time",
      icon: icons.Clock,
      textContent: currentTime,
    },
    {
      name: "last-cleaned",
      icon: icons.MopSparkles,
      textContent: daysSinceCleaned,
    }
  ] satisfies Widget[]);

  let activeWidgets = $state(["weather", "last-cleaned", "water-temp", "time"]);

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
      bind:daysSinceCleaned={daysSinceCleaned}
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
          bind:quotaProgress={quotaProgress}
          bind:quotaGoal={quotaGoal}
          bind:widgets={activeWidgets}
          availableWidgets={availableWidgets}
        />
      </div>
    </section>
    <section id="embedded-ui-focus">
      <h2>Embedded UI Focus View</h2>
      <div class="section-content-container embedded-ui-content" style="--water-temp: {waterTemperature};">
        <EmbeddedUIView
          bind:refillCount={refillCount}
          bind:volume={currentVolumePercentage}
          bind:quotaGoal={quotaGoal}
          bind:quotaProgress={quotaProgress}
          bind:widgets={activeWidgets}
          availableWidgets={availableWidgets}
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
          bind:quotaGoal={quotaGoal}
          bind:quotaProgress={quotaProgress}
          bind:widgets={activeWidgets}
          availableWidgets={availableWidgets}
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
      bind:daysSinceCleaned={daysSinceCleaned}
    />
  </div>
</div>
