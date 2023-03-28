import { mount } from '@vue/test-utils';
import { describe, expect, it, beforeEach } from 'vitest';
import DoubleSelect from '@/components/common/DoubleSelect.vue';
import { createRouter, createWebHistory, Router } from 'vue-router';
import { routes } from '@/router';
import { createTestingPinia } from '@pinia/testing';
import { itemsMock } from '../../mock/projectList';

describe('DoubleSelect.vue', () => {
  let router: Router;
  beforeEach(async () => {
    router = createRouter({
      history: createWebHistory(),
      routes: routes,
    });
    await router.push('/');
    await router.isReady();
  });
  it('Renders correctly', () => {
    const wrapper = mount(DoubleSelect, {
      global: {
        plugins: [router, createTestingPinia()],
      },
      props: {
        items: itemsMock,
      },
    });
    expect(wrapper.findComponent(DoubleSelect).exists()).toBe(true);
  });
  // it('Set initValue correctly', () => {
  //   const wrapper = mount(DoubleSelect, {
  //     global: {
  //       plugins: [router, createTestingPinia()],
  //     },
  //     attrs: {
  //       options: projectListMock,
  //       label: 'name',
  //     },
  //     props: {
  //       initValue: initValueMock,
  //     },
  //   });
  //   expect(wrapper.get('.vs__selected').element.innerHTML).toContain(
  //     'Проект 2'
  //   );
  // });
  // it('Change option correctly', async () => {
  //   const wrapper = mount(DoubleSelect, {
  //     global: {
  //       plugins: [router, createTestingPinia()],
  //     },
  //     attrs: {
  //       options: projectListMock,
  //       label: 'name',
  //     },
  //     props: {
  //       initValue: initValueMock,
  //     },
  //   });
  //   await wrapper.get('.v-select').trigger('click');
  //   // vs__dropdown-option
  //   expect(wrapper.get('.vs__dropdown-option').element.innerHTML).toContain(
  //     'Проект 1'
  //   );
  // });
});
