<template>
    <main>
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h1><i class="fa-solid fa-chevron-down me-2"/>Liste des factures</h1>
            <BButton variant="outline-info" iconLeft="circle-plus">Créer une facture</BButton>
        </div>
        <p v-if="!bills || !bills.length" class="text-primary my-5">Aucune facture pour l'instant.</p>
        <BillList v-else>
            <BillListItem
                    v-for="bill in bills"
                    :key="bill.id"
                    :bill="bill"
                    @onDeleteBill="deleteBill($event)"
                    @onEditBill="editBill($event)"
            />
        </BillList>
    </main>
</template>

<script>
import BillList from '@/components/BillList.vue'
import BillListItem from '@/components/BillListItem.vue'
import BButton from "@/components/BButton.vue";

export default {
    components: {
        BButton,
        BillList,
        BillListItem
    },
    data() {
        return {
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
    methods: {
        // méthode appelée lorsque le composant enfant envoie
        // l'évémenent onDeleteBill
        deleteBill(id) {
            console.log('delete bill with id : ', id)
        },
        // méthode appelée lorsque le composant enfant envoie
        // l'évémenent onEditBill
        editBill(id) {
            console.log('edit bill with id : ', id)
        }
    }
}
</script>
