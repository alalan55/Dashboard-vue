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
}
@media screen and (max-width:680px){
  .container{
    min-height: 100vh;
  }
}

</style>
