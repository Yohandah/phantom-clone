import React from 'react';
import { PhantomsList } from './PhantomsList';
import { Phantom } from '../../../types/Phantom';
import TestRenderer from 'react-test-renderer';
import { Loading } from '../../../components/Loading';
import { Error } from '../../../components/Error';
import { PhantomCard } from '../PhantomCard/PhantomCard';
import { NoData } from '../../../components/NoData';
const phantomActions = {
  rename: (phantomToRename: Phantom) => {
    return;
  },
  duplicate: (phantomToDuplicate: Phantom) => {
    return;
  },
  delete: (phantomToDelete: Phantom) => {
    return;
  },
};

describe('render state', () => {
  test('renders loading', async () => {
    const testRenderer = TestRenderer.create(
      <PhantomsList
        isLoading={true}
        phantoms={[]}
        isInError={false}
        phantomActions={phantomActions}
      />,
    );
    const testInstance = testRenderer.root;
    expect(await testInstance.findByType(Loading)).toBeDefined();
  });

  test('renders error', async () => {
    const testRenderer = TestRenderer.create(
      <PhantomsList
        isLoading={false}
        phantoms={null}
        isInError={true}
        phantomActions={phantomActions}
      />,
    );
    const testInstance = testRenderer.root;
    expect(await testInstance.findByType(Error)).toBeDefined();
  });

  test('renders 2 phantom cards', async () => {
    const phantoms: Phantom[] = [
      {
        id: '1',
        launchType: 'manually',
        manifest: { tags: { categories: [] } },
        name: '',
        script: '',
      },
      {
        id: '2',
        launchType: 'repeatedly',
        manifest: { tags: { categories: [] } },
        name: '',
        script: '',
      },
    ];

    const testRenderer = TestRenderer.create(
      <PhantomsList
        isLoading={false}
        phantoms={phantoms}
        isInError={false}
        phantomActions={phantomActions}
      />,
    );
    const testInstance = testRenderer.root;
    expect((await testInstance.findAllByType(PhantomCard)).length).toBe(2);
  });

  test('renders no data', async () => {
    const testRenderer = TestRenderer.create(
      <PhantomsList
        isLoading={false}
        phantoms={[]}
        isInError={false}
        phantomActions={phantomActions}
      />,
    );
    const testInstance = testRenderer.root;
    expect(await testInstance.findByType(NoData)).toBeDefined();
  });
});
