<template>
    <table class="table my-5 table-striped table-hover">
        <thead>
            <slot name="head">
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Description</th>
                    <th scope="col">Numéro</th>
                    <th scope="col">Client</th>
                    <th scope="col">Total HT</th>
                    <th scope="col">Total TTC</th>
                    <th scope="col" colspan="2"><i class="fa-solid fa-gear"/></th>
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