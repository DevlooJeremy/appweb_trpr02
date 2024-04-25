import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Score from '../Score.vue'

describe('Score', () => {

    it('Score can display rankings from array of rankings', async () => {  
        const wrapper = mount(Score, {
            propsData: {
                Rankings: {
                    data1: {
                        id: 1,
                        name: 'Hugo',
                        score: 999
                    },
                    data2: {
                        id: 2,
                        name: 'Jeremy',
                        score: 999
                    }
                }
            }
        });

        expect(wrapper.findAll('li').length).toBe(2);
    })
})