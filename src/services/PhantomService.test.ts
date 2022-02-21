import * as PhantomService from './PhantomService';
import { Phantom } from '../types/Phantom';

describe('PhantomService', () => {
  it('should duplicate phantom and return the updated list', async () => {
    jest.spyOn(Date, 'now').mockReturnValue('10' as any);
    const phantomToDuplicate: Phantom = {
      id: '2',
      launchType: 'repeatedly',
      manifest: { tags: { categories: [] } },
      name: 'to duplicate',
      script: '',
    };

    const phantoms: Phantom[] = [
      {
        id: '1',
        launchType: 'manually',
        manifest: { tags: { categories: [] } },
        name: '',
        script: '',
      },
      phantomToDuplicate,
    ];

    const newPhantoms = PhantomService.duplicatePhantom(phantoms, phantomToDuplicate);

    expect(newPhantoms).toHaveLength(3);
    expect(newPhantoms).toEqual([...phantoms, { ...phantomToDuplicate, id: '10' }]);
  });

  it('should rename the phantom and return the updated list', () => {});
  it('should delete the phantom and return the updated list', () => {});
  it('should filter the phantoms and return them', () => {});
});
