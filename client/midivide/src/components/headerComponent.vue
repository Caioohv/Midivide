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
      ]
    };
  },
  components: {
    logo1Component
  },
  computed: {
    ...mapGetters({
      theme: "getTheme"
    })
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
  width: 100%;
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
  height: 90%;
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
}

.title {
  font-size: 15px;
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
</style>
