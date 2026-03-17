# API Reference

## Create Escrow
```
POST /v1/escrow/create
```

```json
{
  "amount": 100,
  "token": "USDC",
  "recipient": "wallet_address"
}
```

## Confirm Escrow
```
POST /v1/escrow/:id/confirm
```

## Response Format
```json
{
  "escrow_id": "abc123",
  "status": "active"
}
```

**Base URL:** `https://api.solia.network`
