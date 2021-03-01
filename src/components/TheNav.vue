<template>
    <div>
        <b-navbar>
            <template #brand>
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img
                        src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                    >
                </b-navbar-item>
            </template>
            <template #start>
                <b-navbar-item v-for="destination in destinations" 
                    :key="destination.name"
                    tag="router-link" 
                    :to="{ name: 'DestinationDetails', params: { slug: destination.slug } }">
                    {{destination.name}}
                </b-navbar-item>
                <b-navbar-dropdown label="Options">
                    <b-navbar-item tag="router-link" :to="{ path: '/about' }">
                        About
                    </b-navbar-item>
                </b-navbar-dropdown>
            </template>
        </b-navbar>
    </div>
</template>

<script>

import store from '../store.js'

export default {
 name: "TheNav",
 data() {
     return {
         destinations: store.destinations
     }
    }  
}
</script>