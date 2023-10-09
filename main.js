import './style.css'
import lista from './dolgozok.json'

console.log(lista);

const ferikSzama = lista.filter(szemely => szemely.nem == "férfi");
console.log(ferikSzama.length);
const noiSzama = lista.filter(szemely => szemely.nem == "nő");
console.log(noiSzama.length);
const fizetes150000 = lista.filter(szemely => szemely.fizetes > 150000);
console.log(fizetes150000);
const vezetekNevNagy = lista.filter(szemely => szemely.nev.split(" ")[0] == "Nagy");
console.log(vezetekNevNagy);
const kiskoruDolgozok = lista.filter(szemely => szemely.kor < 18).map(szemely => ({nev:szemely.nev,fizetes:szemely.fizetes}));
console.log(kiskoruDolgozok);