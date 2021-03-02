<template>
    <div>
        <div class="box">
            <h1 class="title"> {{ experience.name}} </h1>
                <div class="columns is-mobile is-multiline">
                    <div class="column is-6">
                        <img :src="require('@/assets/' +experience.image)" :alt="experience.image">
                    </div>
                    <div class="column is-6">
                        {{experience.description}}
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import store from '@/store.js';

export default {
    props: {
        slug: {type: String, required: true},
        experienceSlug: {type: String, required:true}
    },
    computed: {
        destination() {
            return store.destinations.find(
                destination => destination.slug === this.slug
            );
        },
        experience() {
            return this.destination.experiences.find(
                experience => experience.slug === this.experienceSlug
            );
        }
    }
}
</script>