const Papa = require('papaparse');
const fs = require('fs');

async function test() {
  const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSCRSNikIu7I5siUPfUBq0hqUOXj2TrA-Vjvh3gadJCE3tqyB8P7KejE9NILzUKw6MbTNuS_sWvONql/pub?output=csv';
  const res = await fetch(url);
  const text = await res.text();
  Papa.parse(text, {
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      const valid = results.data.filter(item => item.name && item.category);
      valid.slice(0, 10).forEach(i => console.log(i.name, '->', i.category));
    }
  });
}
test();
