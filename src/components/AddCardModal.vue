<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal__header">
              <div class="modal__title">Добавление</div>
              <IconCloseBig class="modal__close-icon" />
            </div>
            <div class="modal__subtitle">{{ data.subtitle }}</div>

            <div class="modal-body">
              <slot name="body"> default body </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                default footer
                <button
                  class="modal-default-button"
                  @click="$emit('close')"
                >
                  OK
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import IconCloseBig from '@/assets/closeBig.svg';

const props = defineProps<{
  data: {
    subtitle: string;
  };
}>();
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 380px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.modal__header {
  display: flex;
  justify-content: space-between;
}

.modal__close-icon path {
  fill: var(--grey-dark-2);
}

.modal__title {
  margin-bottom: 4px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: var(--grey-dark-4);
}

.modal__subtitle {
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: var(--grey-dark-2);
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

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
