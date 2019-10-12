<template>
  <div class="header-container">
    <!--
    <div class="search-container">
      <div class="search-box">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search.." aria-label="Recipient's username" aria-describedby="basic-addon2">
          <div class="input-group-append">
            <b-button class="search-btn">Search</b-button>
          </div>
        </div>
      </div>
    </div>
    -->
    <div>
      <b-navbar style="background-color: green" toggleable="lg" type="dark">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <router-link class="link" to="/">Home</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="link" to="/about">About</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="link" to="/coin">Coin</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="link" to="/webGL">WebGL</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="link" to="/algorithm">Algorithm</router-link>
            </b-nav-item>
            <!--
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
            -->
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!--
            <b-nav-item-dropdown text="ßßLang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
            -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div class="container-fluid" style="background-color: black">
      <div class="row" style="margin-top: 0px !important; background: none !important">
        <div class="col-md-6 searchText">Write something</div>
        <div class="col-md-6">
          <b-nav-form class="searchBox">
            <b-form-input class="searchInput" size="5" placeholder="Search"></b-form-input>
            <b-button class="searchBtn" size="5" type="submit" @click.prevent="search()">Search</b-button>
          </b-nav-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    msg: String
  },

  data() {
    return {};
  },
  methods: {
    search() {
      this.$router.push({ name: "about", params: {} });
      alert("search");
    },

    mergeSort() {
      /*
      var unsortedArr = [340, 1, 3, 3, 76, 23, 4, 12, 122, 7642, 646];
        function merge(leftArr, rightArr) {
        var sortedArr = [];
          while (leftArr.length && rightArr.length) {
            if (leftArr[0] <= rightArr[0]) {
              sortedArr.push(leftArr[0]);
              leftArr = leftArr.slice(1)
          } else {
              sortedArr.push(rightArr[0]);
              rightArr = rightArr.slice(1)
            }
          }
          while (leftArr.length)
            sortedArr.push(leftArr.shift());
          while (rightArr.length)
            sortedArr.push(rightArr.shift());
          return sortedArr;
        }
        function mergesort(arr) {
          if (arr.length < 2) {
            return arr; }
          else {
            var midpoint = parseInt(arr.length / 2);
            var leftArr   = arr.slice(0, midpoint);
            var rightArr  = arr.slice(midpoint, arr.length);
            return merge(mergesort(leftArr), mergesort(rightArr));
          }
        }
        */
      //console.log('This should be the sorted array!')
      //console.log(mergesort(unsortedArr));
    }
  }
};
</script>

<style lang="scss">
/*
@include media-breakpoint-down(xs) {
}
@include media-breakpoint-down(sm) {
}
@include media-breakpoint-down(md) {
}
@include media-breakpoint-down(lg) {
}
*/
</style>
