<template>
  <modal name="hello-world">
    <ul class="list-group">
      <li
        v-bind:key="item"
        v-for="item in listLopaName"
        style="cursor : pointer"
        @click="loadLOPA(item)"
        class="list-group-item"
      >{{ item }}</li>
    </ul>
  </modal>
</template>
<script>
export default {
  name: "LopaPopUp",
  props: {
    loadLOPA: Function,
    lopaName: String,
    listLopaName: Array
  },
  data() {
    return {};
  },
  methods: {
    show() {
      this.$modal.show("hello-world");
    },
    hide() {
      this.$modal.hide("hello-world");
    }
  },
  mounted() {}
};
</script>