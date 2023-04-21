import React, { useState } from 'react'
import cpuItems from "../../data/cpu.json";
import gpuItems from "../../data/gpu.json";
import storageItems from "../../data/storage.json";
import memoryItems from "../../data/memory.json";
import motherboardItems from "../../data/motherboard.json";
import powerSupplyItems from "../../data/power-supply.json";
import caseItems from "../../data/case.json";
import coolingItems from "../../data/cooling.json";


function Items() {
  const storeItems = useState[
    ...cpuItems,
    ...gpuItems,
    ...storageItems,
    ...memoryItems,
    ...motherboardItems,
    ...powerSupplyItems,
    ...caseItems,
    ...coolingItems,
  ];

  return 
    storeItems
}

export default Items
