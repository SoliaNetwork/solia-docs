# Escrow Concepts

## Roles
- **Creator**: Initiates escrow and defines conditions
- **Depositor**: Funds the escrow vault
- **Recipient**: Receives settlement

## Lifecycle
```
Pending -> Funded -> Active -> Confirmed/Disputed -> Settled
```

## Settlement Types
- **Crypto**: Direct on-chain transfer
- **Local payout**: Adapter-routed transfer into payout rails

## Smart Contract Instructions
```
create_private_escrow
fund_private_escrow
confirm_private_escrow
settle_escrow
```
