let a = ['bn', 'la', 'id'];
let b = [
    { text: "China", mobilecode: 86, country: "cn" },
    { text: "Brunei", mobilecode: 673, country: "bn" },
    { text: "Cambodia", mobilecode: 855, country: "kh" },
    { text: "Indonesia", mobilecode: 62, country: "id" },
    { text: "Laos", mobilecode: 856, country: "la" },
    { text: "Thailand", mobilecode: 66, country: "th" },
];

let c = b.filter(x => a.indexOf(x.country) > -1).sort((m, n) => {
    return a.indexOf(m.country) - a.indexOf(n.country)
})
console.log(c)