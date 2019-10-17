<template>
  <div class="container">
    <div class="lopaBody-container">
      <!--<ul id="example-1">
        <li :key="index" v-for="(item, index) in items">{{ item.message }}</li>
      </ul>
      -->
      <Seat v-for="(item, index) in items" :key="index" :value="item" />
    </div>
  </div>
</template>

<script>
import Seat from "@/components/Lopa/Seat";
export default {
  name: "LopaBody",
  components: {
    Seat
  },
  props: {},
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }]
    };
  },
  methods: {},
  mounted() {}
};
</script>


