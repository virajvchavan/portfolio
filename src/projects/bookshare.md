---
title: 'Bookshare'
url: '#'
index: 7
description: "A web portal acting as a community for the book readers of the college WCE, Sangli built in PHP, MySQL, had 75+ active happy users when active."
start_date: "2019-02-25"
end_date: ""
tags: ['php', 'mysql', 'javascript', 'html', 'css']
---

### Bookshare

<a href="https://github.com/virajvchavan/bookshare" class="project_linkouts" target='_blank'>Github</a>

This was the first useful project that I had ever completed back when I was still in college.

I like reading books, and so do lots of people from my college campus. The college library had a limited collection of books when it came to non-technical books. So I came up with:

> A book discovery service within a trusted circle of people.

This is how it worked:
- A web portal where anyone from the campus can share what books they have.
- Anyone can view all the books that are available to be borrowed.
- Profiles were verified to be from the campus only.
- In order to get access to any book, you needed to create an account, which will give you the access of book owner's contact number.

<img src="/bookshare.png"/>

I had never built a full-featured web application before. One my friends knew PHP, so I started learning PHP. I spent days learning PHP, and MySQL for the database.

I deployed the app on a free shared hosting platform <a href="https://www.hostinger.in/">Hostinger</a>, and marketed it to the people I knew. 75+ students did create an account on the platform, but not all shared their books. 30+ users shared 100+ books on the platform.

People did use the platform to connect with others and share books with each other. But there was no way to know that for me! I did not give a way to record that kind of activity! There was no analytics set up as well!

#### But how was the code?

> The code was full of bad practices.

PHP is very easy to start with. But give it to a beginner with no experience and he'll probably write the most un-maintainable code you can imagine. That's what I did.

This is why the code was bad:
- Spaghetti code with no thought put into organizing the code
- No separation of views and the logic
- Business logic and database queries spread across multiple views
- Inefficient database queries with no caching whatsoever
- No way to track changes in database structure
- Security issues
- No easy way to modify features


As the first real project used by real people, it gave me the confident I needed to build new things!
