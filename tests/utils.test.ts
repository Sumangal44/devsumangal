import { describe, it, expect } from 'vitest';
import { cn } from '../src/lib/utils';

describe('Utility functions', () => {
  describe('cn()', () => {
    it('should merge basic tailwind classes', () => {
      expect(cn('px-2 py-1', 'bg-blue-500')).toBe('px-2 py-1 bg-blue-500');
    });

    it('should conditionally apply classes', () => {
      expect(cn('px-2 py-1', { 'bg-red-500': true, 'text-white': false })).toBe('px-2 py-1 bg-red-500');
    });

    it('should handle tailwind merge conflicts properly', () => {
      // tailwind-merge handles class conflicts by keeping the last one
      expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500');
      expect(cn('px-2', 'px-4')).toBe('px-4');
    });

    it('should ignore null, undefined, and false', () => {
      expect(cn('px-2', null, undefined, false, 'py-1')).toBe('px-2 py-1');
    });
  });
});
