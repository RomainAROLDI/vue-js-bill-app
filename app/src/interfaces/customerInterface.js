const date = new Date().toISOString().split('T')[0];

export default {
    id: -1,
    firstname: 'John',
    lastname: 'Doe',
    job: '',
    phone: '',
    email: '',
    company: '',
    dateAdd: date,
    address: {
        address1: '00 rue du test',
        address2: '',
        zipCode: '54000',
        city: 'Nancy',
        country: 'France'
    }
}
