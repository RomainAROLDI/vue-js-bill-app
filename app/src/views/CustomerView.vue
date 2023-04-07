<template>
    <div class="customer">
        <div class="d-flex align-items-center justify-content-between border-bottom my-5">
            <h1>
                {{ isNewCustomer ? 'Créer un nouveau ' : 'Modifier le' }} client
                <span v-if="!isNewCustomer" class="text-primary">#{{ id }}</span>
            </h1>
            <div class="d-flex gap-2">
                <BButton
                        v-if="!isNewCustomer"
                        size="sm"
                        variant="outline-danger"
                        icon-left="trash"
                        @click="onDeleteCustomer()"
                >
                    Supprimer
                </BButton>
                <BButton to="/customers" size="sm" variant="outline-secondary" icon-left="angle-left">
                    Annuler
                </BButton>
            </div>
        </div>

        <section v-if="customer">
            <div class="row mb-2 align-items-end">
                <div class="col-10">
                    <h3>Contact :</h3>
                </div>
                <div class="col-2">
                    <label for="date-add">Date d'ajout :</label>
                </div>
            </div>
            <div class="row">
                <div class="col-5">
                    <div class="mb-3 row">
                        <label for="firstname" class="col-sm-4 col-form-label">Prénom :</label>
                        <div class="col-sm-8">
                            <input type="text" v-model="customer.firstname" class="form-control" id="firstname"/>
                        </div>
                    </div>
                </div>
                <div class="col-5 ps-5">
                    <div class="mb-3 row">
                        <label for="lastname" class="col-sm-4 col-form-label">Nom :</label>
                        <div class="col-sm-8">
                            <input type="text" v-model="customer.lastname" class="form-control" id="lastname"/>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <input
                            type="date"
                            :value="formatDate(customer.dateAdd)"
                            @input="customer.dateAdd = $event.target.value"
                            class="form-control" id="date-add"/>
                </div>
            </div>
            <div class="row">
                <div class="col-5">
                    <div class="mb-3 row">
                        <label for="job" class="col-sm-4 col-form-label">Fonction :</label>
                        <div class="col-sm-8">
                            <input type="text" v-model="customer.job" class="form-control" id="job"/>
                        </div>
                    </div>
                </div>
                <div class="col-5 ps-5">
                    <div class="mb-3 row">
                        <label for="phone" class="col-sm-4 col-form-label">Téléphone :</label>
                        <div class="col-sm-8">
                            <input type="tel" v-model="customer.phone" class="form-control" id="phone"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-10">
                    <div class="mb-3 row">
                        <label for="email" class="col-sm-2 col-form-label">Email :</label>
                        <div class="col-sm-10">
                            <input type="email" v-model="customer.email" class="form-control" id="email"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-10">
                    <div class="mb-3 row">
                        <label for="company" class="col-sm-2 col-form-label">Entreprise :</label>
                        <div class="col-sm-10">
                            <input type="text" v-model="customer.company" class="form-control" id="company"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-4 mb-3">
                <h3>Coordonnées :</h3>
            </div>
            <div class="row">
                <div class="col-10">
                    <div class="mb-3 row">
                        <label for="address1" class="col-sm-2 col-form-label">Adresse 1 :</label>
                        <div class="col-sm-10">
                            <input type="text" v-model="customer.address.address1" class="form-control" id="address1"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-10">
                    <div class="mb-3 row">
                        <label for="address2" class="col-sm-2 col-form-label">Adresse 2 :</label>
                        <div class="col-sm-10">
                            <input type="text" v-model="customer.address.address2" class="form-control" id="address2"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-5">
                    <div class="mb-3 row">
                        <label for="zip-code" class="col-sm-4 col-form-label">Code Postal :</label>
                        <div class="col-sm-8">
                            <input type="text" v-model="customer.address.zipCode" class="form-control" id="zip-code"/>
                        </div>
                    </div>
                </div>
                <div class="col-5 ps-5">
                    <div class="mb-3 row">
                        <label for="city" class="col-sm-4 col-form-label">Ville :</label>
                        <div class="col-sm-8">
                            <input type="text" v-model="customer.address.city" class="form-control" id="city"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-5">
                    <div class="mb-3 row">
                        <label for="country" class="col-sm-4 col-form-label">Pays :</label>
                        <div class="col-sm-8">
                            <select
                                    class="form-select"
                                    :aria-label="customer.address.country"
                                    v-model="customer.address.country"
                                    id="country"
                            >
                                <option>France</option>
                                <option>Belgique</option>
                                <option>Luxembourg</option>
                                <option>Espagne</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col text-end">
                    <b-button @click="onSaveCustomer()" icon-right="fas fa-floppy-disk" class="text-white">
                        {{ isNewCustomer ? 'Enregistrer' : 'Modifier' }}
                    </b-button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import BButton from "../components/BButton.vue";
import {mapState, mapActions} from "pinia";
import {useCustomerStore} from "@/stores/customer";

export default {
    components: {BButton},
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {}
    },
    computed: {
        ...mapState(useCustomerStore, ['customer']),
        isNewCustomer() {
            return !this.id || this.id < 0;
        }
    },
    async mounted() {
        if (this.isNewCustomer) {
            await this.createCustomer();
        } else {
            await this.getCustomer(this.id);
        }
    },
    methods: {
        ...mapActions(useCustomerStore, ['createCustomer', 'getCustomer', 'saveCustomer', 'deleteCustomer']),
        onDeleteCustomer() {
            this.deleteCustomer(this.id);
            this.$router.push('/customers');
        },
        async onSaveCustomer() {
            await this.saveCustomer({
                ...this.customer
            });
            this.$router.push('/customers');
        },
        formatDate(date) {
            return new Date(date).toISOString().split('T')[0];
        }
    }
}
</script>