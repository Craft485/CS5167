<script>
  import PHCounterControl from "./PHCounterControl.svelte";
  import QuotaControl from "./QuotaControl.svelte";
  import RefillControl from "./RefillControl.svelte";
  import VolumeControl from "./VolumeControl.svelte";

  let { volume = $bindable(), quotaProgress, quota, refillCount = $bindable() } = $props()
</script>

<style>
  :global(input[type="number"]) {
    field-sizing: content;
  }
  #controls-container {
    display: flex;
    justify-content: space-evenly;
    padding: 1% 0;
    border-bottom: solid black thick;
  }
</style>

<div id="controls-container">
  <PHCounterControl />
  <VolumeControl bind:volume={volume} />
  <RefillControl bind:refillCount={refillCount} />
  <QuotaControl />
</div>