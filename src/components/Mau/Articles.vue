<template>
<a-card class="mau-card" style="width: 92%">
  <a-row>
    <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="12">
      <p>{{content}}</p>
    </a-col>
    <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="12">
      <img
      width="90%"
      alt="example"
      :src="image"
    />
    </a-col>
  </a-row>
</a-card>
</template>

<script>
export default {
  name: 'Articles',
  props: {
    content: String,
    image: String
  }
};
</script>

<style>

</style>
