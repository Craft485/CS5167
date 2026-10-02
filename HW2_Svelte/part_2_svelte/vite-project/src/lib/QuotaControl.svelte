<script lang="ts">
  // Is this a percentage or a unit of volume like ml?
  let { quotaProgress = $bindable(), quotaTotal = $bindable() } = $props();
</script>

<div id="quota-control-container">
  <span>Goal (ml): </span>
  <input type="number" bind:value={quotaProgress} max={quotaTotal} />
  /
  <input type="number" bind:value={quotaTotal} min={quotaProgress} />
</div>