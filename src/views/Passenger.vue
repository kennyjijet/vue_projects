<template>
  <div>
    <div>Passenger</div>

    <div>{{ passengerId }}</div>
  </div>
</template>

<script>
export default {
  name: "Passenger",
  created() {
    //console.log("route", this.$router.query.PassengerId);
    this.passengerId = this.$route.params.PassengerId;
    console.log("route", this.$route.params.PassengerId);
  },
  props: {},

  data() {
    return {
      passengerId: 0
    };
  },
  methods: {}
};
</script>

