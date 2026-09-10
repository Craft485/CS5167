<script lang="ts">
  let phLevel = $state(0);
</script>

<style>
  #ph-controller-container {
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

<div id="ph-controller-container">
  <label for="ph-controller">PH Level(0-14): </label>
  <input id="ph-controller" name="ph-controller" type="number" value={phLevel} min="0" max="14" />
</div>