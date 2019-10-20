<template>
  <div class="container-fluid">
    <GeneralComponent />
    <LopaHeader v-on:show="show" />
    <LopaPopUp ref="LopaPopup" :listLopaName="listLopaName" v-bind:loadLOPA="loadLOPA" />
    <LopaBody :lopa="lopaSeats.data" />
    <LopaFooter />
  </div>
</template>

<script>
//import axios from 'axios';
import GeneralComponent from "@/components/GeneralComponent.vue";
import LopaHeader from "@/components/Lopa/LopaHeader.vue";
import LopaPopUp from "@/components/Lopa/LopaPopUp.vue";
import LopaBody from "@/components/Lopa/LopaBody.vue";
import LopaFooter from "@/components/Lopa/LopaFooter.vue";

import { mapGetters } from "vuex";

export default {
  name: "Lopa",
  components: {
    GeneralComponent,
    LopaHeader,
    LopaPopUp,
    LopaBody,
    LopaFooter
  },
  props: {},
  data() {
    return {
      lopaSelected: "LOPA1",
      lopaSeats: [],
      listLopaName: []
    };
  },
  computed: {
    ...mapGetters(["getLopa"])
  },
  methods: {
    show() {
      this.$refs.LopaPopup.show();
    },
    hide() {
      this.$refs.LopaPopup.hide();
    },
    loadLOPA(lopaName) {
      this.hide();
      console.log(lopaName);
      if (this.lopaSelected === lopaName) return;
      this.lopaSelected = lopaName;
      this.lopaSeats = this.getLopa[this.lopaSelected];
    }
  },
  mounted() {
    this.lopaSeats = this.getLopa[this.lopaSelected];
    for (const value in this.getLopa) {
      this.listLopaName.push(this.getLopa[value].name);
    }
  }
};
</script>