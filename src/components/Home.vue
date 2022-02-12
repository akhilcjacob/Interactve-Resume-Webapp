<template>
 <transition name="fade" mode="out-in">

  <div>
    <div class="col-9 m-auto align-content-center text-center pt-3">
      <h3>ALL ABOUT ME</h3>
      <p class="subtitle">
        Hi my name is <strong>Akhil Jacob</strong>. Currently I am 23 years old, and a sophomore at <strong>Renssealaer Polytechnic Institute.</strong> I'm <strong>Computer Systems Engineer</strong> with passion for working with computers, problem-solving, and new experiences. Always curious as to how the world around us works, and with quest to learn more. I am quick learner and highly motivated. And always push to explore new things, whether it's learning a new programming language or trying new foods in a different country.
        <br>
        <br>
        <!-- <strong>A fun fact about me</strong>, I have traveled all over the world. Places I've been: -->
      </p>
    </div>
    <!-- <div class="m-auto col-10 text-center pt-3">
      <div class="google-maps">
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1tOgz6eB3eRflYXEXu_qw3UQ8QYLzxKUN" width="640" height="400" frameborder="0" style="border:0"></iframe>
      </div> -->
    <!-- </div> -->
  </div>
</transition>
</template>

<script>
export default {
  name: 'Hello'
}
</script>

<style scoped="">
.subtitle {
  font-size: 1rem;
  color: #dfdfdf;
}
.google-maps {
  overflow: hidden;
}
</style>
