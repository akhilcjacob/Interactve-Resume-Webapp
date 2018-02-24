<template>
  <div class="container m-0 p-0">
    <div class="row ">
      <div class="col-4">
         <nav class="nav navbar navbar-dark flex-column">
        <div class="container link-container h-50">
          <div class="col">
            <img src="./assets/me.png" href="/about/" class="img">
          </div>
          <a class="nav-link text-center" href="/about/"><h3 class="font-weight-bold">Akhil Jacob</h3></a>
          <a class="nav-link text-center" href="/about/">About Me</a>
          <a class="nav-link text-center" href="/projects/">Projects</a>
          <a class="nav-link text-center" href="/work/">Work Experience</a>
          <a class="nav-link text-center" href="/contact/">Contact</a>
        </div>
      </nav>
      </div>

      <div id="app" class="col-8">
        <router-view/>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'App'
}

</script>
<style type="text/css">
html, body {
    margin: 0;
    height: 100%;
  background: #F1F3FA;
}

.navbar{
  background: #2F343F;
  /*width: 300px;*/
  width: 100%;
  position: absolute;
  top:0;
  height: 100vh;
}

.nav-link{
  width: 100%;
  color: white;
}
.link-container {
  position: absolute;
  top: 50%;
  transform: translateY(-60%);
}
.img {
  width: 60%;
  margin: auto;
  display: block;
  border-radius: 100%;
  padding: 10px;
  padding-left: 20px;
  background: rgba(255, 255, 255, 0.8);
}
.block{
  z-index: 1;
}
</style>
