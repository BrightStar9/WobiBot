import React from 'react';
import { Handle, Position } from '@xyflow/react';
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
      {/* <Handle
        type="source"
        id = "1"
        position={Position.Right}
        style={{ top: 15 }}
      /> */}
      <label className={tw('flex flex-col px-2 py-1')}>
        <p>full_user_name</p>
        <Handle
        type="source"
        id = "2"
        position={Position.Right}
        style={{ top: 45 }}
      />
      </label>

      <hr className={tw('border-gray-200 mx-2')} />
      <label className={tw('flex flex-col px-2 py-1')}>
        <p>accident type</p>
        <Handle
        type="source"
        id = "3"
        position={Position.Right}
        style={{ top: 77 }}
      />   
      </label>

      <hr className={tw('border-gray-200 mx-2')} />
      <label className={tw('flex flex-col px-2 py-1')}>
        <p>city</p>
        <Handle
        type="source"
        id = "4"
        position={Position.Right}
        style={{ top:110 }}
      />
      </label>

      <hr className={tw('border-gray-200 mx-2')} />
      <label className={tw('flex flex-col px-2 py-1')}>
        <p>Exit Senario</p>
        <Handle
        type="source"
        id = "5"
        position={Position.Right}
        style={{ top: 142 }}
      />
      </label>

      <hr className={tw('border-gray-200 mx-2')} /> 
    </div>
  );
}
