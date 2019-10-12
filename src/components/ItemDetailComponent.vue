<template>
  <div class="itemDetail h-50">
    <img class="itemImg" src="@/assets/logo.png" />
    <article class="itemText">
      <h1>What Does WWF Do?</h1>
      <p>
        WWF's mission is to stop the degradation of our planet's natural environment,
        and build a future in which humans live in harmony with nature.
      </p>
    </article>
  </div>
</template>

<script>
export default {
  name: "ItemDetail",
  props: {
    msg: String
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
</style>
