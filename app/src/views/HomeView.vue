<template>
    <main>
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h1><i class="fa-solid fa-chevron-down me-2"/>Dashboard</h1>
            <div>
                <BButton
                        :to="{ name: 'customer', params: { id: -1 } }"
                        size="sm" variant="outline-info"
                        iconLeft="circle-plus"
                        class="me-3"
                >
                    Créer un client
                </BButton>
                <BButton
                        :to="{ name: 'bill', params: { id: -1 } }"
                        size="sm" variant="outline-info"
                        iconLeft="circle-plus"
                >
                    Créer une facture
                </BButton>
            </div>
        </div>
    </main>
</template>

<script>
import BButton from "@/components/BButton.vue";

export default {
    components: {BButton}
}
</script>
