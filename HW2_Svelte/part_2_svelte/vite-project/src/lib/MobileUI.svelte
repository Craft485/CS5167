<script>
  import EmbeddedUIView from "./EmbeddedUIView.svelte";

  let {
    availableWidgets,
    widgets = $bindable(),
    refillCount = $bindable(),
    volume = $bindable(),
    waterTemp,
    quotaGoal = $bindable(),
    quotaProgress = $bindable(),
  } = $props();

  let config = $state(false);

  let addableWidgets = $derived(availableWidgets.map((/** @type {{name: string}} */ w) => w.name).filter((/** @type {string}*/ w) => !widgets.includes(w)));

  function toggleConfig() {
    config = !config;
  }

  function addWidget() {
    // @ts-ignore We don't care that value can be undefined, we already have handlers for that
    const widgetName = document.getElementById("widget-select")?.value ?? "";
    if (widgetName === "") {
      return;
    }
    const newWidget = availableWidgets.find((/** @type {{name: string}} */ widget) => widget.name === widgetName);
    if (newWidget !== undefined) {
      widgets.push(newWidget.name);
    }
  }
</script>

<style>
  .content-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #mobile-ui-container {
    position: relative;
    border-radius: 55px;
    border: solid thick grey;
    height: 5.81in;
    width: 2.82in;
    padding: 5px;
    background: black;
    background: linear-gradient(0deg, rgba(calc(-255 * (1 - (var(--water-temp) / 212)) + 255), 0, calc(255 * (1 - (var(--water-temp) / 212))), 1) 0%, rgba(26, 20, 20, 1) 50%);
  }

  .mobile-configure-btn {
    position: absolute;
    left: 0;
    right: 0;
    top: 90%;
    height: 10%;
    background: transparent;
    border: none;
    padding: 5% 0;
    border-top: medium solid white;
    outline: none;
    cursor: pointer;
    color: white;
    font-size: large;
    background: black;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }

  #add-widget-container {
    position: absolute;
    top: 20%
  }
</style>

<div class="content-container">
  <div id="mobile-ui-container" style="--water-temp: {waterTemp};">
    <div id="add-widget-container">
      {#if config === true && widgets.length < 4}
        <label for="widget-select">Choose a widget to add: </label>
        <select name="widget-select" id="widget-select">
          <option value="">-- Please select an option --</option>
          {#each addableWidgets as widgetName}
            <option value={widgetName}>{widgetName}</option>
          {/each}
        </select>
        <button onclick={addWidget}>Add Widget</button>
      {/if}
    </div>
    <EmbeddedUIView
      bind:refillCount={refillCount}
      bind:volume={volume}
      bind:quotaGoal={quotaGoal}
      bind:quotaProgress={quotaProgress}
      bind:widgets={widgets}
      availableWidgets={availableWidgets}
      configMenuEnabled={config}
      contentScale={1}
    />
    <button class="mobile-configure-btn" onclick={toggleConfig}>
      {#if config === false}
        Configure
      {:else}
        Save and Exit
      {/if}
    </button>
  </div>
</div>