---
title: Introduction
sidebar_position: 1
slug: /
---

# Semaphore on-chain NFT group
This is a document for the Semaphore on-chain NFT group open platform(** [Semaphore NFT group page](https://nft-group.vercel.app/) **).

Users can join the Semaphore NFT group  via holding NFT and can prove that they are the member of the group without revealing their identity.
There is a group admin for each NFT type([general](guides/create-group.md), [poh](guides/create-group.md), [poap](guides/create-group.md), more can be added..), and at the current step, it is necessary to manage semaphore group members. You can request the admin to create a group with any type of NFT in your wallet, and once the group is created, other users holding that NFT can join the group.

By generating a semaphore membership proof, members of the group can prove that they own the NFT without exposing their wallet address.
If the NFT is minted via Proof of Humanity certification, it can be used for apps that need to prevent sybil attacks like quadratic funding. Here, if the semaphore NFT group(assuming it is a reliable POH NFT group) is used, sybil attacks can be prevented without revealing identity. 

:::info
[Semaphore](https://semaphore.appliedzkp.org/) is a zero-knowledge gadget which allows Ethereum users to prove their membership of a set which they had previously joined without revealing their original identity.
:::