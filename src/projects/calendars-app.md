---
title: 'Calendars App'
url: 'https://calendars-vc.herokuapp.com/'
index: 12
description: "A Ruby on Rails app that syncs all your Google calendar events and presents them in a simple UI"
start_date: "2020-03-20"
end_date: ""
tags: ['ruby', 'ruby-on-rails', 'google-calendars', 'oauth2', 'postgresql', 'full-stack']
---

# Simple Calendar Events

<a href="https://github.com/virajvchavan/calendar_app" class="project_linkouts" target='_blank'>Github</a>
<a href="https://calendars-vc.herokuapp.com/" class="project_linkouts" target='_blank'>Website</a>

> This was a take-home assignment for a job I had applied for.

Easily access your Google Calendar events for today, classified by calendar names.

Deployed here: https://calendars-vc.herokuapp.com/

##### Problem Statement was:
- As a user, I want to have my Google Calendar events for today listed on a Web interface,
classified by calendar names
- When a user connects the Google account, all the calendars and events are imported to the App.
- The subsequent events which get created/updated/deleted are sync'd to the app automatically
- Using the Google Calendar APIs directly rather than using the gem like `google-api-client` would be preferred.

## Implementation Details
- Ruby on Rails app with PostreSQL as database
- Implements a basic authentication system using Google OAuth. (without passwords)
- Uses OAuth2 flow for authorization to user's resources (calendars/events)
- Implements a service to talk with Google Calendars API which handles:
  - fetching calendars for a user
  - fetching events for a calendar of user
  - registering webhooks for listening to changes to events/calendars
- Does not use background processing jobs for any tasks yet
  - potential to use for some use-cases
- Uses Rspec for testing
  - Test coverage still low

## Possible improvements/pending tasks
- Since the whole code was written under a short deadline; the codebase still needed a few changes when it was submitted.
- Please take a look at <a href="https://github.com/virajvchavan/calendar_app/issues" target='_blank'>Issues</a> section of the Github repository.
