<template>
  <aside class="sidenav">
    <div class="conteudo__sidenav">
      <div class="logo">
        <span>LOGO</span>
      </div>
      <ul class="elementos">
        <li  @click="$emit('click-value', 'MainTemplate')">Home</li>
        <li  @click="$emit('click-value', 'EditarTemplate')">Editar</li>
        <li  @click="$emit('click-value', 'Sobre')">Sobre</li>
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
.logo {
  span {
    font-weight: 600;
    color: white;
  }
}
.sidenav {
  padding: 1rem;
  // border: 1px solid black;
  height: 100%;
  //   position: fixed;
  //   z-index: 1;
  //   top: 0;
  //   left: 0;
  //   background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
}
.conteudo__sidenav {
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
    transition: .1s ease;
    border-radius: 3px;
    color: white;
    cursor: pointer;
    &:hover {
      // background: rgb(220, 219, 219);
      background: rgb(131, 131, 131);
    }

    a {
      text-decoration: none;
      color: white;
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
  color: white;
  img {
    margin-left: 0.2rem;
  }
}
</style>