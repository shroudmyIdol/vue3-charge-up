import { defineStore } from "pinia";
import { computed, reactive } from "vue";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: "plus" | "minus";
}

let ID = 0;

export const useTranaction = defineStore("transaction", () => {
  const transactions = reactive<Transaction[]>([]);

  const addTransaction = (title: string, amount: number) => {
    const id = ID++;
    const transaction: Transaction = {
      id,
      title,
      amount,
      type: amount > 0 ? "plus" : "minus",
    };
    transactions.push(transaction);

    return transaction;
  };

  // 实现删除 transaction 函数
  const deleteTransaction = (id: number) => {
    const index = transactions.findIndex((t) => t.id === id);
    if (index !== -1) {
      transactions.splice(index, 1);
    }
  };

  // 实现计算总余额
  const calculateTotalAmount = computed(() => {
    return transactions.reduce((res, item) => {
      res += item.amount;
      return res;
    }, 0);
  });

  // 实现计算总收入
  const calculatePlusAmount = () => {
    let balance = 0;
    for (const transaction of transactions) {
      if (transaction.type === "plus") {
        balance += transaction.amount;
      }
    }
    return balance;
  };

  // 实现计算总支出
  const calculateMinusAmount = () => {
    let balance = 0;
    for (const transaction of transactions) {
      if (transaction.type === "minus") {
        balance += transaction.amount;
      }
    }
    return balance;
  };

  return {
    transactions,
    addTransaction,
    deleteTransaction,
    calculateTotalAmount,
    calculatePlusAmount,
    calculateMinusAmount,
  };
});
