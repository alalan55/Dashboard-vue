<template>
    <main>
         <div class="card-simple-perfil">
          <div class="img-perfil">
            <img src="../../assets/profile2.jpg" alt="" />
          </div>
          <div class="text-perfil">
            <span>Olá, Alan!</span>
          </div>
        </div>
    </main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.card-simple-perfil {
    padding: .2rem;
  display: flex;
  align-items:center;

  justify-content: flex-end;
  & > div {
    margin: 0.2rem;
  }
  .img-perfil {
    height: 3rem;
    overflow: hidden;
    width: 3rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .text-perfil {
  }
}

</style>