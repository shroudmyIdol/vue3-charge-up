<template>
  <div>
    <h4>余额</h4>
    <h1>${{ store.calculateTotalAmount }}</h1>
  </div>
  <div class="inc-exp-container">
    <div>
      <h4>收入</h4>
      <p class="money plus">+${{ store.calculatePlusAmount() }}</p>
    </div>
    <div>
      <h4>支出</h4>
      <p class="money minus">+${{ store.calculateMinusAmount() }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTranaction } from "../store/tranaction";

const store = useTranaction();
</script>
