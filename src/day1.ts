import * as fs from "fs";
import { sum } from "./util.js";

export default function day1(): number
{
  console.log("day1");
  const fileContent: string = fs.readFileSync("input/day1.txt", "utf-8");

  const elvesByGroup: Array<string> = fileContent.split("\n\n");

  const elvesList: Array<number> = elvesByGroup
    .map(line => line.split("\n"))
    .map(stringList =>
    {
      const numberList: Array<number> = stringList.map(stringNumber => parseInt(stringNumber));
      return numberList.reduce((acc, number) => acc + number);
    });

  elvesList.sort((a, b) => b - a);

  return sum(elvesList.slice(0, 3));
}
