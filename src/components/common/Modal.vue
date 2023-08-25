<template>
  <div>
    <transition name="modal">
      <div class="modal__mask">
        <div class="modal__wrapper">
          <div class="modal__container">
            <button
              class="modal__close-button"
              @click="emit('close')"
            >
              <SvgIcon
                icon="closeBig"
                class="modal__close-icon"
              />
            </button>
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close']);
</script>

<style>
.modal__mask {
  position: fixed;
  z-index: 9997;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: table;
  transition: opacity 2s ease;
}

.modal__wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal__container {
  width: fit-content;
  margin: 0px auto;
  background-color: #fff;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.modal__header {
  display: flex;
  justify-content: space-between;
}

.modal__close-button {
  z-index: 9998;
  position: absolute;
  top: 29px;
  right: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.modal__close-button:hover .modal__close-icon path {
  fill: var(--grey-dark-4);
}

.modal__close-icon path {
  fill: var(--grey-dark-2);
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
