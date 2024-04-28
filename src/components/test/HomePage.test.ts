import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import HomePage from '../HomePage.vue'

describe('HomePage', () => {
    it('HomePage redirect to game if form is filled and submitted', async () => {
        const mockRoute = {
            params: {
                id: 1
            }
        }

        const mockRouter = {
            push: vi.fn()
        }

        const wrapper = mount(HomePage, {
            global: {
                mocks: {
                    $route: mockRoute,
                    $router: mockRouter
                }
            }
        })

        const form = await wrapper.find('form')
        form.trigger('submit')
        await form.find('input').setValue('Test');
        await form.find('select').setValue('Test');


        expect(mockRouter.push).toHaveBeenCalledTimes(1);
        expect(mockRouter.push).toHaveBeenCalledWith('');
    });
});