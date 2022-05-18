export const networkCollections = {
  "0x1": [
    {
      image:
        "https://gateway.pinata.cloud/ipfs/QmNWe1ym9pyv15ALer4PYzgCPqYLxVHr9QEHCmybFiXPCG/6.jpg",
      name: "Arke ART",
      addrs: "0x0c5c8c539cd635a5353e6bf51357069c34085ca4",
    },
    {
      image:
        "https://gateway.pinata.cloud/ipfs/QmNWe1ym9pyv15ALer4PYzgCPqYLxVHr9QEHCmybFiXPCG/6.jpg",
      name: "Cryptonia",
      addrs: "0x876295342f2cda8d83e05f395063efa676535c43",
    },
    {
      image:
        "https://gateway.pinata.cloud/ipfs/QmNWe1ym9pyv15ALer4PYzgCPqYLxVHr9QEHCmybFiXPCG/6.jpg",
      name: "Arke Originals",
      addrs: "0xd755d554c547a53a4ebe8a1f02778c583a01d08e",
    },
    {
      image:
        "https://gateway.pinata.cloud/ipfs/QmNWe1ym9pyv15ALer4PYzgCPqYLxVHr9QEHCmybFiXPCG/6.jpg",
      name: "Personae",
      addrs: "0x8c0266c8d5eaa4a2fbed19fff3621ab1120c7336",
    },
  ],
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
