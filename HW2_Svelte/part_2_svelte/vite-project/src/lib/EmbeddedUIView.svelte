<script>
  import { CircleMinus } from "@lucide/svelte";
  import Widget from "./Widget.svelte";

  let {
    widgets = $bindable(),
    availableWidgets,
    refillCount = $bindable(),
    volume = $bindable(),
    waterTemperature = $bindable(),
    contentScale,
    quotaGoal = $bindable(),
    quotaProgress = $bindable(),
    configMenuEnabled = false,
  } = $props();

  let activeWidgets = $derived(widgets.map((/** @type {string} */widgetName) => availableWidgets.find((/** @type {{name: string}} */widget) => widget.name === widgetName)));

  /**
   * @param {string} widgetName
   */
  function removeWidget(widgetName) {
    widgets = widgets.filter((/** @type {string} */ widget) => widget !== widgetName);
  }
</script>

<style>
  .embedded-view-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    font-size-adjust: var(--scale-factor);
  }

  .widgets {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  .embedded-view-main-display {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .fill {
    border: 2px solid white;
    border-radius: 100%;
    width: calc(50px * var(--scale-factor));
    height: calc(50px * var(--scale-factor));
    background: black;
    background: linear-gradient(0deg, blue var(--progress), black var(--progress));
  }

  #goal-container {
    font-size: 8px;
    padding-bottom: 15px;
  }

  .widget-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .remove-widget-btn {
    position: absolute;
    top: 100%;
    width: 100%;
    cursor: pointer;
    z-index: 100;
  }
</style>

<div class="embedded-view-container" style="--scale-factor: {contentScale}; --water-temp: {waterTemperature}">
  <section class="widgets">
    {#each activeWidgets as widget}
      <div class="widget-container">
        <Widget icon={widget.icon} textContent={widget.textContent} scale={contentScale}/>
        <div class="remove-widget-btn">
          {#if configMenuEnabled === true}
            <CircleMinus color="red" size="16" onclick={() => removeWidget(widget.name)} />
          {/if}
        </div>
      </div>
    {/each}
  </section>
  <section class="embedded-view-main-display">
    <div id="goal-container">
      Todays Goal:
      <br />
      {quotaProgress}ml / {quotaGoal}ml ({(quotaProgress / quotaGoal).toFixed(2)}%)
    </div>
    <div class="fill" style="--progress: {volume}%;"></div>
    <span>{refillCount}</span>
  </section>
</div>