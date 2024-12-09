import React from 'react';
import { Handle } from '@xyflow/react';
import { shallow } from 'zustand/shallow';
import { tw } from 'twind';

import { useStore } from '../store';

const selector = (id) => (store) => ({
  setFrequency: (e) => store.updateNode(id, { frequency: +e.target.value }),
  setType: (e) => store.updateNode(id, { type: e.target.value }),
});

export default function Osc({ id, data }) {
  const { setFrequency, setType } = useStore(selector(id), shallow);

  return (
    <div className={tw('rounded-md bg-white shadow-xl')}>
      <p
        className={tw('rounded-t-md px-2 py-1 bg-gray-500 text-white text-sm')}
      >
        Collect initail details
      </p>

      <label className={tw('flex flex-col px-2 py-1')}>
        <p>full_user_name</p>
      </label>

      <hr className={tw('border-gray-200 mx-2')} />
      <label className={tw('flex flex-col px-2 py-1')}>
        <p>accident type</p>
      </label>

      <hr className={tw('border-gray-200 mx-2')} />
      <label className={tw('flex flex-col px-2 py-1')}>
        <p>city</p>
      </label>

      <hr className={tw('border-gray-200 mx-2')} />
      <label className={tw('flex flex-col px-2 py-1')}>
        <p>Exit Senario</p>
      </label>

      <hr className={tw('border-gray-200 mx-2')} />


      <Handle className={tw('w-0 h-0')} type="source" position="right" />
      
    </div>
  );
}
