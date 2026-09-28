<script>
  let { volume = $bindable() } = $props()
</script>

<div id="volume-control-container">
  <label for="volume-control">Volume %: </label>
  <input id="volume-control" name="volume-controller" type="number" bind:value={volume} min="0" max="100" />
</div>
