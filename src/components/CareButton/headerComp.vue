<template>
  <header>
    <h3>{{ props.title }}</h3>
    <p>{{ props.desc }}</p>
    <svg
      width="20"
      height="20"
      class="closebtn"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 1.5L22.8627 22.5627"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.8625 1.5L1.49986 22.5627"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </header>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  desc: String,
  bgColor: String,
  color: String,
});
</script>

<style scoped>
.closebtn {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 15px;
  display: none;
}
header {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  outline-offset: -5px;
  padding: 24px 24px 0px 50px;
  box-sizing: border-box;
  background: v-bind(props.bgColor);
  color: v-bind(props.color);
  min-height: 130px;
}
@media (max-width: 450px) {
  .closebtn {
    display: block;
  }
}
</style>
