<template>
  <h2>test</h2>
</template>

<script>
export default {
    name: 'Inventory',
    mounted: function() {
        fetch("/api/inventory", {
            method: "GET"
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
    }

}
</script>

<style>

</style>