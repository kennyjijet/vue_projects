<template>
  <div class="coin">
    <GeneralComponent />
    <img :src="`${path}`" @click="clickCoin()" />
  </div>
</template>

<script>
//import axios from 'axios';
import GeneralComponent from "@/components/GeneralComponent.vue";

export default {
  name: "Coin",
  components: {
    GeneralComponent
  },
  data() {
    return {
      path: "",
      indexImg: 1,
      typeCoin: "Coin"
    };
  },
  methods: {
    runCoin() {
      //alert("running");
      setTimeout(() => {
        this.runCoin();
        if (this.typeCoin === "Coin") {
          this.indexImg >= 20 ? (this.indexImg = 1) : this.indexImg++;
          this.path = require("../assets/coins/" +
            this.typeCoin +
            this.indexImg +
            ".png");
        } else if (this.typeCoin === "top") {
          this.indexImg >= 20 ? (this.indexImg = 20) : this.indexImg++;
          this.path = require("../assets/coins/" +
            this.typeCoin +
            this.indexImg +
            ".png");
        }
      }, 100);
    },
    clickCoin() {
      this.typeCoin = "top";
    }
  },
  mounted() {
    //created();
    this.runCoin();
  }
};
</script>

