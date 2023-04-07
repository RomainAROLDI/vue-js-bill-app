import prestationInterface from "./prestationInterface";

const date = new Date().toISOString().split('T')[0];

export default {
    id: -1,
    billnum: 0,
    description: '',
    date: date,
    client: {},
    prestations: [{...prestationInterface}],
    discount: 0.0,
    paid: 0.0,
    totalHT: 0,
    tva: 20,
    totalTTC: 0
}
