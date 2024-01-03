import { it, expect, describe, beforeEach } from "vitest";
import { useTranaction } from "./tranaction";
import { setActivePinia, createPinia } from "pinia";

describe("use tranaction", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  describe("add transction", () => {
    it("should add a transction", () => {
      const store = useTranaction();
      const transaction = store.addTransaction("Test", 100);

      expect(transaction).toEqual(
        expect.objectContaining({
          title: "Test",
          amount: 100,
          type: "plus",
        })
      );

      expect(store.transactions[0]).toEqual(transaction);
    });

    it("should add a transaction with a negative amount", () => {
      const store = useTranaction();
      const transaction = store.addTransaction("Test", -100);

      expect(transaction).toEqual(
        expect.objectContaining({
          title: "Test",
          amount: -100,
          type: "minus",
        })
      );

      expect(store.transactions[0]).toEqual(transaction);
    });
  });

  describe("remove transaction", () => {
    it("should delete a transaction by its id", () => {
      const store = useTranaction();
      const tranaction = store.addTransaction("Bill", -200);
      store.deleteTransaction(tranaction.id);

      expect(store.transactions.length).toBe(0);
    });

    it("should not delete a transaction if the id is not found", () => {
      const store = useTranaction();
      store.addTransaction("Bill", -200);

      store.deleteTransaction(1000);

      expect(store.transactions.length).toBe(1);
    });
  });

  describe("calculate transactions", () => {
    it("should calculate the balance", () => {
      const store = useTranaction();

      store.addTransaction("Test", 100);
      store.addTransaction("Test2", -200);
      store.addTransaction("Test3", 200);

      expect(store.calculatePlusAmount()).toBe(300);
      expect(store.calculateMinusAmount()).toBe(-200);
    });
  });
});
