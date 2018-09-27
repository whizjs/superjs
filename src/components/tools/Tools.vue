<template>
<b-dropdown variant="link" size="sm" no-caret>
    <template slot="button-content">
      <a>Tools</a>
    </template>
    <b-dropdown-item>First Action</b-dropdown-item>
    <b-dropdown-item>Second Action</b-dropdown-item>
    <b-dropdown-item>Third Action</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item>Something else here...</b-dropdown-item>
    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
  </b-dropdown>
</template>

<script>
  export default {
    name: "Tools"
  };
</script>

<style scoped>
  a {
    font-size: 1rem;
  }
</style>

