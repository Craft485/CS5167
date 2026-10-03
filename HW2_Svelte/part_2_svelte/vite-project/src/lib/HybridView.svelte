<script>
  import EmbeddedUIView from "./EmbeddedUIView.svelte";
  
  let {
    refillCount = $bindable(),
    volume = $bindable(),
    waterTemperature = $bindable(),
    widgets = $bindable(),
    quotaGoal = $bindable(),
    quotaProgress = $bindable(),
    availableWidgets,
  } = $props();
</script>

<style>
  #hybrid-view-container {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-image: url("https://raw.githubusercontent.com/Craft485/CS5167/refs/heads/master/HW2_Svelte/part_2_svelte/vite-project/public/hybrid-view-bg.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .hybrid-content-container {
    width: 50%;
    height: 40%;
    padding: 2.5%;
    border-radius: 30px;
    background: black;
    background: linear-gradient(0deg, rgba(calc(-255 * (1 - (var(--water-temp) / 212)) + 255), 0, calc(255 * (1 - (var(--water-temp) / 212))), 1) 0%, rgba(26, 20, 20, 1) 50%);
  }
</style>

<div id="hybrid-view-container" style="--water-temp: {waterTemperature}">
  <div class="hybrid-content-container">
    <EmbeddedUIView
      bind:refillCount={refillCount}
      bind:volume={volume}
      bind:quotaGoal={quotaGoal}
      bind:quotaProgress={quotaProgress}
      bind:widgets={widgets}
      availableWidgets={availableWidgets}
      contentScale={0.5}
    />
  </div>
</div>