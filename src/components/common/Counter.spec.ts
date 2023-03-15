// @vitest-environment jsdom
import { nextTick } from 'vue';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Counter from './Counter.vue';

describe('Counter component', function () {
  it('creates an instance', function () {
    // const host = document.createElement('div');
    // document.body.appendChild(host);
    // const instance = new Counter({ target: host });
    const instance = mount(Counter);
    expect(instance).toBeTruthy();
  });

  it('renders', function () {
    // const host = document.createElement('div');
    // document.body.appendChild(host);
    // new Counter({ target: host });
    const instance = mount(Counter);
    expect(instance.element.innerHTML).toContain('Clicks: 0');
  });

  it('updates count when clicking a button', async function () {
    // const host = document.createElement('div');
    // document.body.appendChild(host);
    // new Counter({ target: host });
    const instance = mount(Counter);
    expect(instance.element.innerHTML).toContain('Clicks: 0');
    const btn = instance.element.getElementsByTagName('button')[0];
    btn.click();
    await nextTick();
    expect(instance.element.innerHTML).toContain('Clicks: 1');
  });
});
