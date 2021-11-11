<template>
  <a-col :xs="grid.xs" :sm="grid.sm" :md="grid.md" :lg="grid.lg" :xl="grid.xl" :xxl="grid.xxl">
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
