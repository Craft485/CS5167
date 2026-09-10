<script lang="ts">
  // TODO: Enable configurable units (F vs C)
  let temperature = $state(0);
</script>

<style>
  #temp-controller-container {
    display: flex;
    label {
      margin: 0;
      margin-right: 0.5rem;
    }
    input {
      field-sizing: content;
    }
  }
</style>

<div id="temp-controller-container">
  <label for="temp-controller">Temperature(F): </label>
  <input id="temp-controller" name="temp-controller" type="number" value={temperature} />
</div>