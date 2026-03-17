# Architecture Overview

```
Client → API → Solana Program → Events → Adapter → Fiat Rails
```

## Layers
1. **Client Layer**: Flutter/Web/SDK
2. **API Layer**: api.solia.network
3. **Smart Contract**: solia_escrow (PDA vaults)
4. **Event Listener**: Syncs backend state
5. **Adapters**: Wise, Bridge
6. **Payment Rails**: Banks/crypto off-ramps

## Networks
- Mainnet: Production
- Devnet: Testing

## Program ID
`Escrow9... (mainnet)`
