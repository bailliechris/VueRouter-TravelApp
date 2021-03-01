<template>
    <div>
        <TheTitle v-bind:title="destination.name" />
        <div class="card">
          <div class="card-header">
            <div class="card-header-title is-centered">
                {{destination.name}}
            </div>
          </div>
          <div class="card-image">
            <figure class="image is-4by3">
                <img :src="require('@/assets/' +destination.image)" :alt="destination.image">
            </figure>
          </div>
          <div class="card-content">
            {{destination.description}}
          </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import TheTitle from "@/components/TheTitle.vue";
import store from '@/store.js'

export default {
  name: "Home",
  components: {
    TheTitle
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