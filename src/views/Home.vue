<template>
  <div class="home">
    
    <TheTitle title="All Destinations" subtitle="Where would you like to visit today?" />

    <div class="columns is-multiline is-mobile"> 
      <div class="column is-3" v-for="destination in destinations" :key="destination.name">
        <div class="card">
          <div class="card-header">
            <div class="card-header-title is-centered">
              <router-link :to="{ name: 'DestinationDetails', params: { slug: destination.slug } }">
                {{destination.name}}
              </router-link> 
            </div>
          </div>
          <div class="card-image">
            <figure class="image is-4by3">
              <router-link :to="{ name: 'DestinationDetails', params: { slug: destination.slug } }">
                <img :src="require('@/assets/' +destination.image)"
                :alt="destination.image">
              </router-link>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TheTitle from "@/components/TheTitle.vue";
import store from "@/store.js";

export default {
  name: "Home",
  components: {
    TheTitle
  },  
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>
