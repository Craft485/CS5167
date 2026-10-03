<script>
  import EmbeddedUIView from "./EmbeddedUIView.svelte";

  let {
    widgets,
    refillCount = $bindable(),
    volume = $bindable(),
    waterTemp,
    quotaGoal = $bindable(),
    quotaProgress = $bindable(),
  } = $props();
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
    cursor: not-allowed;
    color: rgb(89, 89, 89);
    font-size: large;
    background: black;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    /* TODO: Remove if I implement proper mobile configuration */
    text-decoration: line-through;
  }
</style>

<div class="content-container">
  <div id="mobile-ui-container" style="--water-temp: {waterTemp};">
    <EmbeddedUIView
      bind:refillCount={refillCount}
      bind:volume={volume}
      bind:quotaGoal={quotaGoal}
      bind:quotaProgress={quotaProgress}
      widgets={widgets}
      contentScale={1}
    />
    <button class="mobile-configure-btn">Configure</button>
  </div>
</div>