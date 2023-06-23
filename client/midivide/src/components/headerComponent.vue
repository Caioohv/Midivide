<template>
  <div class="header">
    <logo1Component />

    <div class="links"  v-if="theme == 'light' ? theme == 'light' : theme == 'dark'">
      <a v-for="(link, index) in links" :key="index" class="link-item">
        {{ link }}
        <span class="divider"></span>
      </a>
    </div>
  </div>
</template>

<script>
import logo1Component from "@/components/logo1Component.vue";
import { mapGetters } from 'vuex';


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
  computed:{
        ...mapGetters({
            theme: "getTheme"
        })
    }
};

</script>

<style>
.header {
  width: 100%;
  height: 125px;
  display: flex;
  position: fixed;
  top: 0;
  background-color: #333;
  z-index: 999; 
}
.logo {
  width: 20%;
}

.logo img {
  width: 100%;
  height: auto;
}

.links {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.link-item {
  padding: 20px;
  color: #fff;
  text-decoration: none;
  position: relative;
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

.link-item:hover {
  background-color: #999;
}

.link-item:hover .divider {
  background-color: #999;
}

.link-item::after {
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

</style>
