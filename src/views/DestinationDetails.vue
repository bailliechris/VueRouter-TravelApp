<template>
  <div>
    <!-- Title Area --> 
    <section>
      <TheTitle v-bind:title="destination.name" />
      <GoBack />

      <!-- details of destination - needs more formatting (to make image smaller!) --> 
      <div class="box">
        <div class="columns is-mobile is-multiline">
          <div class="column is-6">
            <img :src="require('@/assets/' +destination.image)" :alt="destination.image">
          </div>
          <div class="column is-6">
            {{destination.description}}
          </div>
        </div>
      </div>

      <!-- Experiences for the destinations --> 
      <div class="container">
        <h2 class="title">Top experiences in {{ destination.name }} </h2>

        <div class="columns is-multiline is-mobile"> 
          <div class="column is-3" v-for="experience in destination.experiences" :key="experience.slug">
            <div class="card">
              <div class="card-header">
                <div class="card-header-title is-centered">
                  <router-link :to="{ name: 'ExperienceDetails', params: { experienceSlug: experience.slug } }">
                    {{experience.name}}
                  </router-link> 
                </div>
              </div>
              <div class="card-image">
                <figure class="image is-4by3">
                  <router-link :to="{ name: 'ExperienceDetails', params: { experienceSlug: experience.slug } }">
                    <img :src="require('@/assets/' +experience.image)"
                    :alt="experience.image">
                  </router-link>
                </figure>
              </div>
            </div>
          </div>
        <!-- Force the section above to refresh when a router-link is invoked --> 
          
        </div>
      </div>
      <router-view :key="$route.path" />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import TheTitle from "@/components/TheTitle.vue"
import GoBack from "@/components/GoBack.vue"
import store from '@/store.js'

export default {
  name: "Home",
  components: {
    TheTitle,
    GoBack
  },
  data() {
    return {
//        slug: this.$route.params.slug
    };
  },
  props: {
    slug: { type:String, required: true }
  },
  computed: {
      destination() {
          // go to the store (imported at the top here) and find the relevant details
          return store.destinations.find(
              destination => destination.slug === this.slug
          )
      }
  }
};
</script>