<template>
    <main>
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h1><i class="fa-solid fa-chevron-down me-2"/>Liste des clients</h1>
            <BButton :to="{ name: 'customer', params: { id: -1 } }" variant="outline-info" iconLeft="circle-plus">
                Créer un client
            </BButton>
        </div>
        <p v-if="!customers || !customers.length" class="text-primary my-5">Aucun client pour l'instant.</p>
        <CustomerList v-else>
            <CustomerListItem
                    v-for="customer in customers"
                    :key="customer._id"
                    :customer="customer"
                    @onDeleteCustomer="deleteCustomer($event)"
                    @onEditCustomer="editCustomer($event)"
            />
        </CustomerList>

        <p class="text-center text-muted">
            {{ totalCustomers }} client<span v-if="totalCustomers > 1">s</span>
        </p>
    </main>
</template>

<script>
import CustomerList from '@/components/Customer/CustomerList.vue';
import CustomerListItem from '@/components/Customer/CustomerListItem.vue';
import BButton from "../components/BButton.vue";
import {mapState, mapActions} from "pinia";
import {useCustomerStore} from '@/stores/customer';

export default {
    components: {
        BButton,
        CustomerList,
        CustomerListItem
    },
    computed: {
        ...mapState(useCustomerStore, ['customers', 'totalCustomers'])
    },
    methods: {
        ...mapActions(useCustomerStore, ['getAllCustomers', 'deleteCustomer']),

        editCustomer(id) {
            this.$router.push({
                name: 'customer',
                params: {id}
            });
            console.log('edit customer with id : ', id);
        }
    },
    mounted() {
        this.getAllCustomers();
    }
}
</script>
