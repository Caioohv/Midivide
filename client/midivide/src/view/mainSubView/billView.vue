<template>
  <div class="billBody">
    <boxComponent class="leftBox">
      <textTitleComponent content="Minhas Contas" class="title" />

      <div class="myBillList">
        <div class="myBill" v-for="unpaid in myBillUnpaid" :key="unpaid.id">
          <textSubTitleComponent
            :content="unpaid.bill_data.name"
            class="subTitle billTitle"
          />
          <textSubTitleComponent
            :content="`Valor: R$${unpaid.value}`"
            class="subTitle"
          />
          <textSubTitleComponent
            :content="`Pix: ${unpaid.bill_data.destination}`"
            class="subTitle"
          />
          <textSubTitleComponent
            :content="`Vencimento: ${formatData(unpaid.bill_data.due_date)}`"
            class="subTitle"
          />
          <buttonComponent
            @click="payBill(unpaid.id)"
            class="payButton"
            value="Pagar"
            bgc="#35FF69"
            height="10"
          />
        </div>

        <div class="myBill" v-for="paid in myBillPaid" :key="paid.id">
          <textSubTitleComponent
            :content="paid.bill_data.name"
            class="subTitle billTitle"
          />
          <textSubTitleComponent
            :content="`Valor: R$${paid.value}`"
            class="subTitle"
          />
          <textSubTitleComponent
            :content="`Pix: ${paid.bill_data.destination}`"
            class="subTitle"
          />
          <textSubTitleComponent
            :content="`Vencimento: ${formatData(paid.bill_data.due_date)}`"
            class="subTitle"
          />
          <textSubTitleComponent
            content="Pagamento efetuado!"
            class="subTitle payButton"
          />
        </div>
      </div>
    </boxComponent>

    <boxComponent class="centerBox">
      <textTitleComponent content="Cadastrar Conta" class="title" />

      <div class="formBox">
        <div class="inputBox">
          <InputTextComponent placeholder="Nome" class="nameInput" />
          <InputTextComponent
            placeholder="Valor"
            class="valueInput"
            type="number"
          />
        </div>

        <div class="inputBox">
          <InputTextComponent placeholder="Pix" class="destinationInput" />
        </div>

        <div class="inputBox">
          <textSubTitleComponent
            class="subTitle"
            content="Data de Vencimento"
          />
          <InputTextComponent
            placeholder="Data"
            type="date"
            class="dateInput"
          />
        </div>

        <boxComponent class="userBox">
          <div class="userHeader">
            <textSubTitleComponent content="Participantes" class="subTitle" />

            <div class="allUser">
              <input
                type="checkbox"
                @click="selectAll($event)"
                class="allCheckbox"
              />
              <textSubTitleComponent content="Todos" class="subTitle" />
            </div>
          </div>

          <div class="userList">
            <div class="user" v-for="user in users" :key="user.id">
              <input
                type="checkbox"
                @click="selectUser(user.id, $event)"
                class="checkbox"
              />
              <textSubTitleComponent :content="user.name" class="subTitle" />
            </div>
          </div>
        </boxComponent>
      </div>

      <buttonComponent
        @click="registerBill()"
        value="Cadastrar"
        bgc="#9E76DB"
        color="#FFF"
        height="10"
      />
    </boxComponent>

    <boxComponent class="rightBox">
      <textTitleComponent content="Todas Contas" class="title" />

      <div class="allList">
        <div class="bill" v-for="bill in allBill" :key="bill.id">
          <textSubTitleComponent
            :content="bill.name"
            class="subTitle billTitle"
          />
          <textSubTitleComponent
            :content="`Valor: R$${bill.value}`"
            class="subTitle"
          />
          <textSubTitleComponent
            :content="`N° de participantes: ${bill.shared_to}`"
            class="subTitle"
          />
          <textSubTitleComponent
            :content="`Data de Criação: ${formatData(bill.createdAt)}`"
            class="subTitle"
          />
          <textSubTitleComponent
            :content="`Data de Vencimento: ${formatData(bill.due_date)}`"
            class="subTitle"
          />
          <textSubTitleComponent
            :content="`Pix: ${bill.destination}`"
            class="subTitle"
          />
          <textSubTitleComponent
            content="Já pagaram:"
            class="subTitle payStatusTitle"
            v-if="bill.paid.length > 0"
          />
          <div class="paidList" v-if="bill.paid.length > 0">
            <div class="paid" v-for="pay in bill.paid" :key="pay.id">
              <textSubTitleComponent :content="pay.name" class="subTitle" />
            </div>
          </div>
          <textSubTitleComponent
            content="Não pagaram:"
            class="subTitle payStatusTitle"
            v-if="bill.unpaid.length > 0"
          />
          <div class="unpaidList" v-if="bill.unpaid.length > 0">
            <div class="unpaid" v-for="unpay in bill.unpaid" :key="unpay.id">
              <textSubTitleComponent :content="unpay.name" class="subTitle" />
            </div>
          </div>
          <buttonComponent
            @click="deleteBill(bill.id)"
            class="deleteButton"
            value="Apagar conta!"
            bgc="#DB2955"
            color="#FFF"
            height="10"
            v-if="atualUser.admin"
          />
        </div>
      </div>
    </boxComponent>
  </div>
</template>

<script>
import boxComponent from "@/components/boxComponent.vue";
import InputTextComponent from "@/components/InputTextComponent.vue";
import textTitleComponent from "@/components/textTitleComponent.vue";
import textSubTitleComponent from "@/components/textSubTitleComponent.vue";
import buttonComponent from "@/components/buttonComponent.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    boxComponent,
    InputTextComponent,
    textTitleComponent,
    textSubTitleComponent,
    buttonComponent,
  },

  data() {
    return {
      users: [],
      userToDivide: [],
      allBill: [],
      myBillPaid: [],
      myBillUnpaid: [],
    };
  },

  methods: {
    deleteBill(id) {
      const API = require("../../config");

      const axios = require("axios");
      let data = JSON.stringify({
        bill_id: id,
      });

      let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `${API.url}/bills/cancel`,
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
          window.alert("Deletado com sucesso!");
          this.bringAllBill();
          this.bringMyBill();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    payBill(id) {
      const API = require("../../config");
      const axios = require("axios");
      let data = JSON.stringify({
        debt_id: id,
      });

      let config = {
        method: "put",
        maxBodyLength: Infinity,
        url: `${API.url}/bills/pay`,
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
          this.bringAllBill();
          this.bringMyBill();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    bringMyBill() {
      const API = require("../../config");
      const axios = require("axios");
      let data = "";

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${API.url}/bills`,
        headers: {
          Authorization: this.token,
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.myBillUnpaid = response.data.unpaid;
          this.myBillPaid = response.data.paid;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    bringAllBill() {
      const API = require("../../config");
      const axios = require("axios");
      let data = "";

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${API.url}/bills/all`,
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

          this.allBill = response.data.bills;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    formatData(dataString) {
      const data = new Date(dataString);

      const dia = String(data.getDate()).padStart(2, "0");
      const mes = String(data.getMonth() + 1).padStart(2, "0");
      const ano = data.getFullYear();

      return `${dia}/${mes}/${ano}`;
    },

    registerBill() {
      var obj = {
        name: document.querySelector(".nameInput").childNodes[0].childNodes[0]
          .value,
        value:
          document.querySelector(".valueInput").childNodes[0].childNodes[0]
            .value,
        date: document.querySelector(".dateInput").childNodes[0].childNodes[0]
          .value,
        destinaition:
          document.querySelector(".destinationInput").childNodes[0]
            .childNodes[0].value,
      };

      const API = require("../../config");

      const axios = require("axios");
      let data = JSON.stringify({
        name: obj.name,
        value: obj.value,
        due_date: obj.date,
        destination: obj.destinaition,
        users_to_share: this.userToDivide,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${API.url}/bills`,
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
          window.alert("Cadastrado com sucesso!");
          this.bringAllBill();
          this.bringMyBill();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    selectAll(e) {
      var checkbox = document.querySelectorAll(".checkbox");
      var i;

      if (e.target.checked) {
        var usersId = [];

        for (i = 0; i < this.users.length; i++) {
          usersId.push(this.users[i].id);
          checkbox[i].checked = true;
        }

        this.userToDivide = usersId;
      } else {
        for (i = 0; i < this.users.length; i++) {
          checkbox[i].checked = false;
        }

        this.userToDivide = [];
      }
    },

    selectUser(id, e) {
      if (e.target.checked) {
        this.userToDivide.push(id);
      } else {
        this.userToDivide = this.userToDivide.filter(function (n) {
          return n != id;
        });
      }

      var checkbox = document.querySelectorAll(".checkbox");

      for (var i = 0; i < this.users.length; i++) {
        if (checkbox[i].checked == false) {
          document.querySelector(".allCheckbox").checked = false;
        }
      }
    },

    bringUsers() {
      const API = require("../../config");

      const axios = require("axios");
      let data = "";

      let config;

      config = {
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
  },

  beforeMount() {
    this.bringUsers();
    this.bringAllBill();
    this.bringMyBill();
  },

  computed: {
    ...mapGetters({
      token: "getToken",
      atualUser: "getUser",
    }),
  },
};
</script>

<style scoped>
.billBody {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  column-gap: 15px;
  margin-top: 70px;
}

.title {
  line-height: 30px;
}

.centerBox,
.leftBox,
.rightBox {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: fit-content;
}

.formBox,
.rightBox,
.leftBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5px;
  margin-bottom: 15px;
}

.subTitle {
  font-size: 15px;
}

.formBox > :first-child {
  display: flex;
  column-gap: 10px;
}

.valueInput {
  width: 75px;
}

.nameInput {
  width: 115px;
}

.dateInput,
.destinationInput {
  min-width: 200px !important;
}

.userBox {
  border: solid #b7b7b7 2px;
  padding: 10px;
  max-width: 180px;

  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.userHeader {
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 5px;
}

.userList,
.myBillList,
.allList,
.paidList,
.unpaidList {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  row-gap: 10px;
  max-height: 60px;
}

.allList,
.myBillList {
  max-height: 330px !important;
  padding: 5px;
}

.paidList,
.unpaidList {
  align-items: center;
  row-gap: 1px;
  border: solid 2px #b7b7b7;
  max-width: 60%;
  min-width: 60%;
  margin: auto;
  border-radius: 5px;
}

.user {
  display: flex;
  align-items: center;
}

.bill,
.myBill {
  display: flex;
  flex-direction: column;
  text-align: left;
  border: solid 2px #9e76db;
  padding: 10px;
  border-radius: 20px;
  max-width: 250px;
}

.payStatusTitle,
.billTitle {
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.payStatusTitle {
  margin-top: 8px;
}

.billTitle {
  margin-bottom: 5px;
}

.deleteButton,
.payButton {
  margin-top: 15px;
}

.userList::-webkit-scrollbar,
.myBillList::-webkit-scrollbar,
.allList::-webkit-scrollbar,
.paidList::-webkit-scrollbar,
.unpaidList::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
  flex: 0;
}

.userList::-webkit-scrollbar-track,
.myBillList::-webkit-scrollbar-track,
.allList::-webkit-scrollbar-track,
.paid::-webkit-scrollbar-track,
.unpaid::-webkit-scrollbar-track {
  background-color: transparent;
}

.userList::-webkit-scrollbar-thumb,
.myBillList::-webkit-scrollbar-thumb,
.allList::-webkit-scrollbar-thumb,
.paidList::-webkit-scrollbar-thumb,
.unpaidList::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

.userList::-webkit-scrollbar-thumb:hover,
.myBillList::-webkit-scrollbar-thumb:hover,
.allList::-webkit-scrollbar-thumb:hover,
.paidList::-webkit-scrollbar-thumb:hover,
.unpaidList::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>
