<script lang="ts">
  // Is this a percentage or a unit of volume like ml?
  let quotaTotal = $state(100);
  let quotaProgress = $state(0);
</script>

<style>
  input {
    field-sizing: content;
  }
</style>

<div id="quota-control-container">
  <span>Quota: </span>
  <input type="number" value={quotaProgress} max={quotaTotal} />
  /
  <input type="number" value={quotaTotal} min={quotaProgress} />
</div>