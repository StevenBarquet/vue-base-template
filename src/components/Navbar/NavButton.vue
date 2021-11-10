<template>
  <a-col :span="grid.xl">
    <router-link :to="{ path: path }">
      <div class="nav-button">
        {{ label }}
      </div>
    </router-link>
  </a-col>
</template>

<script>
export default {
  name: 'NavButton',
  props: {
    label: String,
    path: String,
    grid: Object
  }
};
</script>
