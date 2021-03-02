<template>
    <div class="columns">
        <div class="column is-12">
            <button class="button is-light" @click="go_back">Back</button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        go_back: function () {
            return this.$router.go(-1);
        }
    }
}
</script>