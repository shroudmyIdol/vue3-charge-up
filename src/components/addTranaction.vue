<template>
  <div>
    <h3>添加记录</h3>
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" placeholder="enter text..." v-model="title" />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount<br />
        (negative - expense, positive - income)</label
      >
      <input type="text" placeholder="enter amount..." v-model="amount" />
    </div>
    <button class="btn" @click="handleAdd">添加记录</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTranaction } from "../store/tranaction";

const title = ref("");
const amount = ref(0);

const store = useTranaction();

const handleAdd = () => {
  store.addTransaction(title.value, Number(amount.value));
};
</script>

<style scoped></style>
