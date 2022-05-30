---
sidebar_position: 2
---

# Join/Leave Group

## Join Group

Basically, if you own the NFT, you can join the corresponding group, but there are some conditions depending on the group type.
Also, you can leave the group whenever you want.

- **General**: In order to prevent a case of repeatedly using join/leave to a group while moving one NFT to multiple wallet addresses, it is necessary to hold the NFT for more than 24 hours to join a group.

- **PoH**: In the case of PoH, it is literally a token that proves that you are a human being, and since it can be used for anti-sybil attack, it is blocked to join unless it is the first mint token.

- **POAP**: Same as PoH group.

### Step1: Generate Identity Commitment
You need to generate Identity Commitment to join/leave the semaphore group.

### Step2: Check ownership
Your NFT ownership will be automatically checked.

:::info
You can find the details about the Identity Commitment [here](https://semaphore.appliedzkp.org/docs/technical-reference/zk-kit).
:::

### Step3: Join Group
Join the group and wait for the transaction to be confirmed.


## Leave Group

Since these groups are semaphore groups, no one knows which group you joined.
To leave the group, you can go to the group you joined (click the group thumbnail). Then you can leave group by creating an identity commitment for the group. Even if the nft ownership check fails, you can leave group with warning alert. It is not compulsory now, but it may become compulsory in the future.