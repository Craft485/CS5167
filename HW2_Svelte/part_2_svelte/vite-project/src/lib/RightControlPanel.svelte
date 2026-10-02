<script>
  import PHCounterControl from "./PHCounterControl.svelte";
  import TemperatureControl from "./TemperatureControl.svelte";

  let { phLevel = $bindable(), temperature = $bindable() } = $props()
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
  <PHCounterControl bind:phLevel={phLevel} />
  <TemperatureControl bind:temperature={temperature} />
</div>