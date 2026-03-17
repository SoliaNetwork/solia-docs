# Escrow Concepts

## Roles
- **Creator**: Initiates escrow, defines conditions
- **Depositor**: Funds the escrow vault
- **Recipient**: Receives settlement

## Lifecycle
```
Pending → Funded → Active → Confirmed/Disputed → Settled
```

## Settlement Types
- **Crypto**: Direct on-chain transfer
- **Fiat**: Wise, Bridge, local rails

## Smart Contract Instructions
```
create_private_escrow
fund_private_escrow
confirm_private_escrow
settle_escrow
