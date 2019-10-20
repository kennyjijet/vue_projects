<template>
  <div @click="seatClick" class="seat">{{ this.$vnode.key }}</div>
</template>

<script>
export default {
  name: "Seat",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    seatClick() {
      //this.$router.push("Passenger");
      this.$router.push({
        name: "passenger",
        params: { PassengerId: this.$vnode.key }
      });
    }
  },
  mounted() {}
};
</script>


