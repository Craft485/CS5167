<script>
  let { daysSinceCleaned = $bindable() } = $props()
</script>

<div id="cleaning-control-container">
  <label for="cleaning-control">Days Since Last Cleaned: </label>
  <input id="cleaning-control" name="cleaning-controller" type="number" bind:value={daysSinceCleaned} min="0" max="100" />
</div>
