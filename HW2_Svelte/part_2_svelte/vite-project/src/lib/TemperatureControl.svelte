<script lang="ts">
  let { temperature = $bindable() } = $props()
</script>

<style>
  #temp-controller-container {
    display: flex;
    justify-content: center;
    label {
      margin: 0;
      margin-right: 0.5rem;
    }
  }
</style>

<div id="temp-controller-container">
  <label for="temp-controller">Temperature(F): </label>
  <input id="temp-controller" name="temp-controller" type="number" bind:value={temperature} />
</div>