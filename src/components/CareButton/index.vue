<template>
  <div class="body123">
    <div id="box123" class="box123" v-if="show">
      <headerComp
        :title="props.title"
        :desc="props.desc"
        :bgColor="props.bgColor"
        :color="props.color"
      />
      <formComp
        :title="props.title"
        :scriptURL="props.scriptURL"
        @submit="onFormSubmit"
        @error="onFormError"
      />
    </div>
  </div>
  <btnComp @toggle="toggle" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import headerComp from "./headerComp.vue";
import formComp from "./formComp.vue";
import btnComp from "./btnComp.vue";

export interface Props {
  openIcon?: string;
  closeIcon?: string;
  scriptURL?: string;
  title?: string;
  desc?: string;
  color?: string;
  bgColor?: string;
}

const show = ref(false);
const toggle = () => (show.value = !show.value);

const onFormSubmit = (e) => console.log(e);
const onFormError = (e) => console.log(e);

const props = withDefaults(defineProps<Props>(), {
  openIcon: `<rect x="0.900146" y="4.5" width="22.2" height="15" rx="1.5" stroke="currentColor" stroke-width="1.8"/>
 <path d="M22.5 5.25L12.8719 12.1272C12.3503 12.4998 11.6497 12.4998 11.1281 12.1272L1.5 5.25" stroke="currentColor" stroke-width="1.5"/>`,
  closeIcon: ` <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>å`,
  scriptURL:
    "https://script.google.com/macros/s/AKfycbwNddRBf6fJHnual0bmKRm6ExEHf6520FRv_2t66FO28tUBj4AiZlkr0lk2-p3iDAmf8g/exec",
  title: "Company Title",
  desc: "Description text goes here",
  color: "white",
  bgColor: "darkBlue",
});

onMounted(() => {
  // functionality();
});
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

.body123 * {
  font-family: sans-serif;
}
.body123 h3 {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.animateB123 {
  animation: float 5s ease-in-out infinite;
}

#b123 {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  transform-origin: center center;
  backface-visibility: hidden;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
}

.box123 {
  z-index: 200000;
  position: fixed;
  bottom: 100px;
  right: 20px;
  height: calc(100% - 120px);
  width: 376px;
  min-height: 250px;
  max-height: 704px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;
  opacity: 1;
  border-radius: 8px;
  background-color: white;
  overflow: hidden;
  transition: width 200ms ease 0s, height ease 0s, max-height ease 0s;
}

@media (max-width: 450px) {
  .box123 {
    width: 100%;
    height: 100%;
    max-height: none;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border-radius: 0px;
    background: #fff;
  }
}
</style>

<style>
button {
  cursor: pointer;
  transition: all 0.35s linear;
  border: none;
  outline: none;
  border-radius: 5px;
  min-height: 50px;
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: v-bind(props.color);
  background-color: v-bind(props.bgColor);
}

button:disabled {
  color: white;
  cursor: not-allowed;
  background-color: grey !important;
}
.black-text {
  color: black;
}
</style>
