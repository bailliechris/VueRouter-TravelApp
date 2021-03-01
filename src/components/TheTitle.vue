<template>
  <div>
    <section class="hero is-link">
      <div class="hero-body">
        <p class="title">
          {{title}}
        </p>
        <p class="subtitle">
          {{subtitle}}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "TheTitle",
  props: {
    title: String,
    subtitle: String
  }
};
</script>

<style>

</style>
