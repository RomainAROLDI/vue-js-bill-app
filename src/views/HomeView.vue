<template>
    <main>
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h1><i class="fa-solid fa-chevron-down me-2"/>Liste des factures</h1>
            <button class="btn btn-outline-info"><i class="fa-solid fa-circle-plus me-2"/>Créer une facture</button>
        </div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Description</th>
                    <th scope="col">Numéro</th>
                    <th scope="col">Client</th>
                    <th scope="col">Total HT</th>
                    <th scope="col">Total TTC</th>
                    <th scope="col" colspan="2"><i class="fa-solid fa-gear"/></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="bill in bills" :key="bill.id" class="align-middle">
                    <th scope="row">{{ bill.date }}</th>
                    <td>{{ bill.description }}</td>
                    <td>{{ bill.billnum }}</td>
                    <td>{{ bill.client.firstName }} {{ bill.client.lastName }}</td>
                    <td>{{ bill.totalHT }} € HT</td>
                    <td><strong>{{ bill.totalTTC }} € TTC</strong></td>
                    <td>
                        <button class="btn btn-sm btn-outline-danger me-2"><i class="fa-solid fa-trash me-2"/>supprimer</button>
                        <button class="btn btn-sm btn-outline-info"><i class="fa-solid fa-pen me-2"/>éditer</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<script>
export default {
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
                            price: 450.00
                        },
                        {
                            description: 'Création d’un site Wordpress',
                            qty: 5,
                            price: 450.00
                        },
                        {
                            description: 'Hébergement annuel',
                            qty: 1,
                            price: 250.00
                        },
                    ],
                    discount: 0.00,
                    paid: 0.00,
                    totalHT: 3400,
                    tva: 20,
                    totalTTC: 4080
                },
                {
                    id: 2,
                    billnum: 209345500,
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
                            price: 450.00
                        },
                        {
                            description: 'Création d’un site Wordpress',
                            qty: 5,
                            price: 450.00
                        },
                        {
                            description: 'Hébergement annuel',
                            qty: 1,
                            price: 250.00
                        },
                    ],
                    discount: 0.00,
                    paid: 0.00,
                    totalHT: 3400,
                    tva: 20,
                    totalTTC: 4080
                },
                {
                    id: 3,
                    billnum: 209345300,
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
                            price: 450.00
                        },
                        {
                            description: 'Création d’un site Wordpress',
                            qty: 5,
                            price: 450.00
                        },
                        {
                            description: 'Hébergement annuel',
                            qty: 1,
                            price: 250.00
                        },
                    ],
                    discount: 0.00,
                    paid: 0.00,
                    totalHT: 3400,
                    tva: 20,
                    totalTTC: 4080
                },
                {
                    id: 4,
                    billnum: 209345200,
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
                            price: 450.00
                        },
                        {
                            description: 'Création d’un site Wordpress',
                            qty: 5,
                            price: 450.00
                        },
                        {
                            description: 'Hébergement annuel',
                            qty: 1,
                            price: 250.00
                        },
                    ],
                    discount: 0.00,
                    paid: 0.00,
                    totalHT: 3400,
                    tva: 20,
                    totalTTC: 4080
                }
            ]
        }

    }
}
</script>
