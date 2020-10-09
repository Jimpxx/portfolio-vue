<template>
  <div class="tool">
    <i :class="classes"></i>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  name: 'Tool',
  props: {
    icon: String,
    name: String,
  },
  data() {
    return {
      classes: `fab fa-${this.icon} fa-5x`,
    };
  },
};
</script>

<style>
.tool {
  margin-bottom: 1rem;
}
</style>
