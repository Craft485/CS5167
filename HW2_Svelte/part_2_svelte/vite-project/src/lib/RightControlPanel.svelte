<script>
  import PHCounterControl from "./PHCounterControl.svelte";

  let { phLevel = $bindable() } = $props()
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
</div>