<template>
  <div class="home">
    <div class="home-header">
      <!-- Logo -->
      <!--<section class="bd-masthead pt-3 pt-sm-5 pb-2" data-v-0365440e>
        <article class="container" data-v-0365440e>
          <div class="row mb-2 mb-md-3 mb-lg-4 no-gutters align-items-center" data-v-0365440e>
            <aside class="logo-aside mb-4 mb-md-0 col-md-4 order-md-2 col-12" data-v-0365440e>
              <svg
                data-v-0365440e
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1200"
                version="1.1"
                shape-rendering="geometricPrecision"
                fill-rule="evenodd"
                clip-rule="evenodd"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                focusable="false"
                class="bv-logo"
              >
                <title data-v-0365440e>BootstrapVue</title>
                <defs data-v-0365440e>
                  <filter
                    data-v-0365440e
                    id="logo-shadow"
                    filterUnits="objectBoundingBox"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feOffset data-v-0365440e in="SourceAlpha" dx="-10" dy="25" result="ALPHA1" />
                    <feMorphology
                      data-v-0365440e
                      in="ALPHA1"
                      operator="dilate"
                      radius="15"
                      result="ALPHA"
                    />
                    <feGaussianBlur data-v-0365440e in="ALPHA" stdDeviation="20" result="DROP" />
                    <feFlood data-v-0365440e in="DROP" flood-color="#333" result="SOLID" />
                    <feComposite
                      data-v-0365440e
                      in="DROP"
                      in2="SOLID"
                      operator="in"
                      result="SHADOW1"
                    />
                    <feComponentTransfer data-v-0365440e in="SHADOW1" result="SHADOW">
                      <feFuncA data-v-0365440e type="linear" slope="0.55" />
                    </feComponentTransfer>
                    <feMerge data-v-0365440e>
                      <feMergeNode data-v-0365440e in="SHADOW" />
                      <feMergeNode data-v-0365440e in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <g data-v-0365440e>
                  <g data-v-0365440e filter="url(#logo-shadow)" class="logo-dark-v">
                    <path
                      data-v-0365440e
                      fill="#34495E"
                      d="M747 311L602 562 458 311H227l375 651 376-651z"
                    />
                  </g>
                  <g data-v-0365440e filter="url(#logo-shadow)" class="logo-purple-v">
                    <path
                      data-v-0365440e
                      fill="#563D7C"
                      fill-rule="nonzero"
                      d="M219 195h762L599 857z"
                    />
                    <path
                      data-v-0365440e
                      fill="#ffffff"
                      d="M501 282l132 0c25,0 44,5 59,16 15,12 22,28 22,51 0,14 -3,26 -10,35 -7,10 -16,18 -29,23l0 1c17,3 30,11 38,24 9,12 13,27 13,46 0,11 -2,21 -6,30 -3,9 -9,17 -17,24 -9,6 -19,12 -32,16 -12,4 -28,6 -45,6l-125 0 0 -272 0 0zm48 114l77 0c12,0 21,-4 29,-10 8,-7 11,-16 11,-28 0,-14 -3,-24 -10,-29 -7,-6 -17,-9 -30,-9l-77 0 0 76 0 0zm0 119l84 0c14,0 26,-4 33,-11 8,-8 13,-19 13,-32 0,-14 -4,-24 -13,-31 -8,-8 -19,-11 -33,-11l-84 0 0 85z"
                      class="logo-white-b"
                    />
                  </g>
                  <g data-v-0365440e filter="url(#logo-shadow)" class="logo-green-v">
                    <path
                      data-v-0365440e
                      fill="#41B883"
                      d="M839 357L600 771 361 357H202l398 690 398-690z"
                    />
                  </g>
                </g>
              </svg>
            </aside>
          </div>
        </article>
      </section>
      -->
      <!--
      <svg class="logoDiv" height="210" width="300">
        <path class="logo" d="M150 50 L75 200 L225 200 Z" />
      </svg>
      -->
      <svg
        class="logoDiv"
        width="4cm"
        height="4cm"
        viewBox="0 0 700 400"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <polygon
          class="logo"
          fill="red"
          stroke="red"
          stroke-width="10"
          points="350,75  379,161 469,161 397,215
                    423,301 350,250 277,301 303,215
                    231,161 321,161"
        />
      </svg>
    </div>
    <HomeComponent msg="Dragon" />
    <b-table v-if="loaded" striped hover :items="movies">
      <template slot="name" slot-scope="data">{{ data.value }}</template>
    </b-table>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from "@/components/HomeComponent.vue";
import axios from "axios";

import { mapActions, mapState } from "vuex";

export default {
  name: "home",
  components: {
    HomeComponent
  },
  data() {
    return {
      moviesLocal: [],
      loaded: false
    };
  },
  mounted() {
    this.created();
  },
  computed: {
    ...mapState(["movies"])
  },
  methods: {
    ...mapActions(["initialActionMovie"]),
    created() {
      axios
        .get("http://127.0.0.1:8000/get/movies/")
        .then(res => {
          console.log(res.data);
          this.initialActionMovie(res.data);
          console.log(this.movies);
          this.loaded = true;

          //this.moviesLocal = this["movies"];
          /*
          const payload = {
            data: {
              title: res.data[0].title,
              genre: res.data[0].genre,
              year: res.data[0].year
            }
          };
          */
          /*
          this.addMovie(res.data);
          this.movies = res.data;
          this.loaded = true;
          */

          //this.$log(res.data);
          //alert(res.data);
          //this.todos = res.data
          //this.console.log(res.data);
        })
        .catch(err => {
          console.log(err);
          //his.$log(err);
          //this.console.log(err);
          //alert(err);
        });
    }
  }
};
</script>
