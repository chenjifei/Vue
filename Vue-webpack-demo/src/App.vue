<style lang="css" scoped>
#app {
    color: #0087D1;
}
#app h1{
  text-align: center;
  margin-top: 50px;
}
</style>

<template>
<div id="app">
    <h1>{{msg}}</h1>
</div>
</template>

<script>
export default {
    name: "app",
    data: function () {
        return {
            msg: "App"
        };
    }
};
</script>
