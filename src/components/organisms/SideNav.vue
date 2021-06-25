<template>
  <aside class="sidenav">
    <div class="conteudo__sidenav">
      <div class="logo">
        <span>LOGO</span>
      </div>
      <ul class="elementos">
        <li><a href="">Home</a></li>
        <li><a href="">Edição</a></li>
        <li><a href="">Sobre</a></li>
      </ul>
      <div class="perfil">

        <div class="logout">
          <span>Sair</span>
          <img
            src="../../assets/icons/logout-box-line.svg"
            alt=""
            class="sair"
          />
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo{
    span{
        font-weight: 600;
    }
}
.sidenav {
  padding: 1rem;
  border: 1px solid black;
  height: 100%;
//   position: fixed;
//   z-index: 1;
//   top: 0;
//   left: 0;
  //   background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
}
.conteudo__sidenav{
     display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.elementos {
    width: 100%;
  li {
    list-style: none;
    margin: 2.5rem 0;
    text-align: center;
    width: 100%;
    transition:  .2s ease-in-out;
    border-radius: 3px;
    &:hover{
        background: rgb(220, 219, 219);
    }

    a {
      text-decoration: none;
      color: black;
    }
  }
}
.card-simple-perfil {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
.logout {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  //   border: 1px solid;
  img {
    margin-left: 0.2rem;
  }
}
</style>