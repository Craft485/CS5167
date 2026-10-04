<script>
  import QuotaControl from "./QuotaControl.svelte";
  import RefillControl from "./RefillControl.svelte";
  import VolumeControl from "./VolumeControl.svelte";

  let {
    volume = $bindable(),
    quotaProgress = $bindable(),
    quota = $bindable(),
    refillCount = $bindable(),
    daysSinceCleaned = $bindable(),
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
</div>