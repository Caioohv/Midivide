<template>
  <div class="header">
    <div class="logo">
      <logo1Component />
    </div>
    <div class="menu">
      <div class="links" v-if="theme === 'light' || theme === 'dark'">
        <a v-for="(link, index) in links" :key="index" class="link-item">
          {{ link }}
          <span v-if="index !== 6" class="divider"></span>
        </a>
      </div>
    </div>
    <div class="user-info">
        <div class="user-settings">
            <div class="user-icon">
              <i class="fa-solid fa-user icons"></i>
            </div>
            <div class="user-details">
              <div class="title">Nome do usuário</div>
              <div class="subtitle">Cargo</div>
            </div>
            <div class="settings-icon">
              <i class="fa-solid fa-gear icons"></i>
            </div>
        </div>
    </div>

    <div class="hamburguer">
      <div class="hamburger-menu" :class="{ open: isOpen }" @click="openMenu($event)">
        <div class="hamburger-icon"></div>
      </div>
    </div>

    <div class="menu-lateral" :class="{ open: isOpen }">
      <div class="menu-user">
        <div class="menu-user-info">
          <div class="user-icon">
            <i class="fa-solid fa-user icons"></i>
          </div>
          <div class="user-details">
            <div class="title title-menu">Nome do usuário</div>
            <div class="subtitle subtitle-menu">Cargo</div>
          </div>
        </div>
      </div>

      <div class="menu-links">
        <a v-for="(link, index) in links" :key="index" class="menu-link-item">
          {{ link }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import logo1Component from "@/components/logo1Component.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      links: [
        "Inicio",
        "Avisos",
        "Tarefas",
        "Contas",
        "Eventos",
        "Membros",
        "Minha República"
      ],
      isOpen: false
    };
  },
  components: {
    logo1Component
  },
  computed: {
    ...mapGetters({
      theme: "getTheme"
    })
  },
  methods: {
    openMenu()
    {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style>
.header {
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: #333;
  z-index: 999;
  align-items: center;
}

.logo {
  width: 10%;
  display: flex;
  margin: 0px 0px 0px 15px;
  align-items: center;
}

.logo img {
  width: 45px;
  height: auto;
}

.menu {
  width: 55%;
  height: 70%;
}

.links {
  width: 100%;
  height: 100%;
  background-color: #e8e8e8;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.link-item {
  padding: 20px;
  color: #000;
  text-decoration: none;
  position: relative;
}

.link-item:hover {
  color: #9E76DB;
}

.divider {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 1px;
  background-color: #ccc;
}

.link-item:last-child .divider {
  display: none;
}

.link-item:hover .divider {
  background-color: #999;
}

.link-item:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  height: 80%;
  width: 1px;
  background-color: #ccc;
}

.link-item:first-child::after {
  display: none;
}

.link-item:first-child {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.link-item:last-child {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.link-item:hover::after {
  background-color: #999;
}

.user-info {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.user-settings {
  width: 55%;
  height: 60%;
  background-color: #b7b7b7;
  border-radius: 50px;
  display: flex;
  align-items: center;
}

.user-icon {
  width: 25%;
  height: 80%;
  background-color: #9e76db;
  border-radius: 50%;
  margin-left: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-icon i {
  color: #fff;
}

.user-details {
  margin-left: 10px;
  text-align: left;
  font-family: 'Montserrat';
}

.title {
  font-size: 15px;
  font-weight: bold;

}

.subtitle {
  font-size: 12px;
}

.settings-icon {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}

.settings-icon img {
  width: 20px;
  height: 20px;
}

.icons {
  font-size: 20px;
}

.menu-lateral{
  display: none;
}

@media (max-width: 1270px) {
  .user-info {
    width: 20%;
    margin-left: 50px;
  }

  .user-settings {
    width: 85%;
  }

  .user-icon {
    width: 20%;
    height: 65%;
  }

  .title{
    font-size: 13px;
  }

  .icons {
    font-size: 15px;
}
}
@media (max-width: 1150px) {
  .menu, .user-info {
    display: none;
  }
  
  .hamburguer {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
  }
  
  .hamburger-menu {
    display: block;
    position: fixed;
    right: 20px;
    width: 30px;
    height: 30px;
    background-color: transparent;
    cursor: pointer;
    z-index: 9999;
  }

  .hamburger-icon {
    position: relative;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  .hamburger-icon::before,
  .hamburger-icon::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    transition: transform 0.3s ease;
  }

  .hamburger-icon::before {
    top: -8px;
    transform-origin: top;
  }

  .hamburger-icon::after {
    top: 8px;
    transform-origin: bottom;
  }

  .hamburger-menu.open .hamburger-icon {
    background-color: unset;
  }

  .hamburger-menu.open .hamburger-icon::after {
    transform: rotate(45deg);
    background-color: #000;
  }

  .hamburger-menu.open .hamburger-icon::before {
    transform: rotate(-45deg);
    top: 8px;
    background-color: #000;
  }

  .menu-lateral.open{
    width: 40%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    height: 100vh;
    right: 0px;
    box-shadow: 1px 5px 5px 5px #121212b8;
    background-color: #9E76DB;
    display: flex;
    flex-direction: column;
  }
  
  .menu-user {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
  }

  .menu-user:after{
    right: 10px;
    left: 10px;
    content: "";
    position: absolute;
    width: 95%;
    height: 1px;
    top: 100px;
    background-color: #e7e7e7;
    transition: transform 0.3s ease;
  }

  .title-menu{
    color: #fff;
    font-weight: bold;
  }

  .subtitle-menu{
    color: #fff;
  }

  .menu-user-info{
    display: flex;
    width: 100%;
  }

  .user-icon{
    width: 5%;
    background-color: #fff;
    padding: 10px;
  }

  .user-icon .icons{
    color: #9E76DB;
  }

  .menu-links{
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 100px;
    flex-direction: column;
  }

  .menu-link-item{
    margin-left: 10px;
    margin-right: 10px;
    font-size: 20px;
    padding: 20px;
    color: #fff;
    border-bottom: 1px solid;
  }
}

@media (max-width: 735px) {
  .menu-lateral.open{
    width: 60%;
  }
}

@media (max-width: 475px) {
  .menu-lateral.open{
    width: 80%;
  }
}

@media (max-width: 340px) {
  .menu-lateral.open{
    width: 100%;
  }
}


</style>