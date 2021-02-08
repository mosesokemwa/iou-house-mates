# IOU_HOUSEMATE_TRACKER

**Local setup**
1. Create a postgres database ``housemate_dev``

```json
    host: 'localhost',
    database: 'housemate_dev',
    user: 'postgres',
    password: 'password',
    port: '5432'
```
2. Clone repo, and run ``yarn`` to install dependencies
3. Run migrations using ``yarn db:init`` and seeds db ``yarn db:seed``
4. Run local server ``yarn start``
5. Below are the api endpoints


| HTTP Method | Resource | Payload Format                           | Response w/o Payload | Response w/ Payload                | Description             |
|:------------|:---------|:-----------------------------------------|:---------------------| :----------------------------------|:------------------------|
| GET         |`/users`  |``{"users":["Adam","Bob"]}``              |``{"users":}``        |``{"users": (sorted by name)}``     |List of User Information |
| POST        |`/add`    |``{"user":}``                             | N/A                  |``<User object for rew users)``     |Create User              |
| POST        |`/iou`    |``{"lender":,"borrower":,"amount":5.25}`` | N/A                  |``{"users": and (sorted by name)>}``|Create IOU               |


TODO:
- [ ] Implement cascade deletion of iou's