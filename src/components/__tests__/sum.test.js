import { sum } from "../sum";

test("sum function should calcuate the sum of two numbers", () => {
  expect(sum(2, 5)).toBe(7);
});
