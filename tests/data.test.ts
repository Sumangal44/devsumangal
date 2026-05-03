import { describe, it, expect } from 'vitest';
import { projects } from '../src/data/projects';
import { skills } from '../src/data/skills';

describe('Data Configuration Files', () => {
  describe('projects.js', () => {
    it('should export an array of projects', () => {
      expect(Array.isArray(projects)).toBe(true);
      expect(projects.length).toBeGreaterThan(0);
    });

    it('each project should have required properties with correct types', () => {
      projects.forEach((project, index) => {
        expect(project, `Project at index ${index} is missing properties`).toBeTypeOf('object');
        
        // Check title
        expect(project).toHaveProperty('title');
        expect(typeof project.title).toBe('string');
        expect(project.title.trim().length).toBeGreaterThan(0);
        
        // Check description
        expect(project).toHaveProperty('description');
        expect(typeof project.description).toBe('string');
        
        // Check image
        expect(project).toHaveProperty('image');
        expect(typeof project.image).toBe('string');
        expect(project.image).toMatch(/^https?:\/\/.+/);

        // Check link
        expect(project).toHaveProperty('link');
        expect(typeof project.link).toBe('string');
        expect(project.link).toMatch(/^https?:\/\/.+/);
      });
    });
  });

  describe('skills.js', () => {
    it('should export an array of skills', () => {
      expect(Array.isArray(skills)).toBe(true);
      expect(skills.length).toBeGreaterThan(0);
    });

    it('each skill should have a name and a valid icon URL', () => {
      skills.forEach((skill, index) => {
        expect(skill, `Skill at index ${index} is invalid`).toBeTypeOf('object');
        
        // Check name
        expect(skill).toHaveProperty('name');
        expect(typeof skill.name).toBe('string');
        expect(skill.name.trim().length).toBeGreaterThan(0);

        // Check icon
        expect(skill).toHaveProperty('icon');
        expect(typeof skill.icon).toBe('string');
        expect(skill.icon).toMatch(/^https?:\/\/.+/);
      });
    });
  });
});
