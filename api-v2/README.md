# Based API

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## [Controllers](https://docs.nestjs.com/controllers)

Controllers are the entry point for the API. This is the layer that interfaces with the front end.

### How do I create a new controller?

1. Run the following command:

    ```bash
    npm run add:controller
    ```

1. Name the controller after the domain plurality (e.g. `users` NOT `user`)
1. Update `dto/input.dto.ts` for api endpoint body validation
1. Update `dto/output.dto.ts` for api endpoint response typing

### How do I create an endpoint

An endpoint should have the following parts

1. Transform the `inputDto` to the service method `params`
1. Call the service method(s)
1. Transform the service method response to the `outputDto`
1. Return the `ApiResponse`

Make sure that any services that are used are listed in the controller constructor

```ts
@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(private readonly userService: UserService) {}
        ...
}
```

Here is an example:

```ts
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async CreateUser(
    @Body() inputDto: InputDto.CreateUser,
  ): ApiResponse<UserOutputDto> {
    const user = await this.userService.CreateUser(inputDto);
    const dto = new UserOutputDto(user);
    return { data: dto };
  } 
}
```

## [Services](https://docs.nestjs.com/providers#services)

Services handle all of the internal business logic. There are two types of services:

- Domain Service
- Application Service

### What is a domain service?

A domain service handles a particular `aggregate`. It is called by either a [`controller`](#controllers) or an `applicationService`. NEVER another `domainService`.

Aggregates are clusters of entities and value objects that are thought of as a single unit.They provide a consistency boundary. They should be persisted together as a whole.
[Some more info on this can be found here.](https://www.connell.dev/ddd-building-blocks/)

A domain service should access the database through a `repository` (a composed object that standardizes database access for an `aggregate`) and external APIs through a [`gateway`](#external-gateway).

### What is an application service?

An application service orchestrates multiple [domain services](#what-is-a-domain-service) to handle more complex business logic. It is called by a [`controller`](#controllers) NEVER a `domainService`.

An application service should only call domain services. It SHOULD NOT call a `respository` nor a [`gateway`](#external-gateway).

### How do I create a service?

1. Run the following command:

    ```bash
    npm run add:service
    ```

1. Choose between a `domain` and `application` service.
1. Name the controller after the aggregate root (this is the core data model. e.g. `user`)
1. Update the domain (or application) `models` folder to have the correct types
1. Update the `api.interface.ts` file with the service interface
1. Update the `api.params.ts` file with the interface input parameters
1. (domain services only) Update the `repository` folder with database models and read/write methods
1. Update `transform.ts`
    - (domain) with methods to convert db models into domain models
    - (application) with methods to convert domain models into application models

## External Gateway

An external gateway is used to interface with external APIs. It provides a layer of genericization to prevent external schemas from influencing internal models and creating unsafe dependencies
