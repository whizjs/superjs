<template>
<b-dropdown variant="link" size="sm" no-caret>
    <template slot="button-content">
      <a>Tools</a>
    </template>
    <b-dropdown-item>Hello</b-dropdown-item>
    <b-dropdown-item>World</b-dropdown-item>
    <b-dropdown-item>Third</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item>Something</b-dropdown-item>
    <b-dropdown-item>Daction</b-dropdown-item>
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

  div.dropdown-menu {
    padding: 0;
  }

  div > a.dropdown-item {
    width: 70%;
    padding-left: 0.5rem;
  }
</style>

