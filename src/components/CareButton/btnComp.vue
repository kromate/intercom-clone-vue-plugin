<template>
  <button @click="toggle" id="b123" class="animateB123">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="c123"
    >
      <rect
        x="0.900146"
        y="4.5"
        width="22.2"
        height="15"
        rx="1.5"
        stroke="currentColor"
        stroke-width="1.8"
      />
      <path
        d="M22.5 5.25L12.8719 12.1272C12.3503 12.4998 11.6497 12.4998 11.1281 12.1272L1.5 5.25"
        stroke="currentColor"
        stroke-width="1.5"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "toggle"): void;
}>();

const toggle = () => emit("toggle");
</script>

<style scoped>
@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
}

.animateB123 {
  animation: float 5s ease-in-out infinite;
}
</style>
