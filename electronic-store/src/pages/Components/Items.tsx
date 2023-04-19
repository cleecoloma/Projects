import React from 'react'
import cpuItems from "../../data/cpu.json";
import gpuItems from "../../data/gpu.json";
import storageItems from "../../data/storage.json";
import memoryItems from "../../data/memory.json";
import motherboardItems from "../../data/motherboard.json";
import powerSupplyItems from "../../data/power-supply.json";
import caseItems from "../../data/case.json";
import coolingItems from "../../data/cooling.json";

const storeItems = [
  ...cpuItems,
  ...gpuItems,
  ...storageItems,
  ...memoryItems,
  ...motherboardItems,
  ...powerSupplyItems,
  ...caseItems,
  ...coolingItems,
];

function Items() {
  return 
    storeItems
}

export default Items
