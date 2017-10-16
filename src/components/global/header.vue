<template>
    <header>
        <nav>
            <div>
                <ul>
                    <li>
                        <router-link :to="{ name: 'Home' }">
                            Home
                        </router-link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li v-if="uid">
                        <router-link :to="{ name: 'profile' }">
                            Profile
                        </router-link>
                    </li>
                    <li>
                        <router-link v-if="!uid" :to="{ name: 'login' }">
                            Login
                        </router-link>
                        <router-link v-if="uid" :to="{ name: 'logout' }">
                            Logout
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'header',

    computed: {
      uid() {
        return this.$store.state.global.user._id
      }
    }
  }
</script>

<style lang="scss" scoped>
    
</style>