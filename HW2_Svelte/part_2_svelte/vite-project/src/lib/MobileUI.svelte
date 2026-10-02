<script>
  import EmbeddedUIView from "./EmbeddedUIView.svelte";

  let { widgets, refillCount = $bindable(), volume = $bindable() } = $props();
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
    background-color: hsl(231, 14%, 10%);
    padding: 5px;
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
    /* TODO: Remove if I implement proper mobile configuration */
    text-decoration: line-through;
  }
</style>

<div class="content-container">
  <div id="mobile-ui-container">
    <EmbeddedUIView
      bind:refillCount={refillCount}
      bind:volume={volume}
      widgets={widgets}
      contentScale={1}
    />
    <button class="mobile-configure-btn">Configure</button>
  </div>
</div>