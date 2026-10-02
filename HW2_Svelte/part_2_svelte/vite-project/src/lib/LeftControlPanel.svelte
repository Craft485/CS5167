<script>
  import QuotaControl from "./QuotaControl.svelte";
  import RefillControl from "./RefillControl.svelte";
  import VolumeControl from "./VolumeControl.svelte";

  let { volume = $bindable(), quotaProgress = $bindable(), quota = $bindable(), refillCount = $bindable() } = $props()
</script>

<style>
  :global(input[type="number"]) {
    field-sizing: content;
  }
  #controls-container {
    display: flex;
    flex-direction: column;
    margin-top: 10%;
  }
</style>

<div id="controls-container">
  <VolumeControl bind:volume={volume} />
  <RefillControl bind:refillCount={refillCount} />
  <QuotaControl
    bind:quotaProgress={quotaProgress}
    bind:quotaTotal={quota}
  />
</div>