<template>
    <tr class="align-middle">
        <td>{{ bill.date }}</td>
        <td>{{ bill.description }}</td>
        <td>{{ bill.billnum }}</td>
        <td>{{ bill.client.firstName }} {{ bill.client.lastName }} ({{ bill.client.companyName }})</td>
        <td>{{ bill.totalHT.toFixed(2).replace('.', ',') }} € HT</td>
        <td class="fw-bold">{{ bill.totalTTC.toFixed(2).replace('.', ',') }} € TTC</td>
        <td>
            <BButton class="me-2" variant="outline-danger" size="sm" icon-left="trash" @click="onDeleteBill()">supprimer</BButton>
            <BButton variant="outline-info" size="sm" icon-left="pen" @click="onEditBill()">éditer</BButton>
        </td>
    </tr>
</template>

<script>
import BButton from "../BButton.vue";

export default {
    components: {BButton},
    props: {
        bill: {
            type: Object,
            required: true
        }
    },
    methods: {
        onDeleteBill() {
            // on crée un événement qui est écouté dans le composant parent
            this.$emit('onDeleteBill', this.bill._id)
        },
        onEditBill() {
            // on crée un événement qui est écouté dans le composant parent
            this.$emit('onEditBill', this.bill._id)
        }
    }
}
</script>
