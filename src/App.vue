<template>
  <div>
    <div class="">
     <h1 class="text-center col-10 m-auto pr-0 pl-1 text-center">
      <vue-typer  style="color: blue;" text='Akhil Jacob' :repeat='0' caret-animation='smooth' pre-type-delay='300' @typed='showSubtitle="true"'></vue-typer>
    </h1>
    <h4 class="text-center">
      <vue-typer id="secondary"  @typed='showNav="true"' v-show="showSubtitle" :text='["Computer Systems Engineer","Software Engineer", "Web Developer", "Backend Developer", "Frontend Developer"]' caret-animation='smooth' pre-type-delay='1000'  :shuffle='true' :pre-erase-delay='2000'  :erase-delay='100'  erase-style='backspace'></vue-typer>
    </h4>
  </div>
  <transition name="fade"  @afterEnter='showRouter="true"'>
   <div class="container w-75 "  v-show="showNav">
    <nav class="nav justify-content-center text-center">
      <li class="nav-item whitespace mt-2">
        <a class="nav-link  btn btn-outline btn-outline-primary  text-white" v-on:click="setActive('projects')" :class="{ coloring:isActive('projects') }" href="#/projects/">Projects</a>
      </li>
      <!-- <li class="nav-item pt-2">//</li> -->
      <li class="nav-item mt-2">
        <a class="nav-link  text-white btn btn-outline btn-outline-primary  text-white" v-on:click="setActive('resume')" :class="{ coloring:isActive('resume') }" href="#/resume/">Resume</a>
      </li>
      <!-- <li class="nav-item pt-2">//</li> -->
      <li class="nav-item  mt-2">
        <a class="nav-link  text-white btn btn-outline btn-outline-primary  text-white" v-on:click="setActive('contact')" :class="{ coloring:isActive('contact') }" href="#/contact/">Contact</a>
      </li>
      <!-- <li class="nav-item pt-2">//</li> -->
      <li class="nav-item  mt-2 about">
        <a class="nav-link  text-white btn btn-outline btn-outline-primary  text-white" v-on:click="setActive('about')" :class="{ coloring:isActive('about') }" href="#/about/">About</a>
      </li>
    </nav>
  </div>
</transition>
<transition name="fade">
  <div id="app" v-show="showRouter" class="col pt-4">
    <router-view/>
  </div>
</transition>
</div>

</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  name: 'App',
  data: function () {
    return {
      showNav: false,
      showSubtitle: false,
      showRouter: false,
      activeItem: this.$route.path.replace(/\//g, '')
    }
  },

  methods: {
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem // no need for Vue.set()
    }
  },
  components: {
    VueTyper
  }

}

</script>
<style>
html, body {
  margin: 0;
  height: 100%;
  background: #F1F3FA;
  font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));

}
.vue-typer .custom.char.typed {
  color: white;
}
.vue-typer .custom.caret {
  background-color: white;
}
* {
 font-family: "Anonymous Pro";
}
.fade-enter-active, .fade-leave-active{
  transition: opacity 1s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  position: absolute;
  opacity: 0;

}

.nav-link{
  border-color: transparent;
}
.bg-faded-white{
  border-color: white;
  border-style: solid;
  border-top: 10px;
  border-left: 0;
  border-right: 0;
  border-bottom: 0;
  /*background-color: rgba(255,255,255,0.4);*/
}

.nav-item{
  margin-right: 10px;
  margin-left: 10px;
}
</style>
