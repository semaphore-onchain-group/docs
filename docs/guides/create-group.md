---
sidebar_position: 1
---

# Create group

Any NFT holder can create the corresponding NFT group, and the group is currently classified into 3 types: General, PoH and POAP (Other types can be added later). The group ID is Uint256.

- **General**: Basically, the group ID is the NFT’s contract address.

- **PoH**: In the case of PoH, the group ID is a value that converts the contract address to bytes32 and padded only the nearest digit with 1.
- **POAP**: In the case of POAP, since the contract address of all tokens is the same, the token name is used as the group ID. 

In addition, it can be identified through the group admin address.

:::info
If you want to check group information in on-chain, check the [semaphore subgraph](https://thegraph.com/hosted-service/subgraph/semaphore-protocol/kovan).
:::

## Step 1 : Select NFT
Select the NFT you want to make the group.

## Step 2 : Select group type
Select the Type of the group (POAP tokens can only be selected as POAP types).
Select carefully when choosing a group type because joining group conditions vary depending on it.(you can see the conditions [here](join-leave-group.md))
You cannot create the group if the NFT group you selected already exists.

## Step 3 : Create group
Create the group and wait for the transaction to be confirmed.