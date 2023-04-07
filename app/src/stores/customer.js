import {defineStore} from 'pinia';
import customerInterface from '../interfaces/customerInterface.js';
import cloneDeep from 'lodash.clonedeep';
import axios from 'axios';

const useCustomerStore = defineStore('customer', {
    state: () => ({
        customer: null,
        customers: []
    }),
    getters: {
        totalCustomers: (state) => state.customers.length
    },
    actions: {
        async getAllCustomers() {
            try {
                const response = await axios.get('/customers');
                console.log(response.data);
                this.$patch({customers: cloneDeep(response.data)});
            } catch (error) {
                console.log(error);
            }
        },

        createCustomer() {
            if (this.customer && this.customer._id) {
                delete this.customer._id;
            }
            this.$patch({customer: cloneDeep(customerInterface)});
        },

        async getCustomer(id) {
            try {
                const response = await axios.get(`/customers/${id}`);
                console.log(response.data);
                this.$patch({customer: cloneDeep(response.data)});
            } catch (error) {
                console.log(error);
            }
        },

        async saveCustomer(customer) {
            if (customer._id) {
                try {
                    const response = await axios.patch(`/customers/${customer._id}`, customer);
                    console.log('patch response ', response.data);
                    this.$reset();
                } catch (error) {
                    console.log(error);
                }
            } else {
                try {
                    const response = await axios.post(`/customers`, customer);
                    console.log('post response ', response.data);
                    this.$reset();
                } catch (error) {
                    console.log(error);
                }
            }
        },

        async deleteCustomer(id) {
            try {
                const response = await axios.delete(`/customers/${id}`);
                console.log('delete response ', response.data);
                await this.getAllCustomers();
            } catch (error) {
                console.log(error);
            }
        }
    }
})

export {useCustomerStore}
