<script>
  import PHCounterControl from "./PHCounterControl.svelte";
  import TemperatureControl from "./TemperatureControl.svelte";

  let { phLevel = $bindable(), temperature = $bindable(), outdoorTemperature = $bindable() } = $props()
</script>

<style>
  :global(input[type="number"]) {
    field-sizing: content;
  }
  #controls-container {
    display: flex;
    flex-direction: column;
    gap: 5%;
    padding-top: 10%;
    height: 90%;
    overflow-y: auto;
  }
</style>

<div id="controls-container">
  <PHCounterControl bind:phLevel={phLevel} />
  <div>
    <span>Water Temp:</span>
    <TemperatureControl bind:temperature={temperature} />
  </div>
  <div>
    <span>Outdoor Temp:</span>
    <TemperatureControl bind:temperature={outdoorTemperature}/>
  </div>
</div>