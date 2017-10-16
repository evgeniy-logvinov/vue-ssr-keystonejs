import Vue from 'vue';

  export default {
    name: 'hello',

    asyncData ({ store }) {
      return store.dispatch('fetch', {
        id: store.state.global.user._id,
        endpoint: 'users',
        namespace: 'user',
        global: true
      });
    },

    computed: {
      user () {
        return this.$store.state.global.user;
      },

      fullName() {
        const name = this.$store.state.global.user.name;

        if (name) {
          return name.first + ' ' + name.last;
        }

        return '';
      }
    }
  }