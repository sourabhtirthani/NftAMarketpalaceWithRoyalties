export const networkCollections = {
  "0x4": [
    {
      image:
        "https://gateway.pinata.cloud/ipfs/QmNWe1ym9pyv15ALer4PYzgCPqYLxVHr9QEHCmybFiXPCG/6.jpg",
      name: "The Nona",
      addrs: "0xa512ccd585e44d4b8ad3d2a391167eb079ac5cf3",
    },
  ],

  "0x2a": [
    {
      image:
        "https://gateway.pinata.cloud/ipfs/QmNWe1ym9pyv15ALer4PYzgCPqYLxVHr9QEHCmybFiXPCG/6.jpg",
      name: "The Nona",
      addrs: "0xa512ccd585e44d4b8ad3d2a391167eb079ac5cf3",
    },
  ],
};

export const getCollectionsByChain = (chain) => networkCollections[chain];
