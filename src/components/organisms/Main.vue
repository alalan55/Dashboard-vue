<template>
  <main>
    <div class="content">
      <div class="titulo">
        <h1>Acompanhe os seus leads</h1>
      </div>
      <div class="card-simple-perfil">
        <div class="img-perfil">
          <img src="../../assets/profile2.jpg" alt="" />
        </div>
        <div class="text-perfil">
          <span>Olá, Alan!</span>
        </div>
      </div>
    </div>
    <div class="lista">
        <slot/>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
  padding: .5rem;

  .titulo{
      h1{
          font-weight: 400;
      }
  }



  .card-simple-perfil {
  padding: 0.2rem;
  display: flex;
  align-items: center;
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
}
.lista{
    padding: .5rem;
}

@media screen and (max-width:648px){
  .titulo{
    h1{
      font-size: 1.5rem;
    }
  }
}
@media screen and (max-width:490px){
  .titulo{
    h1{
      font-size: 1rem;
    }
  }
}
@media screen and (max-width:400px){
  .img-perfil{
      width: 2.4rem !important;
      height: 2.4rem !important;
  }
}

</style>