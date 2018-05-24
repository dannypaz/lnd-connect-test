#### Expected behavior

Server failed to connect OR OUT_OF_RANGE because of the port number

#### Error

`[lncli] rpc error: code = Unknown desc = invalid magic in compressed pubkey string: 0`

#### REPRODUCTION CASE:

Generate a valid pubkey from another lnd instance OR use this example key: 02c9256ed7819decb9fb2659623a587c2a741fca9b264cef6b9136bf325a18bc1c

1. start all containers using `cd docker && docker-compose up -d)`
2. try to connect to the fake server w/ a valid public key


```
docker-compose exec lnd_btc bash -c 'lncli connect 02c9256ed7819decb9fb2659623a587c2a741fca9b264cef6b9136bf325a18bc1c@host.docker.internal:28492'
```
