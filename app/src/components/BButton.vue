<template>
    <component :is="href ? 'a' : to ? 'router-link' : 'button'" class="btn text-nowrap"
               :class="['btn-' + variant, 'btn-' + size]" :to="to" :href="href">
        <i v-if="iconLeft" class="fa-solid me-2" :class="'fa-' + iconLeft"></i>
        <slot/>
        <i v-if="iconRight" class="fa-solid ms-2" :class="'fa-' + iconRight"/>
    </component>
</template>

<script>
export default {
    props: {
        iconLeft: {
            type: String,
            default: ''
        },
        iconRight: {
            type: String,
            default: ''
        },
        variant: {
            type: String,
            default: 'primary'
        },
        size: {
            type: String,
            default: 'md'
        },
        href: {
            type: String,
            default: null
        },
        to: {
            type: [String, Object],
            default: null
        }
    }
}
</script>