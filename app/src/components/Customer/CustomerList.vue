<template>
    <table class="table my-5 table-striped table-hover">
        <thead>
            <slot name="head">
                <tr>
                    <th scope="col" class="col-lg-3">Nom</th>
                    <th scope="col" class="col-lg-4">Entreprise</th>
                    <th scope="col" class="col-lg-2">Date d'ajout</th>
                    <th scope="col" colspan="2" class="col-lg-3"><i class="fa-solid fa-gear"/></th>
                </tr>
            </slot>
        </thead>
        <tbody>
            <slot/>
        </tbody>
    </table>
</template>

<script>
export default {}
</script>