# 🍲 Searo

_Your favourite recipes, hot to go_

Searo is a simple recipe management application, created in response to
a coding challenge. Your can view the original breif
[here](https://github.com/SeroLife/typescript-fullstack-tech-test).

It is deliberately very minimal, aiming to provide an MVP that does not
exceed the stated requirements prior to stakeholder review.

## Getting started

Install and run the app with `make install docker`.

Navigate to http://localhost:3000 to view the UI.

Once the app is running you can run end-to-end tests with `make test`.

## Features

Users can add new recipes, which are stored for later.

Users can search for and view previously added recipes.
Search terms can be recipe titles or ingredients.

### Non-functional requirements

- Run the whole stack with `make install docker`
- Data is persisted when database is stopped and started
- End to end tests demonstrate acceptance criteria has been implemented
- Continuous integration
- App deployment

## Tech Stack
- Typescript
- React
- Cypress
- Docker
- SQLite

## Design decisions

SQLite was chosen as the fastest to implement for MVP. It will likely
not scale and should be easy enough to swap out for MySQL in time.

Each recipe is modelled as two strings, a title and a body. This gives
the user the most flexibility in how they want to lay out their recipe,
and is very simple to implement. In future we may wish to add rich text
formatting to the body.

## Outstanding context questions

- How does this project contribute to the company's goals?
- Do we intend to monetise this? If so, how?
- How will we differentiate ourselves from competitors? What's our USP?
- What do our competitors do better than us?
- Who are our target audience?
- What browsers/formats do we want to support?
- How will we measure success? Page views, scroll depth, dwell time, user reviews, etc

## TODOs

Functional and non-functional considerations before this goes to production

- Test on mobile, and across a number of browsers
- Run lighthouse and address any valid concerns, document any outstanding issues
- Get a product designer to give feedback on the design, the MVP is utilitarian
- Add monitoring, FE & BE, such as sentry or new relic
- Automate test coverage, add more tests as requried
- Ensure application meets accessibility guidelines
- Ensure the application is secure, review OWASP top ten, run static analysis, potentially hire pen testers
- Set up HTTPs
- Measure application performance and bottlenecks, plan for scale, but do not prematurely optimise
- Page search results, to prevent very large payloads causing performance issues
- Add API validation, to prevent bugs and reduce security vulnerabilty
- Make recipe bodies collapsible, so long lists are easier to navigate
- Perhaps allow users to attach images?
- Add account management and login system, so multiple users can share one tenant
- Add formatting controls on input form, such as font size etc, but beware script injection etc
- Potentially move the whole system serverless (S3/Lambda/DyanmoDB)? Docker feels like overkill for a crud app, but depends what infra the team/org is most familiar with maintaining. Running costs of various options should be compared, along with ease of scaling.
- Make the app offline friendly (PWA) with webworkers
- Branch/merge protections, rquire PR approval and CI pass
- Review documentation, improve where necessary
- Internationalise? Are we unicode safe? Can we handle flambé?
- Add user monitoring for metrics such as scroll depth, dead clicks, etc. Consider fullstory.
- Ensure all technologies and libraries are up to date
- Check for errors and warning on the terminal and web console during build/run
- Potentially split up some files which have multiple exports/concerns
- Implement a FE component libary for a quick and easy face life
- Debounce inputs to prevent search API getting spammed
- Add static anlysis and duplicate code detection
- Add a database migration system
- Bug: Error in network tab when submitting new recipe, does not appear to affect functionality, may be due to lack of HTTPS?
- Review all everything from the initial template, trim fat and ensure nothing is insecure or misleading
- Linting
- Formatting e.g. prettier
- Infrastructure as code, e.g. terraform
- Docker compose verion is obsolete
- Set up healthchecks on the servers, and configure AWS
