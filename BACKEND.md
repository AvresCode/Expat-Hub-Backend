
## Entities

### User

| key        | data type | required | notes                              |
| ---------  | --------- | -------- | ---------------------------------- |
| id         | Integer   | yes      |Already added by model:generate     |
| firstName  | String    | yes      |                                    |
| lastName   | String    | yes      |                                    |
| email      | String    | yes      | unique                             |
| password   | String    | yes      | password hash                      |
| age        | integer   | no       |                                    |
| gender     | String    | no       |                                    |
| nationality| String    | no       |                                    |
| education  | String    | no       |                                    |
| imageUrl   | Text      | no       |                                    |
|isAmbassador| Boolean   | no       | Default value: false               |
| createdAt  | Date      | yes      |Already added by model:generate     |
| updatedAt  | Date      | yes      |Already added by model:generate     |
