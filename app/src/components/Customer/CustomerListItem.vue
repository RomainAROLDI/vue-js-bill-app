<template>
    <tr class="align-middle">
        <td>
            <i class="fa-solid fa-user me-2"/>
            {{ customer.firstname }} {{ customer.lastname }}
        </td>
        <td>{{ customer.company }}</td>
        <td>{{ formatDate(customer.dateAdd) }}</td>
        <td>
            <BButton class="me-2" variant="outline-danger" size="sm" icon-left="trash" @click="onDeleteCustomer()">supprimer</BButton>
            <BButton variant="outline-info" size="sm" icon-left="pen" @click="onEditCustomer()">éditer</BButton>
        </td>
    </tr>
</template>

<script>
import BButton from '@/components/BButton.vue';

export default {
    components: {BButton},
    props: {
        customer: {
            type: Object,
            required: true
        }
    },
    methods: {
        onDeleteCustomer() {
            // on crée un événement qui est écouté dans le composant parent
            this.$emit('onDeleteCustomer', this.customer._id)
        },
        onEditCustomer() {
            // on crée un événement qui est écouté dans le composant parent
            this.$emit('onEditCustomer', this.customer._id)
        },
        formatDate(date) {
            return new Date(date).toLocaleDateString();
        }
    }
}
</script>
