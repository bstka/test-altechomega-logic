import { test, expect  } from "bun:test";

const { arrayUrutKeBesar, arrayUrutKeKecil, fishBash, kalimatSamaJikaDibalik } = require('./index');

test('FishBash Test jumlah = 40', function () {
  const tested = fishBash(40);

  console.log("RESULT: ", tested);
  expect(tested.filter(output => typeof output !== 'number').length).toEqual(19);
})

test('Mengurutkan array bilangan dari kecil ke besar', function () {
  const example = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const correctReturnValue = example.toSorted((a, b) => a - b);
  const tested = arrayUrutKeBesar(example);

  console.log("RESULT: ", tested);
  expect(tested).toBeArray();
  expect(tested).toEqual(correctReturnValue);
})

test('Mengurutkan array bilangan dari besar ke kecil', function () {
  const example = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const correctReturnValue = example.toSorted((a, b) => b - a);
  const tested = arrayUrutKeKecil(example);

  console.log("RESULT: ", tested);
  expect(tested).toBeArray();
  expect(tested).toEqual(correctReturnValue);
})

test('Apakah kalimat sama jika dibalik', function () {
  const example1 = "Kasur ini rusak";
  const example2 = "Uji Coba";
  const tested1 = kalimatSamaJikaDibalik(example1);
  const tested2 = kalimatSamaJikaDibalik(example2);

  expect(tested1).toEqual(true);
  expect(tested2).toEqual(false)
})