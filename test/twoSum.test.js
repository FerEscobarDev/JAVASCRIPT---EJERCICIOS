import { describe, it, expect } from 'vitest'
import twoSum from '../src/twoSum.js'

describe('twoSumFunction', () => {
  it('should return [0, 1] for nums = [2, 7, 11, 15], target = 9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  })
  it('should return [1, 2] for nums = [3, 2, 4], target = 6', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
  })
  it('should return [0, 1] for nums = [3, 3], target = 6', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  })
  it('last test', () => {
    expect(twoSum([3, 2, 3], 6)).toEqual([0, 2])
  })
})
