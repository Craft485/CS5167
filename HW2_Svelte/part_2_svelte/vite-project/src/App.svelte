<script lang="ts">
  import type { Component } from "svelte";
  import Controls from "./lib/Controls.svelte";
  import { icons } from "@lucide/svelte/icons";
    import EmbeddedUIView from "./lib/EmbeddedUIView.svelte";

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
    flex-direction: column;
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
    width: 33%;
    border-left: solid thin red;
    border-right: solid thin red;
  }

  h2 {
    border: thin solid white;
    border-top: none;
  }
</style>

<div id="page-content">
  <Controls
    quota={quotaGoal}
    quotaProgress={quotaProgress}
    bind:volume={currentVolumePercentage}
    bind:refillCount={refillCount}
  />
  <main>
    <section id="hybrid-view">
      <h2>Hybrid View</h2>
    </section>
    <section id="embedded-ui-focus">
      <h2>Embedded UI Focus View</h2>
      <EmbeddedUIView
        bind:refillCount={refillCount}
        bind:volume={currentVolumePercentage}
        widgets={availableWidgets}
      />
    </section>
    <section id="mobile-ui-focus">
      <h2>Mobile UI Focus View</h2>
    </section>
  </main>
</div>
