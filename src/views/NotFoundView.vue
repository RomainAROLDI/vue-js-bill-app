<template>
    <div class="not-found">
        <h1>Erreur 404</h1>
        <p>Cette page n'existe pas ou a été déplacée.</p>

        <BButton class="text-white" to="/" icon-left="angle-left">Accueil</BButton>
    </div>
</template>

<script>
import BButton from "@/components/BButton.vue";

export default {
    components: {BButton}
}
</script>

<style lang="scss" scoped>

</style>