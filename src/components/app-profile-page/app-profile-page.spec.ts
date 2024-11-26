import { AppProfile } from './app-profile-page';
import { newSpecPage } from '@stencil/core/testing';

describe('app-profile-page', () => {
  describe('normalization', () => {
    it('returns a blank string if the name is undefined', async () => {
      const { rootInstance } = await newSpecPage({
        components: [AppProfile],
        html: '<app-profile-page></app-profile-page>',
      });
      expect(rootInstance.normalize(undefined)).toEqual('');
    });

    it('returns a blank string if the name is null', async () => {
      const { rootInstance } = await newSpecPage({
        components: [AppProfile],
        html: '<app-profile-page></app-profile-page>',
      });
      expect(rootInstance.normalize(null)).toEqual('');
    });

    it('capitalizes the first letter', async () => {
      const { rootInstance } = await newSpecPage({
        components: [AppProfile],
        html: '<app-profile-page></app-profile>',
      });
      expect(rootInstance.normalize('quincy')).toEqual('Quincy');
    });

    it('lower-cases the following letters', async () => {
      const { rootInstance } = await newSpecPage({
        components: [AppProfile],
        html: '<app-profile-page></app-profile-page>',
      });
      expect(rootInstance.normalize('JOSEPH')).toEqual('Joseph');
    });

    it('handles single letter names', async () => {
      const { rootInstance } = await newSpecPage({
        components: [AppProfile],
        html: '<app-profile-page></app-profile-page>',
      });
      expect(rootInstance.normalize('q')).toEqual('Q');
    });
  });
});
