import { addEdge, applyNodeChanges, applyEdgeChanges } from '@xyflow/react';
import { nanoid } from 'nanoid';
import { createWithEqualityFn } from 'zustand/traditional';
import {MarkerType} from "@xyflow/react"

const initialNodes = [
  {
    id: 'osc1',
    type: 'osc',
    position: { x: 250, y: 100 },
    data: { frequency: 440 },
  },
  {
    id: 'amp1',
    type: 'amp',
    position: { x: 250, y: 300 },
    data: { gain: 0.5 },
  },
];


export const useStore = createWithEqualityFn((set, get) => ({
  nodes: [
    {
      id: 'a',
      type: 'osc',
      data: {},
      position: { x: 0, y: 0 },
    },
    {
      id: 'b',
      type: 'amp',
      data: { },
      position: { x: 300, y: 50 },
    },
    
  ],
  edges: [{ 
    id: "e-a-b", 
    source: "a", 
    target: "b", 
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#888888',
    },
    style: {
      strokeWidth: 1,
      stroke: '#888888',
    }
  },],
  isRunning: false,

  toggleAudio() {
    set({ isRunning: !get().isRunning });
  },

  onNodesChange(changes) {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  updateNode(id, data) {
    set({
      nodes: get().nodes.map((node) =>
        node.id === id
          ? { ...node, data: Object.assign(node.data, data) }
          : node,
      ),
    });
  },

  onEdgesChange(changes) {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  addEdge(data) {
    const id = nanoid(6);
    const edge = { id, ...data };

    set({ edges: [edge, ...get().edges] });
  },
}));
