'use strict';
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

const result = excelToJson({
    source: fs.readFileSync('csv.xlsx'), // fs.readFileSync return a Buffer
});

fs.writeFileSync("csv.json", JSON.stringify(result, null, 2), (err) => {
    if (err) {
      throw err;
    }
  })