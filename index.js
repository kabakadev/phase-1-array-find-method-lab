// code your solution here
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];
// function superbowlWin(record) {
//   for (let convertObj of record)
//     if (convertObj.result === "W") {
//       return convertObj.year;
//     }
// }
// superbowlWin(record);

function superbowlWin(objectRecord) {
  const isCorrect = objectRecord.find((obj) => obj.result === "W");
  return isCorrect ? isCorrect.year : undefined;
}
