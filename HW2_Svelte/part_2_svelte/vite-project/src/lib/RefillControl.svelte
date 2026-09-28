<script>
  let { refillCount = $bindable() } = $props()
</script>

<div id="refill-control-container">
  <label for="refill-control">Refills: </label>
  <input id="refill-control" name="refill-control" type="number" bind:value={refillCount} />
</div>