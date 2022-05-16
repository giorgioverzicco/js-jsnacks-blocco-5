const zuchini = [];
for (let i = 1; i <= 10; i++) {
  zuchini.push({
    type: "tipo: " + i,
    weight: i * 2,
    length: i * 10,
  });
}

let total = 0;
for (let i = 0; i < zuchini.length; i++) {
  total += zuchini[i].weight;
}
console.log(`La somma di tutti i pesi delle zucchine è: ${total}`);
