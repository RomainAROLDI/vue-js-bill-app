import {defineStore} from "pinia";
import billInterface from "../interfaces/billInterface";
import cloneDeep from "lodash.clonedeep";

const useBillStore = defineStore('bill', {
    state() {
        return {
            bill: {},
            bills: [
                {
                    id: 1,
                    billnum: 209345600,
                    description: 'Création de site internet et hébergement',
                    date: '08/03/2023',
                    client: {
                        idclient: 1,
                        firstName: 'Marc',
                        lastName: 'Scout',
                        companyName: 'Lumon Industries'
                    },
                    prestations: [
                        {
                            description: 'Etude graphique UX',
                            qty: 2,
                            price: 450.0
                        },
                        {
                            description: 'Création d’un site Wordpress',
                            qty: 5,
                            price: 450.0
                        },
                        {
                            description: 'Hébergement annuel',
                            qty: 1,
                            price: 250.0
                        }
                    ],
                    discount: 0.0,
                    paid: 0.0,
                    totalHT: 3400,
                    tva: 20,
                    totalTTC: 4080
                },
                {
                    id: 2,
                    billnum: 209345601,
                    description: 'Prestation de formation',
                    date: '15/03/2023',
                    client: {
                        idclient: 2,
                        firstName: 'Harry',
                        lastName: 'Potter',
                        companyName: 'Poudlard & Co.'
                    },
                    prestations: [
                        {
                            description: 'Apprentissage du maniement de la bagette',
                            qty: 1,
                            price: 450.0
                        },
                        {
                            description: 'Permis de balais',
                            qty: 2,
                            price: 450.0
                        },
                        {
                            description: 'Leçon de sort d’abondance',
                            qty: 2,
                            price: 450.0
                        }
                    ],
                    discount: 0.0,
                    paid: 0.0,
                    totalHT: 2250,
                    tva: 20,
                    totalTTC: 2700
                },
                {
                    id: 3,
                    billnum: 20945321,
                    description: 'Création de site internet et hébergement',
                    date: '31/03/2023',
                    client: {
                        idclient: 1,
                        firstName: 'Luc',
                        lastName: 'Skywalker',
                        companyName: 'Ordre des Jedi'
                    },
                    prestations: [
                        {
                            description: 'Etude graphique UX',
                            qty: 2,
                            price: 450.0
                        },
                        {
                            description: 'Création d’un site Wordpress',
                            qty: 5,
                            price: 450.0
                        },
                        {
                            description: 'Hébergement annuel',
                            qty: 1,
                            price: 250.0
                        }
                    ],
                    discount: 0.0,
                    paid: 0.0,
                    totalHT: 3400,
                    tva: 20,
                    totalTTC: 4080
                }
            ]
        }
    },
    getters: {
        totalBills: (state) => state.bills.length
    },
    actions: {
        createBill() {
            this.$patch({bill: cloneDeep(billInterface)});
        },
        updateBill(id) {
            const billToEdit = this.bills.find((bill) => bill.id == id);
            this.$patch({bill: cloneDeep(billToEdit)});
        },
        saveBill(bill) {
            if (bill.id && bill.id > 0) {
                const billIndexToSave = this.bills.findIndex((b) => b.id == bill.id);
                this.bills[billIndexToSave] = cloneDeep(bill);
            } else {
                this.bills.push(cloneDeep({...bill, id: this.bills.length + 1}));
            }
        },
        deleteBill(id) {
            const billIndexToDelete = this.bills.findIndex((bill) => bill.id == id);
            this.bills.splice(billIndexToDelete, 1);
        }
    }
});

export {useBillStore};