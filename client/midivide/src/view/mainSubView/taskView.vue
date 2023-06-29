<template>
  <div class="taskBody">
    <boxComponent
      class="leftBox"
      v-if="pendingTask.length + doneTask.length > 0"
    >
      <textTitleComponent content="Minhas Tarefas" />

      <div class="taskList">
        <div class="task" v-for="pending in pendingTask" :key="pending.id">
          <textSubTitleComponent class="taskInfo" :content="pending.name" />
          <textSubTitleComponent
            class="taskInfo"
            :content="translateTask(pending.interval)"
          />
          <div class="buttonBox">
            <buttonComponent
              @click="completeTask(pending.id)"
              value="Feito"
              bgc="#35FF69"
              height="10"
              color="#FFF"
            />
          </div>
        </div>
        <div class="task" v-for="done in doneTask" :key="done.id">
          <textSubTitleComponent class="taskInfo" :content="done.name" />
          <textSubTitleComponent
            class="taskInfo"
            :content="translateTask(done.interval)"
          />
          <div class="buttonBox">
            <textSubTitleComponent
              class="taskInfo"
              content="Tarefa já realizada!"
            />
          </div>
        </div>
      </div>
    </boxComponent>

    <boxComponent class="centerBox">
      <textTitleComponent content="Tarefas" />

      <div class="formBox">
        <div class="inputBox">
          <InputTextComponent placeholder="Nome" class="nameInput" />
        </div>
        <div class="inputBox">
          <inputOptionComponent
            placeholder="Recorrência"
            :task="true"
            :itens="interval"
            class="intervalInput"
          />
        </div>
        <div class="inputBox">
          <inputOptionComponent
            placeholder="Responsável"
            :task="true"
            :itens="users"
            class="respInput"
          />
        </div>

        <textSubTitleComponent class="subTitle" content="Observações:" />
        <textSubTitleComponent
          class="subTitle"
          content="Se a tarefa não for recorrente, não selecione o intervalo"
        />
        <textSubTitleComponent
          class="subTitle"
          content="Se o responsável não for selecionado a atribuição será automática"
        />
      </div>

      <buttonComponent
        @click="registerTask"
        value="Cadatrar tarefa"
        bgc="#9E76DB"
        color="#FFF"
      />
    </boxComponent>

    <boxComponent class="rightBox" v-if="allTask.length > 0">
      <textTitleComponent content="Todas Tarefas" />

      <div class="taskList">
        <div class="task" v-for="all in allTask" :key="all.id">
          <textSubTitleComponent class="taskInfo" :content="all.name" />
          <textSubTitleComponent
            class="taskInfo"
            :content="translateTask(all.interval)"
          />
          <textSubTitleComponent
            class="taskInfo"
            :content="veirifyDone(all.done)"
          />
          <div class="buttonBox" v-if="user.admin">
            <buttonComponent
              @click="deleteTask(all.id)"
              value="Apagar Tarefa"
              bgc="#DB2955"
              height="10"
              color="#FFF"
            />
          </div>
        </div>
      </div>

      <buttonComponent
        @click="balanceTask()"
        class="balanceButton"
        value="Equilibrar tarefas"
        bgc="#9E76DB"
        height="10"
        color="#FFF"
      />
    </boxComponent>
  </div>
</template>

<script>
import boxComponent from "@/components/boxComponent.vue";
import inputOptionComponent from "@/components/inputOptionComponent.vue";
import InputTextComponent from "@/components/InputTextComponent.vue";
import textTitleComponent from "@/components/textTitleComponent.vue";
import textSubTitleComponent from "@/components/textSubTitleComponent.vue";
import buttonComponent from "@/components/buttonComponent.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    boxComponent,
    inputOptionComponent,
    InputTextComponent,
    textTitleComponent,
    textSubTitleComponent,
    buttonComponent,
  },

  data() {
    return {
      users: [],
      interval: [
        {
          name: "Diaria",
          id: "day",
        },
        {
          name: "Semanal",
          id: "week",
        },
        {
          name: "Mensal",
          id: "month",
        },
      ],
      pendingTask: [],
      doneTask: [],
      allTask: [],
    };
  },

  computed: {
    ...mapGetters({
      token: "getToken",
      user: "getUser",
    }),
  },

  methods: {
    deleteTask(id) {

      const API = require("../../config");

      const axios = require("axios");
      let data = "";

      let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `${API.url}/tasks/${id}`,
        headers: {
          Authorization: this.token,
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(response.data);
          this.bringAllTask();
          this.bringMyTask();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    balanceTask() {
      const API = require("../../config");

      const axios = require("axios");
      let data = "";

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${API.url}/tasks/allocate`,
        headers: {
          Authorization: this.token,
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          window.alert("As tarefas foram distribuidas igualmente!");
          this.bringMyTask();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    veirifyDone(done) {
      if (done) {
        return "Feito!";
      }

      return "Pedente!";
    },

    completeTask(id) {
      const API = require("../../config");

      const axios = require("axios");
      let data = "";

      let config = {
        method: "put",
        maxBodyLength: Infinity,
        url: `${API.url}/tasks/${id}/done`,
        headers: {
          Authorization: this.token,
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.bringMyTask();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    translateTask(interval) {
      for (var i = 0; i < this.interval.length; i++) {
        if (interval == null) {
          return "Sem recorreência!";
        }

        if (interval == this.interval[i].id) {
          return "Recorrência: " + this.interval[i].name;
        }
      }
    },

    registerTask() {
      var obj = {
        name: document.querySelector(".nameInput").childNodes[0].childNodes[0]
          .value,
        interval: document.querySelector(".intervalInput").value,
        resp: document.querySelector(".respInput").value,
      };

      var specific = true;
      var repeat = true;

      if (obj.interval == "") {
        repeat = false;
        obj.interval = null;
      }
      if (obj.resp != "") {
        specific = false;
        obj.resp = null;
      }

      const API = require("../../config");

      const axios = require("axios");
      let data = JSON.stringify({
        name: obj.name,
        specific: specific,
        responsible_user_id: obj.resp,
        repeat: repeat,
        interval: obj.interval,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${API.url}/tasks`,
        headers: {
          Authorization: this.token,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          window.alert("Tarefa cadastrada com sucesso!");
        })
        .catch((error) => {
          console.log(error);
        });
    },

    bringMyTask() {
      const API = require("../../config");

      const axios = require("axios");
      let data = "";

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${API.url}/tasks`,
        headers: {
          Authorization: this.token,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          this.pendingTask = response.data.pending;
          this.doneTask = response.data.done;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    bringAllTask() {
      const API = require("../../config");

      const axios = require("axios");
      let data = "";

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${API.url}/tasks/all`,
        headers: {
          Authorization: this.token,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          this.allTask = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  beforeMount() {
    this.bringMyTask();

    if (this.user.admin) {
      this.bringAllTask();
    }

    const API = require("../../config");

    const axios = require("axios");
    let data = "";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API.url}/house/members`,
      headers: {
        Authorization: this.token,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.taskBody {
  display: flex;
  column-gap: 15px;
  margin-top: 60px;
}

.subTitle {
  font-size: 10px !important;
  line-height: 10px;
}

.centerBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  padding: 20px;
}

.formBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  text-align: center;
}

.inputBox > :first-child {
  width: 170px;
}

.leftBox,
.rightBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: fit-content;
  padding: 20px 10px 20px 10px;
}

.balanceButton {
  margin-top: 10px;
}

.taskList {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  row-gap: 15px;
  max-height: 250px;
  padding: 5px;
}

.task {
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: #9e76db 2px solid;
  padding: 12px 15px 12px 15px;
  row-gap: 5px;
}

.taskInfo {
  font-size: 15px;
  line-height: 15px;
}

.buttonBox {
  margin-top: 10px;
}

.taskList::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
  flex: 0;
}

.taskList::-webkit-scrollbar-track {
  background-color: transparent;
}

.taskList::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

.taskList::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

@media (max-width: 500px) {
  .taskBody {
    margin-top: 120px;
    margin-bottom: 60px;
    flex-direction: column;
    row-gap: 20px;
    justify-content: center;
    align-items: center;
    width: 80%;
  }

  .taskList {
    max-height: 150px;
  }

  .leftBox,
  .rightBox,
  .centerBox {
    width: 100%;
  }
}
</style>
