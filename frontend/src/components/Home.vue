<template>
  <div id="home">
    <div id="auction">
      <div id="identifier">
        <p v-if="loggedIn">You are logged in as: {{ currentUser.user.ownerName }}</p>
      </div>
      <BudgetBoard @newWinner="checkScore" :showScore="wins" id="budget-board"></BudgetBoard>
      <PlayerDropdown
        nommer="A.Aron"
        lotId="1"
        class="lotStyle"
        id="lot1"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="Caleb"
        lotId="2"
        class="lotStyle"
        id="lot2"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="Cory"
        lotId="3"
        class="lotStyle"
        id="lot3"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="Jeri"
        lotId="4"
        class="lotStyle"
        id="lot4"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="Juan"
        lotId="5"
        class="lotStyle"
        id="lot5"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="Levi"
        lotId="6"
        class="lotStyle"
        id="lot6"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="Logan"
        lotId="7"
        class="lotStyle"
        id="lot7"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="Ryan"
        lotId="8"
        class="lotStyle"
        id="lot8"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="Taylor"
        lotId="9"
        class="lotStyle"
        id="lot9"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="Trent"
        lotId="10"
        class="lotStyle"
        id="lot10"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="TBux"
        lotId="11"
        class="lotStyle"
        id="lot11"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="TWelsh"
        lotId="12"
        class="lotStyle"
        id="lot12"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="A.Aron"
        lotId="13"
        class="lotStyle"
        id="lot13"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="Caleb"
        lotId="14"
        class="lotStyle"
        id="lot14"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="Cory"
        lotId="15"
        class="lotStyle"
        id="lot15"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="Jeri"
        lotId="16"
        class="lotStyle"
        id="lot16"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="Juan"
        lotId="17"
        class="lotStyle"
        id="lot17"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="Levi"
        lotId="18"
        class="lotStyle"
        id="lot18"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="Logan"
        lotId="19"
        class="lotStyle"
        id="lot19"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="Ryan"
        lotId="20"
        class="lotStyle"
        id="lot20"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="Taylor"
        lotId="21"
        class="lotStyle"
        id="lot21"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="Trent"
        lotId="22"
        class="lotStyle"
        id="lot22"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="TBux"
        lotId="23"
        class="lotStyle"
        id="lot23"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
      <PlayerDropdown
        nommer="TWelsh"
        lotId="24"
        class="lotStyle"
        id="lot24"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
            <PlayerDropdown
        nommer="admin"
        lotId="25"
        class="lotStyle"
        id="lot25"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
            <PlayerDropdown
        nommer="admin"
        lotId="26"
        class="lotStyle"
        id="lot26"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
            <PlayerDropdown
        nommer="admin"
        lotId="27"
        class="lotStyle"
        id="lot27"
        v-bind:ownerList="this.owners"
        v-bind:currentUser="this.currentUser"
      ></PlayerDropdown>
            <PlayerDropdown
        nommer="TWeladminsh"
        lotId="28"
        class="lotStyle"
        id="lot28"
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
        })
        .then(() => {
          setTimeout(() => this.$router.push("/rosters"), 360000);
        })
    }
  },
  mounted: function() {
        
  },
  methods: {
    pushToRoster: function() {
      this.$router.push("/rosters");
      //location.reload();
    },
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
}
#lot12 {
  grid-area: lot12;
}
#lot13 {
  grid-area: lot13;
}
#lot14 {
  grid-area: lot14;
}
#lot15 {
  grid-area: lot15;
}
#lot16 {
  grid-area: lot16;
}
#lot17 {
  grid-area: lot17;
}
#lot18 {
  grid-area: lot18;
}
#lot19 {
  grid-area: lot19;
}
#lot20 {
  grid-area: lot20;
}
#lot21 {
  grid-area: lot21;
}
#lot22 {
  grid-area: lot22;
}
#lot23 {
  grid-area: lot23;
}
#lot24{
  grid-area: lot24;
}
#lot25 {
  grid-area: lot25;
}
#lot26 {
  grid-area: lot26;
  margin-bottom: 35px;
}
#lot27 {
  grid-area: lot27;
  margin-bottom: 35px;
}
#lot28 {
  grid-area: lot28;
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
      " lot12 "
      " lot13 "
      " lot14 "
      " lot15 "
      " lot16 "
      " lot17 "
      " lot18 "
      " lot19 "
      " lot20 "
      " lot21 "
      " lot22 "
      " lot23 "
      " lot24 "
      " lot25 "
      " lot26 "
      " lot27 "
      " lot28 ";
    grid-gap: 35px;
  }
}
@media only screen and (min-width: 920px) {
  #auction {
    margin-right: 35px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      " bb my-id . "
      " bb lot1 lot2 "
      " bb lot3 lot4 "
      " lot5 lot6 lot7 "
      " lot8 lot9 lot10 "
      " lot11 lot12 lot13 "
      " lot14 lot15 lot16 "
      " lot17 lot18 lot19 "
      " lot20 lot21 lot22 "
      " lot23 lot24 lot25 "
      " lot26 lot27 lot28 ";
    grid-gap: 35px;
  }
}
</style>