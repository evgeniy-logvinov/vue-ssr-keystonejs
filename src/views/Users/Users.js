export default {
    name: 'items',

    asyncData ({ store }) {
        return store.dispatch('fetch', {
          endpoint: 'items'
        });
    },

    computed: {
        items () {
          return this.$store.state.items;
        }
    }
}