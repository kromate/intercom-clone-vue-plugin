<template>
  <form name="submit-to-google-sheet" @submit="formSubmit">
    <div v-if="!error && !submitted">
      <input
        type="text"
        placeholder="* Name"
        :name="props.title"
        value="KT"
        style="visibility: hidden; height: 0px; padding: 0px"
      />
      <input type="text" placeholder="* Name" name="Name" required />

      <input type="email" placeholder="* Email" name="Email" required />

      <textarea
        id=""
        name="Message"
        placeholder="* Message"
        rows="8"
        required
      ></textarea>

      <button id="SUB123" :disabled="loading">
        {{ loading ? "loading..." : "Submit" }}
      </button>
    </div>

    <div v-if="submitted">
      <h3 class="black-text">Form Submitted</h3>
      <button @click="submitAgain">Send Another</button>
    </div>

    <div v-if="error">
      <h3 class="black-text">
        An Error Occurred <br />
        please send again
      </h3>
      <button @click="tryAgain" class="shrrr">Retry</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const loading = ref(false);
const error = ref(false);
const submitted = ref(false);

const tryAgain = () => {
  loading.value = false;
  error.value = false;
};
const submitAgain = () => {
  loading.value = false;
  submitted.value = false;
};

const props = defineProps({
  title: String,
  scriptURL: String,
});

const emit = defineEmits<{
  (e: "submit", msg: Response): void;
  (e: "error", msg: string): void;
}>();

const formSubmit = (e) => {
  loading.value = true;
  e.preventDefault();
  const form = e.srcElement;
  fetch(props.scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      emit("submit", response);
      submitted.value = true;
    })
    .catch((err) => {
      emit("error", err);
      error.value = true;
    });
};
</script>

<style scoped>
form > div {
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  margin-top: 150px;
  text-align: center;
}
textarea {
  resize: none;
  border: 1px solid #d0d0d0;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;
  outline: none;
}

input {
  border: 1px solid #d0d0d0;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;
  outline: none;
}
.box123 input:hover,
.box123 textarea:hover {
  box-shadow: 0 0 5pt 0.5pt #d3d3d3;
}
.box123 input:focus,
.box123 textarea:focus {
  box-shadow: 0 0 5pt 2pt #d3d3d3;
  outline-width: 0px;
}
::placeholder {
  font-size: larger;
}
</style>
