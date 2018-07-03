<template>
 <transition name="fade" mode="out-in">
   <div class="container m-auto w-50 pt-5">
   <div class="row pb-5">
     <i class="fa fa-github fa-4x m-auto"></i>
     <i class="fa fa-linkedin fa-4x m-auto"></i>
  </div>
   <div class="row pt-5">
     <i class="fa fa-envelope-o fa-4x m-auto"></i>
  </div>
   </div>
</transition>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped="">
p.subtitle {
  font-size: 2rem;
  color: blue;
}
</style>
