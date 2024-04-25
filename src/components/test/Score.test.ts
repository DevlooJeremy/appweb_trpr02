import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Score from '../Score.vue'

describe('Score', () => {

    it('l', async () => {  
        const wrapper = mount(Score);
        expect(wrapper.findAll('li').length).toBe(3);
    })
})