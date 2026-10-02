<script>
  let { phLevel = $bindable() } = $props()
</script>

<style>
  #ph-controller-container {
    display: flex;
    justify-content: center;
    label {
      margin: 0;
      margin-right: 0.5rem;
    }
  }
</style>

<div id="ph-controller-container">
  <label for="ph-controller">PH Level(0-14): </label>
  <input id="ph-controller" name="ph-controller" type="number" bind:value={phLevel} min="0" max="14" />
</div>