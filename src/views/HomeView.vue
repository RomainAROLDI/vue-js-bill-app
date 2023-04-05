<template>
    <main>
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h1><i class="fa-solid fa-chevron-down me-2"/>Liste des factures</h1>
            <BButton :to="{ name: 'bill', params: { id: -1 } }" variant="outline-info" iconLeft="circle-plus">Créer une
                facture
            </BButton>
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

        <p class="text-center text-muted">
            {{ totalBills }} facture<span v-if="totalBills > 1">s</span>
        </p>
    </main>
</template>

<script>
import BillList from '@/components/BillList.vue'
import BillListItem from '@/components/BillListItem.vue'
import BButton from "@/components/BButton.vue";
import {mapState, mapActions} from "pinia";
import {useBillStore} from "@/stores/bill";

export default {
    components: {
        BButton,
        BillList,
        BillListItem
    },
    computed: {
        ...mapState(useBillStore, ['bills', 'totalBills'])
    },
    methods: {
        ...mapActions(useBillStore, ['deleteBill']),

        // méthode appelée lorsque le composant enfant envoie
        // l'évémenent onEditBill
        editBill(id) {
            this.$router.push({
                name: 'bill',
                params: {id}
            });
            console.log('edit bill with id : ', id);
        }
    }
}
</script>
