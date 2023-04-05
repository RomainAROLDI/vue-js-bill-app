<template>
    <div>
        <h1>Editer la facture #{{ id }}</h1>
        <p>contenu de la page ici</p>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    mounted() {
        console.log(this.id);
    }
}
</script>