<template>
    <div class="container-fluid">
        <header class="d-flex flex-wrap justify-content-between py-3 px-4 mb-4 border-bottom">
            <a href="#"
               class="d-flex align-items-center gap-2 mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none text-primary">
                <i class="fa-solid fa-wallet fa-2x"/>
                <span class="fs-3">Factures</span>
            </a>
            <ul class="nav nav-pills gap-2">
                <li class="nav-item">
                    <RouterLink :to="{ name: 'home' }" class="nav-link" exact-active-class="active"
                                active-class="active">
                        <i class="fa-solid fa-house me-2"/>
                        Accueil
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink :to="{ name: 'about' }" class="nav-link" exact-active-class="active"
                                active-class="active">
                        A propos
                    </RouterLink>
                </li>
            </ul>
        </header>

        <main class="container main-router-container">
            <RouterView/>
        </main>

        <footer class="py-3 mt-5 border-top text-center">
            <span class="mb-3 mb-md-0 text-body-secondary">© {{ currentYear }} Factures.app</span>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    computed: {
        currentYear() {
            return new Date().getFullYear();
        }
    }
}
</script>

<style scoped>

</style>
