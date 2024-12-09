import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { shallow } from 'zustand/shallow';
import { tw } from 'twind';

import { useStore } from '../store';

const selector = (id) => (store) => ({
  setGain: (e) => store.updateNode(id, { gain: +e.target.value }),
});

export default function Osc({ id, data }) {
  const { setGain } = useStore(selector(id), shallow);

  return (
    <div className={tw('rounded-md bg-white shadow-xl')}>
      
      <div>
        
        <p
        className={tw('rounded-t-md px-2 py-1 bg-gray-500 text-white text-sm')}
      >
        Base on details
      </p>
      {/* <Handle
        type="target"
        id = "4"
        position={Position.Left}
        style={{ top: 15 }}
      /> */}
      </div>
      
      <label className={tw('flex flex-col px-2 pt-1 pb-2')}>
        <p className={tw('text-center')}>User_pro</p>
        <Handle
        type="target"
        id = "5"
        position={Position.Left}
        style={{ top: 45 }}
      />
      </label>

    </div>
  );
}
