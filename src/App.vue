<template>
  <div>
    <h2>记账</h2>
    <div class="container">
      <Balance />
      <History />
      <AddTranaction />
    </div>
  </div>
</template>

<script setup lang="ts">
import AddTranaction from "./components/addTranaction.vue";
import Balance from "./components/balance.vue";
import History from "./components/history.vue";
</script>
