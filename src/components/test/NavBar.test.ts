import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import NavBar from '../NavBar.vue';
import Home from '@/components/HomePage.vue'
import Score from '@/components/Score.vue'
import {createRouter, createWebHistory } from 'vue-router'

describe('NavBar', () => {
  it('redirects to /score when score button is clicked', async () => {
    const routes = [
        { path: '/', component: Home},
        { path: '/score', component: Score}
    ];
    
    const router = createRouter({
        history: createWebHistory(),
        routes,
    });

    router.push('/');
    await router.isReady();

    const wrapper = mount(NavBar, {
        global: {
            plugins: [router],
        },
    });

    const routerLink = wrapper.findComponent({name: 'RouterLink', props: {to: '/score'}});
    await routerLink.trigger('click');
    await router.isReady();

    expect(router.push).

  })
});
