
## Entities

### User

| key        | data type | required | notes                              |
| ---------  | --------- | -------- | ---------------------------------- |
| id         | Integer   | yes      |Already added by model:generate     |
| firstName  | String    | yes      |                                    |
| lastName   | String    | yes      |                                    |
| email      | String    | yes      | unique                             |
| password   | String    | yes      | password hash                      |
| city       | String    | yes      |                                    |
| age        | Integer   | no       |                                    |
| gender     | String    | no       |                                    |
| nationality| String    | no       |                                    |
| education  | String    | no       |                                    |
| imageUrl   | Text      | no       |                                    |
|isAmbassador| Boolean   | no       | Default value: false               |
| createdAt  | Date      | yes      |Already added by model:generate     |
| updatedAt  | Date      | yes      |Already added by model:generate     |

**Relations:**

- User has many events
- User has many images
- User has many comments
- User has many items
- User has many skills

###   Event

| key        | data type | required | notes                              |
| ---------  | --------- | -------- | ---------------------------------- |
| id         | Integer   | yes      |Already added by model:generate     |
| title      | String    | yes      |                                    |
|description | String    | yes      |                                    |
| date       | Date      | yes      |                                    |
| address    | String    | yes      |                                    |
| spots      | integer   | yes      |                                    |
| imageUrl   | Text      | yes      |                                    |
| userId     | Integer   | yes      |                                    |
|categoryId  | Integer   | yes      |                                    |
| createdAt  | Date      | yes      |Already added by model:generate     |
| updatedAt  | Date      | yes      |Already added by model:generate     |

**Relations:**

- Event belongs to one user
- Event has many users
- Event has many images
- Event has many comments
- Event belongs to one category.


###  Category

| key        | data type | required | notes                              |
| ---------  | --------- | -------- | ---------------------------------- |
| id         | Integer   | yes      |Already added by model:generate     |
| name       | String    | yes      |                                    |
| imageUrl   | Text      | yes      |                                    |
| createdAt  | Date      | yes      |Already added by model:generate     |
| updatedAt  | Date      | yes      |Already added by model:generate     |

**Relations:**

- Category has many events.

###  Comment

| key        | data type | required | notes                              |
| ---------  | --------- | -------- | ---------------------------------- |
| id         | Integer   | yes      |Already added by model:generate     |
| text       | String    | yes      |                                    |
| userId     | Integer   | yes      |                                    |
| eventId    | Integer   | yes      |                                    |
| createdAt  | Date      | yes      |Already added by model:generate     |
| updatedAt  | Date      | yes      |Already added by model:generate     |

**Relations:**

- Comment belongs to a user.
- Comment belongs to an event.


### Image

| key        | data type | required | notes                              |
| ---------  | --------- | -------- | ---------------------------------- |
| id         | Integer   | yes      |Already added by model:generate     |
| imageUrl   | Text      | yes      |                                    |
| userId     | Integer   | yes      |                                    |
| eventId    | Integer   | yes      |                                    |
| createdAt  | Date      | yes      |Already added by model:generate     |
| updatedAt  | Date      | yes      |Already added by model:generate     |

**Relations:**

- Image belongs to a user.
- Image belongs to an event.

###  Attendees (Joint table)

| key        | data type | required | notes                              |
| ---------  | --------- | -------- | ---------------------------------- |
| id         | Integer   | yes      |Already added by model:generate     |
| userId     | Integer   | yes      |                                    |
| eventId    | Integer   | yes      |                                    |
| createdAt  | Date      | yes      |Already added by model:generate     |
| updatedAt  | Date      | yes      |Already added by model:generate     |

**Relations:**

-Event belongs to many users 
-User belongs to many events

### Item

| key        | data type | required | notes                              |
| ---------  | --------- | -------- | ---------------------------------- |
| id         | Integer   | yes      |Already added by model:generate     |
| name       | String    | yes      |                                    |
|description | String    | yes      |                                    |
| imageUrl   | Text      | yes      |                                    |
| userId     | Integer   | yes      |                                    |
| createdAt  | Date      | yes      |Already added by model:generate     |
| updatedAt  | Date      | yes      |Already added by model:generate     |

**Relations:**

- Item belongs to a user.

### Skill

| key        | data type | required | notes                              |
| ---------  | --------- | -------- | ---------------------------------- |
| id         | Integer   | yes      |Already added by model:generate     |
| name       | String    | yes      |                                    |
| createdAt  | Date      | yes      |Already added by model:generate     |
| updatedAt  | Date      | yes      |Already added by model:generate     |

**Relations:**

- Skill has many users

### UserSkill

| key          | data type | required | notes                              |
| ---------    | --------- | -------- | ---------------------------------- |
| id           | Integer   | yes      |Already added by model:generate     |
| userId       | Integer   | yes      |                                    |
| skillId      | Integer   | yes      |                                    |
| can_teach    | String    | yes      |                                    |
|wants_to_learn| String    | yes      |                                    |
| createdAt    | Date      | yes      |Already added by model:generate     |
| updatedAt    | Date      | yes      |Already added by model:generate     |

**Relations:**

- Skill belongs to many users
- User belongs to many skills
