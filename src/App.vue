<template>
  <div>
    <div class="">
     <h1 class="text-center">
      <vue-typer  style="color: blue;" text='Akhil Jacob' :repeat='0' caret-animation='smooth' pre-type-delay='300' @typed='showSubtitle="true"'></vue-typer>
    </h1>
    <h4 class="text-center">
      <vue-typer id="secondary"  @typed='showNav="true"' v-show="showSubtitle" :text='["Computer Systems Engineer","Software Engineer", "Web Developer", "Backend Developer", "Frontend Developer"]' caret-animation='smooth' pre-type-delay='1000'  :shuffle='true' :pre-erase-delay='2000'  :erase-delay='100'  erase-style='backspace'></vue-typer>
    </h4>
  </div>
  <transition name="fade" @afterEnter='showRouter="true"'>
   <div class="container w-100"  v-show="showNav">
    <nav class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link" href="#/projects/">Projects</a>
      </li>
      <li class="nav-item pt-2">//</li>
      <li class="nav-item">
        <a class="nav-link" href="#/resume/">Resume</a>
      </li>
      <li class="nav-item pt-2">//</li>
      <li class="nav-item">
        <a class="nav-link" href="#/contact/">Contact</a>
      </li>
      <li class="nav-item pt-2">//</li>
      <li class="nav-item about">
        <a class="nav-link active" href="#/about/">About</a>
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
      showRouter: false
    }
  },
  components: {
    VueTyper
  }

}

</script>
<style type="text/css">
html, body {
  margin: 0;
  height: 100%;
  background: #F1F3FA;
}

* {
  font-family: Anonymous Pro for Powerline;
}
.fade-enter-active, .fade-leave-active{
  transition: opacity 1s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  position: absolute;
  opacity: 0;

}

</style>
<style scoped>
h1{
 font-size: 60px;
}

.nav-item{
  margin-right: 10px;
  margin-left: 10px;
}

</style>
