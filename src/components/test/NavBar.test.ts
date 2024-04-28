import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import NavBar from '../NavBar.vue';

describe('NavBar', () => {
  it('redirects to /score when score button is clicked', async () => {
    const mockRoute = {
        params: {
            id: 1
        }
    }

    const mockRouter = {
        push: vi.fn()
    }

    const wrapper = mount(NavBar, {
        global: {
            mocks: {
                $route: mockRoute,
                $router: mockRouter
            }
        }
    })

  const button = await wrapper.find('button')
  button.trigger('click')


    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith('');

  })
});
