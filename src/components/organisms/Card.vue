<template>
  <div class="card">
    <span>
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);

  span {
    color: white;
  }
}
</style>