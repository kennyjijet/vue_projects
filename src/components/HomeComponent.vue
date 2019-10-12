<template>
  <div class="hello-component-container">
    <div>
      <!--<b-table striped hover :items="items"></b-table>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" }
      ]
    };
  }
};
</script>

<style lang="scss">
/*:-webkit-full-screen
$font-stack:Helvetica, sans-serif;
$primary-color: #333;


$bgcolor: lightblue;
$textcolor: darkblue;
$fontsize: 18px;

.hello {
  
  background-color: $bgcolor;
  color: $textcolor;
  font-size: $fontsize;

}

ul {
  list-style-type: none;
}
*/
</style>
