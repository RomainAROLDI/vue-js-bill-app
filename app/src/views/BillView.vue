<template>
    <div class="bill">
        <div class="d-flex align-items-center justify-content-between border-bottom my-5">
            <h1>
                {{ isNewBill ? 'Créer une nouvelle ' : 'Modifier la' }} facture
                <span v-if="!isNewBill" class="text-primary">#{{ id }}</span>
            </h1>
            <div class="d-flex gap-2">
                <BButton
                        v-if="!isNewBill"
                        size="sm"
                        variant="outline-danger"
                        icon-left="trash"
                        @click="onDeleteBill()"
                >
                    Supprimer
                </BButton>
                <BButton to="/" size="sm" variant="outline-secondary" icon-left="angle-left">
                    Annuler
                </BButton>
            </div>
        </div>

        <section v-if="bill && bill.id">
            <div class="row justify-content-between">
                <div class="col-md-6 col-lg-5">
                    <div class="mb-3 row">
                        <label for="billnum" class="col-sm-4 col-form-label">Facture N°</label>
                        <div class="col-sm-8">
                            <input v-model="bill.billnum" class="form-control" id="billnum"/>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-6">
                    <div class="mb-3 row">
                        <label for="description" class="col-sm-4 col-form-label">Description</label>
                        <div class="col-sm-8">
                            <input v-model="bill.description" class="form-control" id="description"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-5">
                    <div class="mb-3 row">
                        <label for="date" class="col-sm-4 col-form-label">Émise le:</label>
                        <div class="col-sm-8">
                            <input v-model="bill.date" class="form-control" id="date"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-5">
                    <div class="mb-3 row">
                        <label for="client" class="col-sm-4 col-form-label">Client :</label>
                        <div class="col-sm-8">
                            <select
                                    class="form-select"
                                    :aria-label="bill.client.firstName + ' ' + bill.client.lastName"
                                    v-model="bill.client"
                                    id="client"
                            >
                                <option>Choisir</option>
                                <option
                                        v-for="option in clientOptions"
                                        :key="option.value.idclient"
                                        :value="option.value"
                                >
                                    {{ option.label }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <table class="table mt-4">
                <thead>
                <tr>
                    <th scope="col" class="text-muted">Actions</th>
                    <th scope="col" class="text-muted">Prestation</th>
                    <th scope="col" class="text-muted">Quantité</th>
                    <th scope="col" class="text-end text-muted">Montant Unitaire</th>
                    <th scope="col" class="text-end text-muted">Montant Total</th>
                </tr>
                </thead>
                <tbody>
                <!-- prestations -->
                <tr v-for="(prestation, index) in bill.prestations" :key="'prestation-' + index">
                    <td class="col-1">
                        <BButton
                                class="pe-0"
                                icon-left="circle-plus"
                                variant="white text-success border-0"
                                v-if="index === bill.prestations.length - 1"
                                @click="onAddPrestation(index)"
                        >
                            <span class="sr-only">Ajouter</span>
                        </BButton>
                        <BButton
                                :disabled="bill.prestations.length === 1"
                                class="pe-0"
                                icon-left="trash"
                                variant="white text-danger border-0"
                                @click="onDeletePrestation(index)"
                        >
                            <span class="sr-only">Supprimer</span>
                        </BButton>
                    </td>
                    <td class="col-6">
                        <input v-model="prestation.description" class="form-control"/>
                    </td>
                    <td class="col-1">
                        <input min="1" type="number" v-model="prestation.qty" class="form-control text-center"/>
                    </td>
                    <td class="col-2"><input v-model="prestation.price" class="form-control text-end"/></td>
                    <td class="col-2">
                        <input
                                :value="prestation.qty * prestation.price"
                                disabled
                                class="form-control text-end"
                        />
                    </td>
                </tr>
                <!-- ./prestations -->
                <!-- totaux -->
                <tr>
                    <td colspan="4" class="text-end border-0 pt-3 pb-1">
                        <label for="discount" class="form-label pt-1">Remises</label>
                    </td>
                    <td class="text-end border-0 pt-3 pb-1">
                        <input
                                class="form-control text-end"
                                type="number"
                                v-model.number="bill.discount"
                                id="discount"
                        />
                    </td>
                </tr>
                <tr>
                    <td colspan="4" class="text-end border-0 pt-3 pb-1">
                        <label for="paid" class="form-label pt-1">Acompte déjà payé</label>
                    </td>
                    <td class="text-end border-0 pt-3 pb-1">
                        <input
                                class="form-control text-end"
                                type="number"
                                v-model.number="bill.paid"
                                id="paid"
                        />
                    </td>
                </tr>
                <tr>
                    <td colspan="4" class="text-end border-0 pt-3 pb-1">
                        <label for="totalHT" class="form-label pt-1">Total HT</label>
                    </td>
                    <td class="text-end border-0 pt-3 pb-1">
                        <input class="form-control text-end" type="number" id="totalHT" :value="totalHT"/>
                    </td>
                </tr>
                <tr>
                    <td colspan="4" class="text-end border-0 pt-3 pb-1">
                        <label for="totalTVA" class="form-label pt-1">TVA ({{ bill.tva }}%)</label>
                    </td>
                    <td class="text-end border-0 pt-3 pb-1">
                        <input class="form-control text-end" type="number" id="totalTVA" :value="totalTVA"/>
                    </td>
                </tr>
                <tr>
                    <td colspan="4" class="text-end border-0 pt-3 pb-1">
                        <label for="totalTTC" class="form-label pt-1">Montant total TTC</label>
                    </td>
                    <td class="text-end border-0 pt-3 pb-1">
                        <input class="form-control text-end" type="number" id="totalTTC" :value="totalTTC"/>
                    </td>
                </tr>
                <tr>
                    <td colspan="4" class="text-end border-0 py-1">
                        <label for="totalRestDue" class="form-label pt-1">Reste Dû TTC</label>
                    </td>
                    <td class="text-end border-0 py-1">
                        <input
                                class="form-control text-end bg-secondary-subtle fw-bold"
                                readonly
                                type="number"
                                id="totalRestDue"
                                :value="totalRest"
                        />
                    </td>
                </tr>
                </tbody>
            </table>

            <div class="row">
                <div class="col text-end">
                    <b-button @click="onSaveBill()" icon-right="fas fa-floppy-disk" class="text-white">
                        {{ isNewBill ? 'Enregistrer' : 'Modifier' }}
                    </b-button>
                </div>
            </div>
        </section>

        <pre class="card p-2" v-if="debug">
      {{ bill }}
    </pre>
    </div>
</template>

<script>
import {clientOptions} from '../libs/clientOptions'
import BButton from "../components/BButton.vue";
import prestationInterface from "../interfaces/prestationInterface.js";
import {mapWritableState, mapActions} from "pinia";
import {useBillStore} from "../stores/bill";

export default {
    components: {BButton},
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            debug: false,
            clientOptions
        }
    },
    computed: {
        ...mapWritableState(useBillStore, ['bill']),
        // est-ce une nouvelle facture ? ou est-on en train de modifier une facture enregistrée ?
        isNewBill() {
            return !this.id || this.id < 0
        },
        totalHT() {
            let total = 0;
            if (this.bill.prestations.length) {
                for (const prestation of this.bill.prestations) {
                    total += prestation.qty * prestation.price;
                }
            }
            total -= this.bill.discount;
            return total;
        },
        totalTVA() {
            return this.totalHT * (this.bill.tva / 100);
        },
        totalTTC() {
            return this.totalHT + this.totalTVA;
        },
        totalRest() {
            return this.totalTTC - this.bill.paid;
        }
    },
    methods: {
        ...mapActions(useBillStore, ['createBill', 'updateBill', 'saveBill', 'deleteBill']),
        formatPrice(price, suffix = "") {
            if (price % 1 === 0) {
                return price + "  € " + suffix;
            }
            return price.toFixed(2).replace(".", ",") + "  € " + suffix;
        },
        onAddPrestation() {
            this.bill.prestations.push({...prestationInterface, description: 'Description par défaut'});
        },
        onDeletePrestation(index) {
            this.bill.prestations.splice(index, 1);
        },
        onDeleteBill() {
            this.deleteBill(this.id);
            this.$router.push({ name: 'home' });
        },
        onSaveBill() {
            this.saveBill({
                ...this.bill,
                totalHT: this.totalHT,
                totalTTC: this.totalTTC
            });
            this.$router.push({ name: 'home' });
        }
    },
    mounted() {
        if (this.isNewBill) {
            this.createBill();
        } else {
            this.updateBill(this.id);
        }
    }
}
</script>