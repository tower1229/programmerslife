<template>
    <v-snackbar
      v-model="show"
      :color="color"
    >
    {{text}}
    </v-snackbar>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'globToast',
    computed: {
        show () { return this.$store.state.globToast.list },
        text () { return this.$store.state.globToast.text },
        color () { return this.$store.state.globToast.color }
    }
};
</script>

<style scoped>

</style>
