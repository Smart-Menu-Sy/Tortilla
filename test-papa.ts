import Papa from 'papaparse';
import fs from 'fs';

async function test() {
  const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSCRSNikIu7I5siUPfUBq0hqUOXj2TrA-Vjvh3gadJCE3tqyB8P7KejE9NILzUKw6MbTNuS_sWvONql/pub?output=csv';
  const res = await fetch(url);
  const text = await res.text();
  Papa.parse(text, {
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      console.log(results.meta.fields);
      console.log(results.data.slice(0, 3));
      console.log("Total valid:", results.data.filter(item => item.name && item.category).length);
    }
  });
}
test();
