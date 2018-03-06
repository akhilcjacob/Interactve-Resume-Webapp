<template>
 <transition name="fade" mode="out-in">
   <div class="col">
    <h3 class="text-center pt-3"> MY RESUME</h3>
    <div>
        <div class="container pt-3">
          <div class="row">
            <div class="m-auto text-center">
              <h4 class="section-heading">Education</h4>
              <hr class="col-4 light">
              <p align="center" class="text-shadow">
                <a  href="https://goo.gl/maps/HL5CnRkzN9t" target="_blank"><strong>  Rensselaer Polytechnic Institute</strong></a>
                <br>
                Computer Systems Engineering
                <br>
                <i>Grad: Dec. 2020</i>
            </p>
            <p align="center" class="text-shadow">
                <a href="https://goo.gl/maps/9nsM7v7rfr42" target="_blank">  <strong>  Shaker High School </strong> </a>
                <br>
                High School Diploma
                <br>
                <i> Class of 2012-2016</i>
            </p>
        </div>
    </div>
</div>
</div>
</div>
</transition>
</template>

<script>

export default {
  name: 'Resume',
  data: function () {
    return {
      show: true
    }
  }
}
</script>

<style >
.subtitle {
  font-size: 1rem;
  color: #515151;
}
</style>
