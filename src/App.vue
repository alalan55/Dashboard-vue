<template>
<div class="container">

  <HomeTemplate/>
</div>
</template>

<script>
import {HomeTemplate} from '@/components/templates'
export default {
  name: "App",
  components: {
    HomeTemplate
  },
};
</script>

<style lang="scss">
.container{
  height: 100vh;
  background: url(https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260) no-repeat;
  background-size: cover;
}
@media screen and (max-width:680px){
  .container{
    min-height: 100vh;
  }
}

</style>
