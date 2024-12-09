import React from 'react';
import { ReactFlow, ReactFlowProvider, Background, MarkerType } from '@xyflow/react';
import { shallow } from 'zustand/shallow';

import { useStore } from './src/store';
import Osc from './src/nodes/Osc';
import Amp from './src/nodes/Amp';
// import Out from './nodes/Out';

import '@xyflow/react/dist/style.css';

const nodeTypes = {
  osc: Osc,
  amp: Amp
};


const defaultEdgeOptions = { 
  type: 'smoothstep',
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: '#888888',
  },
  style: {
    strokeWidth: 1,
    stroke: '#888888',
  }
};


const selector = (store) => ({
  nodes: store.nodes,
  edges: store.edges,
  onNodesChange: store.onNodesChange,
  onEdgesChange: store.onEdgesChange,
  addEdge: store.addEdge,
});

export default function App() {
  const store = useStore(selector, shallow);

  return (
    <ReactFlowProvider>
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={store.nodes}
          edges={store.edges}
          onNodesChange={store.onNodesChange}
          onEdgesChange={store.onEdgesChange}
          onConnect={store.addEdge}
          defaultEdgeOptions={defaultEdgeOptions}
          fitView
        >
          <Background />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}
