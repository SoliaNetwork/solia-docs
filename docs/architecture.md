# Architecture Overview

```
Client -> API -> Solana Program -> Events -> Adapter -> Settlement Rails
```

## Layers
1. **Client Layer**: Flutter/Web/SDK
2. **API Layer**: api.solia.network
3. **Smart Contract**: solia_escrow (PDA vaults)
4. **Event Listener**: Syncs backend state
5. **Adapter Layer**: Provider-agnostic connectors
6. **Settlement Rails**: Bank payout channels, regional rails, digital asset rails

## Networks
- Mainnet: Production
- Devnet: Testing

## Program ID
`Escrow9... (mainnet)`
