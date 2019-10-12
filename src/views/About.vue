<template>
  <div class="about">
    <GeneralComponent />
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
          <ItemDetailComponent />
        </div>
        <div class="col-sm-6">
          <ItemDetailComponent />
        </div>
        <b-list-group>
          <b-list-group-item
            v-for="(answer, index) in shuffledAnswers"
            :key="index"
            @click.prevent="selectAnswer(index)"
            :class="answerClass(index)"
          >{{ answer }}</b-list-group-item>
        </b-list-group>
      </div>
      <!--
      <div class="row">
        <div class="col-sm-4" style="background-color:yellow;">33.33%</div>
        <div class="col-sm-4" style="background-color:orange;">33.33%</div>
        <div class="col-sm-4" style="background-color:yellow;">33.33%</div>
      </div>
      -->
      <!--
      <div class="row">
        <div class="col-sm" style="background-color:yellow;">25%</div>
        <div class="col-sm" style="background-color:orange;">25%</div>
        <div class="col-sm" style="background-color:yellow;">25%</div>
        <div class="col-sm" style="background-color:orange;">25%</div>
      </div>
      -->
    </div>
  </div>
</template>

<script>
//import axios from 'axios';
import GeneralComponent from "@/components/GeneralComponent.vue";
import ItemDetailComponent from "@/components/ItemDetailComponent.vue";

export default {
  name: "About",
  components: {
    GeneralComponent,
    ItemDetailComponent
  },
  props: {
    msg: String
  },
  data() {
    return {
      shuffledAnswers: []
    };
  },
  methods: {
    /*
    created() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => this.todos = res.data)
      .catch(err => console.log(err));
    }
    */
  },
  mounted() {
    //created();
  }
};
</script>

<style lang="scss">
</style>

