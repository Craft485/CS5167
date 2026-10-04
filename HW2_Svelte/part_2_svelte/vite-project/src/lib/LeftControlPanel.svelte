<script>
    import { GitBranch, Info, Newspaper } from "@lucide/svelte";
  import QuotaControl from "./QuotaControl.svelte";
  import RefillControl from "./RefillControl.svelte";
  import VolumeControl from "./VolumeControl.svelte";

  let {
    volume = $bindable(),
    quotaProgress = $bindable(),
    quota = $bindable(),
    refillCount = $bindable(),
    daysSinceCleaned = $bindable(),
    infoToggle = $bindable(),
  } = $props();

  function drink() {
    volume -= 10;
    quotaProgress += 10;
  }

  function refill() {
    volume = 100;
    refillCount++;
  }

  function clean() {
    daysSinceCleaned = 0;
  }

  function toggleInfo() {
    infoToggle = !infoToggle;
  }
</script>

<style>
  :global(input[type="number"]) {
    field-sizing: content;
  }
  #controls-container {
    display: flex;
    flex-direction: column;
    gap: 5%;
    padding-top: 10%;
    height: 90%;
    overflow-y: auto;
  }

  button {
    cursor: pointer;
    width: 50%;
    border-radius: 10px;
    border: thin solid black;
    padding: 5% 2.5%;
    align-self: center;
  }

  hr {
    width: 90%;
  }

  #links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  #info-btn {
    width: initial;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.5% 5%;
    gap: 2px;
  }
</style>

<div id="controls-container">
  <VolumeControl bind:volume={volume} />
  <RefillControl bind:refillCount={refillCount} />
  <QuotaControl
    bind:quotaProgress={quotaProgress}
    bind:quotaTotal={quota}
  />
  <hr />
  <button onclick={drink}>Click to Drink</button>
  <button onclick={refill}>Click to Refill</button>
  <button onclick={clean}>Click to Clean</button>
  <hr />
  <div id="links">
    "Smart Water Bottle" by Colin Davis
    <span>
      <GitBranch />
      <a href="https://github.com/Craft485/CS5167/tree/master/HW2_Svelte/part_2_svelte/vite-project">View Source Code</a>
    </span>
    <span>
      <Newspaper />
      <a href="https://sites.google.com/view/portfoliocolindavis/ui-project-1-documentation">Project Documentation</a>
    </span>
    <button id="info-btn" onclick={toggleInfo}>
      <Info />
      Info
    </button>
  </div>
</div>