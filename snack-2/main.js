const zuchini = [];
for (let i = 1; i <= 10; i++) {
  zuchini.push({
    type: "tipo: " + i,
    weight: i * 2,
    length: Math.floor(Math.random() * 30) + 1,
  });
}

const shortZuchini = [];
const longZuchini = [];

for (let i = 0; i < zuchini.length; i++) {
  if (zuchini[i].length >= 15) {
    longZuchini.push(zuchini[i].length);
  } else {
    shortZuchini.push(zuchini[i].length);
  }
}
