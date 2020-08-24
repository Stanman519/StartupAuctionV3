<template>
  <div>
    <b-container fluid class="table-page">
        <div>
          <b-container fluid class="team-select-row">
            <p> Players on roster: {{ rosterSize }} / 25 </p>
            <span> Select another team: &nbsp; &nbsp; </span>   
            
            <b-form-select class="col-sm-4" id="ownerSelector" v-model="selectedOwnerName" @change="showARoster">
                <b-form-select-option v-for="owner in ownerList" :key="owner.ownerId" :value="owner.ownerName"> 
                    {{ owner.ownerName }} </b-form-select-option>
            </b-form-select>
          </b-container>
        </div>
            <div id="table"> 
            <b-table striped hover :items="playerList" :fields="rows">
            </b-table>
        </div>
        <div>
            Total Salary: {{ salaryTotal }}
        </div>
    </b-container>
  </div>
</template>

<script>



export default {
    name: 'Rosters',
    data() {
        return {
            ownerList: [],
            playerList: [],
            selectedOwnerName: '',
            url: '/',
            rows: [
                {
                    key: 'firstName',
                    label: 'First Name',
                    sortable: true
                },
                {
                    key: 'lastName',
                    label: 'Last Name',
                    sortable: true
                },
                {
                    key: 'position',
                    label: 'Position',
                    sortable: true
                },
                {
                    key: 'salary',
                    label: 'Annual Salary',
                    sortable: true
                },
                {
                    key: 'length',
                    label: 'Contract Length (Years)',
                    sortable: true
                },
                {
                    key: 'contractValue',
                    label: 'Contract Value',
                    sortable: true
                }
            ]
        }
    },
    components:{

    },
    methods: {
        showMyRoster(){
            fetch(this.url + 'api/team/' + this.currentUser.ownerName, {
                method: 'GET'
            })
            .then(response => response.json())
            .then(data => (this.playerList = data));
        },
        showARoster(){
            fetch(this.url + 'api/team/' + this.selectedOwnerName, {
                method: 'GET'
            })
            .then(response => response.json())
            .then(data => (this.playerList = data));
        },
        getOwnerList: function() {
           fetch(this.url + 'api/owner/scoreboard/', {
               method: 'GET'
           })
            .then(response => response.json())
            .then(data => (this.ownerList = data));
        },
        currentUser: function() {
            if (this.$store.state.auth.user){
                return this.$store.state.auth.user;
            }
            if (this.$store.state.jwtUser.user){
                return this.$store.state.jwtUser.user;
            }
             else {
                return null;
            }
        }
    },
    mounted: function() {
        this.showMyRoster();
        this.getOwnerList();
    },
    computed: {
        rosterSize: function(){
            return this.playerList.length;
        },
        salaryTotal: function(){
            let x = 0;
            this.playerList.forEach((player) => {
                x += player.salary
            })
            return x;
        }
    }
}


</script>

<style>

.team-select-row{
    width: 100%;
    margin: 25px;
}

.table-page{
    width: 85%;
}



</style>
