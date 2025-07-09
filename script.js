const dictionary = {
  A: 0,
  B: 1,
  C: 1,
  D: 1,
  E: 2,
  F: 3,
  G: 3,
  H: 3,
  I: 4,
  J: 5,
  K: 5,
  L: 5,
  M: 5,
  N: 5,
  O: 6,
  P: 7,
  Q: 7,
  R: 7,
  S: 7,
  T: 7,
  U: 8,
  V: 9,
  W: 9,
  X: 9,
  Y: 9,
  Z: 9,
  a: 9,
  b: 8,
  c: 8,
  d: 8,
  e: 7,
  f: 6,
  g: 6,
  h: 6,
  i: 5,
  j: 4,
  k: 4,
  l: 4,
  m: 4,
  n: 4,
  o: 3,
  p: 2,
  q: 2,
  r: 2,
  s: 2,
  t: 2,
  u: 1,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0,
  " ": 0,
};

const numberToLetter = ["A", "B", "E", "F", "I", "J", "O", "P", "U", "V"];

function mapTextToNumbers(text) {
  return text.split("").map((c) => dictionary[c] ?? 0);
}

function calculateAlternatingSum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || i % 2 === 1) {
      result += arr[i];
    } else {
      result -= arr[i];
    }
  }
  return result;
}

function convertSumToLetters(value) {
  const abs = Math.abs(value);
  const resultNumbers = [];
  let total = 0;
  let i = 0;

  while (total !== abs) {
    const digit = i % 10;

    if (total + digit > abs) {
      i++;
      continue;
    }

    resultNumbers.push(digit);
    total += digit;
    i++;
  }

  return resultNumbers.map((d) => numberToLetter[d]);
}

function adjustLetterSequence(seq) {
  const reverseMap = Object.fromEntries(numberToLetter.map((v, i) => [v, i]));
  const numeric = seq.map((c) => reverseMap[c] ?? 0);

  const len = numeric.length;
  if (len >= 2) {
    numeric[len - 2] = (numeric[len - 2] + 1) % 10;
    numeric[len - 1] = (numeric[len - 1] + 1) % 10;
  }

  return numeric.map((n) => numberToLetter[n]);
}
function mapLettersToFinalValues(seq) {
  const reverseMap = Object.fromEntries(numberToLetter.map((v, i) => [v, i]));
  const numeric = seq.map((c) => reverseMap[c] ?? 0);

  return numeric.map((n) => {
    if (n <= 1) return 1;
    if (n <= 3) return 3;
    if (n <= 5) return 5;
    if (n <= 7) return 7;
    return 9;
  });
}

function process() {
  const input = document.getElementById("inputText").value;
  if (!input.trim()) {
    document.getElementById("output").innerHTML =
      "<p><em>Please enter valid text.</em></p>";
    return;
  }

  const step1 = mapTextToNumbers(input);
  const step2 = calculateAlternatingSum(step1);
  const step3 = convertSumToLetters(step2);
  const step4 = adjustLetterSequence(step3);
  const step5 = mapLettersToFinalValues(step4);

  const output = `
   <p><strong>Input:</strong> ${input}</p>
    <p><strong>Step 1 : </strong> ${step1.join(" ")}</p>
    <p><strong>Step 2 : </strong> ${step2}</p>
    <p><strong>Step 3 : </strong> ${step3.join(" ")}</p>
    <p><strong>Step 4 : </strong> ${step4.join(" ")}</p>
    <p><strong>Step 5 : </strong> ${step5.join(" ")}</p>

`;
  document.getElementById("output").innerHTML = output;
}
