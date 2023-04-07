import {defineStore} from 'pinia';
import billInterface from '../interfaces/billInterface.js';
import cloneDeep from 'lodash.clonedeep';
import axios from 'axios';

const useBillStore = defineStore('bill', {
    state: () => ({
        bill: null,
        bills: []
    }),
    getters: {
        totalBills: (state) => state.bills.length
    },
    actions: {
        async getAllBills() {
            try {
                const response = await axios.get('/bills');
                console.log(response.data);
                this.$patch({bills: cloneDeep(response.data)});
            } catch (error) {
                console.log(error);
            }
        },

        createBill() {
            console.log("Création d'une nouvelle facture");
            if (this.bill && this.bill._id) {
                delete this.bill._id;
            }
            this.$patch({bill: cloneDeep(billInterface)});
        },

        async getBill(id) {
            try {
                const response = await axios.get(`/bills/${id}`);
                console.log(response.data);
                this.$patch({bill: cloneDeep(response.data)});
            } catch (error) {
                console.log(error);
            }
        },

        async saveBill(bill) {
            if (bill._id) {
                try {
                    const response = await axios.patch(`/bills/${bill._id}`, bill);
                    console.log('patch response ', response.data);
                    this.$reset();
                } catch (error) {
                    console.log(error);
                }
            } else {
                console.log("création d'une nouvelle facture");
                try {
                    const response = await axios.post(`/bills`, bill);
                    console.log('post response ', response.data);
                    this.$reset();
                } catch (error) {
                    console.log(error);
                }
            }
        },

        async deleteBill(id) {
            try {
                const response = await axios.delete(`/bills/${id}`);
                console.log('delete response ', response.data);
                await this.getAllBills();
            } catch (error) {
                console.log(error);
            }
        }
    }
})

export {useBillStore}
