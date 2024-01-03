<template>
  <div>
    <h3>History</h3>
    <ul class="list">
      <template v-for="transaction in store.transactions" :key="transaction.id">
        <li :class="transaction.type">
          {{ transaction.title }}
          <span>${{ transaction.amount }}</span>
          <button class="delete-btn" @click="handleDelete(transaction.id)">
            x
          </button>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useTranaction } from "../store/tranaction";

const store = useTranaction();

const handleDelete = (id: number) => {
  store.deleteTransaction(id);
};
</script>

<style scoped></style>
