import { mount } from '@vue/test-utils';
import { describe, expect, it, beforeEach, vi } from 'vitest';
import DoubleSelect from '@/components/common/DoubleSelect.vue';
import SvgIcon from '@/components/common/SvgIcon.vue';
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
        components: {
          SvgIcon,
        },
        plugins: [router, createTestingPinia()],
      },
      props: {
        items: itemsMock,
      },
    });
    expect(wrapper.findComponent(DoubleSelect).exists()).toBe(true);
  });
  // it('Change option correctly', async () => {
  //   const wrapper = mount(DoubleSelect, {
  //     global: {
  //       plugins: [router, createTestingPinia()],
  //     },
  //     props: {
  //       items: itemsMock,
  //     },
  //   });
  //   await wrapper.get('.video-header__select-btn').trigger('click');
  //   // vs__dropdown-option
  //   expect(wrapper.get('.vs__dropdown-option').element.innerHTML).toContain(
  //     'Проект 1'
  //   );
  // });
  it('Change series correctly', async () => {
    const wrapper = mount(DoubleSelect, {
      global: {
        components: {
          SvgIcon,
        },
        plugins: [router, createTestingPinia()],
      },
      props: {
        items: itemsMock,
      },
    });
    const component = wrapper.vm as any;
    const toggleSelectSeasons = vi.spyOn(component, 'toggleSelectSeasons');
    // const toggleSelectEpisode = vi.spyOn(component, 'toggleSelectEpisode');
    // const changeSeason = vi.spyOn(component, 'changeSeason');
    // const changeEpisode = vi.spyOn(component, 'changeEpisode');
    await wrapper.get('.video-header__select-btn').trigger('click');
    expect(toggleSelectSeasons).toHaveBeenCalledTimes(1);
    // await wrapper
    //   .get('.video-header__select-item:first-child')
    //   .trigger('click');
    // expect(changeSeason).toHaveBeenCalledTimes(1);
    // await wrapper
    //   .get('.video-header__select:last-child .video-header__select-btn')
    //   .trigger('click');
    // expect(toggleSelectEpisode).toHaveBeenCalledTimes(1);
    // await wrapper
    //   .get(
    //     '.video-header__select:last-child .video-header__select-item:first-child'
    //   )
    //   .trigger('click');
    // expect(changeEpisode).toHaveBeenCalledTimes(1);
  });
});
