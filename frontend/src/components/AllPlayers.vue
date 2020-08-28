<template>
  <div>
    <b-container fluid class="table-page">
        <div id="table"> 
            <b-table striped hover :items="playerList" :fields="rows">
            </b-table>
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
            url: '/',
            rows: [
                {
                    key: 'ownerName',
                    label: 'Owner',
                    sortable: true
                },
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
                },
                {
                    key: 'salary' * 0.4,
                    label: 'Dead Cap if Cut',
                    sortable: true
                }
            ]
        }
    },
    components:{

    },
    methods: {
        getPlayerList: function() {
           fetch(this.url + 'api/players/drafted', {
               method: 'GET'
           })
            .then(response => response.json())
            .then(data => (this.playerList = data));
        },
        currentUser: function() {
            if (this.$store.state.jwtUser.user){
                return this.$store.state.jwtUser.user;
            }
            if (this.$store.state.auth.user){
                return this.$store.state.auth.user;
            }
             else {
                return null;
            }
        }
    },
    mounted: function() {
        this.getPlayerList();
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
