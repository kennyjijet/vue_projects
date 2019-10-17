<template>
  <div class="container-fluid">
    <GeneralComponent />
    <LopaHeader v-on:show="show" />
    <LopaPopUp ref="LopaPopup" />
    <LopaBody />
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
    return {};
  },
  methods: {
    show() {
      this.$refs.LopaPopup.show();
    },
    hide() {
      this.$refs.LopaPopup.hide();
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
</style>

