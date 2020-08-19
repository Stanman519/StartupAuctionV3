<template>
  <div id="home">
    <div id="auction">
      <div id="identifier">
        <p v-if="loggedIn">You are logged in as: {{ currentUser.user.ownerName }}</p>
      </div>
      <BudgetBoard @newWinner="checkScore" :showScore="wins" id="budget-board"></BudgetBoard>
      <PlayerDropdown
        lotId="1"
        class="lotStyle"
        id="lot1"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        lotId="2"
        class="lotStyle"
        id="lot2"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        lotId="3"
        class="lotStyle"
        id="lot3"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        lotId="4"
        class="lotStyle"
        id="lot4"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        lotId="5"
        class="lotStyle"
        id="lot5"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        lotId="6"
        class="lotStyle"
        id="lot6"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        lotId="7"
        class="lotStyle"
        id="lot7"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        lotId="8"
        class="lotStyle"
        id="lot8"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        lotId="9"
        class="lotStyle"
        id="lot9"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        lotId="10"
        class="lotStyle"
        id="lot10"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        lotId="11"
        class="lotStyle"
        id="lot11"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        lotId="12"
        class="lotStyle"
        id="lot12"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
    </div>
  </div>
</template>

<script>
import PlayerDropdown from "./PlayerDropdown.vue";
import BudgetBoard from "./BudgetBoard.vue";
import backgroundUrl from "../assets/20950.jpg";

import "es6-promise/auto";
import User from "../models/user";

export default {
  name: "Home",
  components: {
    PlayerDropdown: PlayerDropdown,
    BudgetBoard: BudgetBoard,
  },

  data() {
    return {
      backgroundUrl,
      user: new User("", ""),
      wins: 0,
      owners: [],
      content: "",
      url: "/",
      jwtUser: {
        user: {},
      },
    };
  },
  created: function () {
    if (!this.$store.state.auth.user) {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$cookies.get("token")}`,
        },
      };
      fetch(this.url + "api/owner/persist", requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.jwtUser.user = data;
          this.$store.commit("SAVE_USER", this.jwtUser);
        })
        .then(() => {
          if (!this.currentUser.user.ownerName) {
            this.$router.push("/login");
          }
        });
    }
  },
  // mounted: {
  //   assertLogin: function() {
  //     if(localStorage.user){
  //         this.user = localStorage.user;
  //         }
  //     if (!this.currentUser){
  //     this.$router.push('/login');
  //     }
  //   }
  // },
  methods: {
    checkScore: function () {
      this.wins++;
    },
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
  },
  computed: {
    currentUser: function () {
      if (this.$store.state.auth.user) {
        return this.$store.state.auth.user;
      } else if (this.jwtUser.user) {
        return this.jwtUser;
      } else {
        return null;
      }
    },
    loggedIn: function () {
      if (this.currentUser) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
#nav {
  grid-area: nav;
}
#lot1 {
  grid-area: lot1;
}
#lot2 {
  grid-area: lot2;
}
#lot3 {
  grid-area: lot3;
}
#lot4 {
  grid-area: lot4;
}
#lot5 {
  grid-area: lot5;
}
#lot6 {
  grid-area: lot6;
}
#lot7 {
  grid-area: lot7;
}
#lot8 {
  grid-area: lot8;
}
#lot9 {
  grid-area: lot9;
}
#lot10 {
  grid-area: lot10;
}
#lot11 {
  grid-area: lot11;
  margin-bottom: 35px;
}
#lot12 {
  grid-area: lot12;
  margin-bottom: 35px;
}
#budget-board {
  grid-area: bb;
  padding: 5px;
  position: sticky;
  border-radius: 9px;
  margin-left: 20px;
  outline: 1px dashed rgb(93, 107, 93);
  outline-offset: -5px;
  background: rgba(211, 211, 211, 0.8);
  margin-top: 20px;
  box-shadow: 5px 5px 5px rgb(101, 102, 102);
}
#identifier {
  grid-area: my-id;
}
.lotStyle {
  border-radius: 9px;
  padding: 20px;
  outline: 1px dashed rgb(93, 107, 93);

  outline-offset: -5px;
  background: rgba(211, 211, 211, 0.8);
  margin-top: 20px;
  box-shadow: 5px 5px 5px rgb(101, 102, 102);
}
#home {
  background-image: url("../assets/20950.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 2200px;
}
@media only screen and (max-width: 920px) {
  #auction {
    margin-right: 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      " my-id "
      " bb "
      " lot1 "
      " lot2 "
      " lot3 "
      " lot4 "
      " lot5"
      " lot6 "
      " lot7 "
      " lot8 "
      " lot9 "
      " lot10 "
      " lot11 "
      "lot12 ";
    grid-gap: 35px;
  }
}
@media only screen and (min-width: 920px) {
  #auction {
    margin-right: 35px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
      " bb my-id . . ."
      " bb lot1 lot1 lot2 lot2"
      " bb lot3 lot3 lot4 lot4"
      " . lot5 lot5 lot6 lot6"
      " . lot7 lot7 lot8 lot8"
      " . lot9 lot9 lot10 lot10"
      " . lot11 lot11 lot12 lot12";
    grid-gap: 35px;
  }
}
</style>