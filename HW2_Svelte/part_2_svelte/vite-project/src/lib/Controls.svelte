<script>
  import PHCounterControl from "./PHCounterControl.svelte";
    import QuotaControl from "./QuotaControl.svelte";
    import TemperatureControl from "./TemperatureControl.svelte";
</script>

<style>
  #controls-container {
    display: flex;
    justify-content: space-evenly;
    padding: 1% 0;
    border-bottom: solid black thick;
  }
</style>

<div id="controls-container">
  <PHCounterControl />
  <TemperatureControl />
  <QuotaControl />
</div>