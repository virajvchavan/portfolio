---
title: 'Game of Shares'
url: '#'
index: 10
description: "A share market simulator to learn the basics of share market built in PHP, MySQL. A hobby project built in college which went viral for a short period of time among 300+ students."
start_date: "2019-02-25"
end_date: ""
tags: ['php', 'mysql', 'javascript', 'html', 'css']
---

# Game of Shares

<a href="https://github.com/virajvchavan/Game-of-Shares" class="project_linkouts" target='_blank'>Github</a>

I was in my 2nd year of engineering degree when I had this idea:
> A gamified Share Market Simulator, to learn the basics of the share market.

Looking back, it was more of an enjoyable betting game on virtual stocks, than something that would teach you much about the stock market.
But it was something that introduced me to the joy of building products!

<img src="/game-of-shares.png"/>

I had already built an app using the LAMP stack before in the project <a target="_blank" href="/project/bookshare/">Bookshare</a>. I used the same tech stack again, and tried not to make the same mistakes I had made in the previous one.

These were the features of the app:
- Users can create accounts to compete with other people
- A number of stocks(not real) whose value keeps fluctuating based on an algorithm
- Visual representation of the whole history of the stock prices through graphs
- Users are given some virtual money when they create an account
- Users can buy/sell stocks
- A Leader Board was created to increase competitiveness amongst users
- Each user's profile was publicly discoverable with his current valuation

These were some stats for the app:
- 300+ active users
- 12000+ total transactions
- 100+ users opened the app daily for over a month
- Most active users opened the app 20+ times in a day to keep track of changing stock prices
(There was no proper analytics enabled on the website, I approximated these values from the database entries)

The reason I loved working on this app is how it evolved over time.

Initially I had published a very basic version of it, and marketed it to the students in the college. A few people started using it and gave some feedback. I kept making changes according to the feedback.

The turning point was when I launched the Leader Board system, where people could see the top performing users, along with their own rank. This caught interest in a group of friends who started competing amongst themselves and then it went viral in their class with 100+ people playing it.

#### But how was the code?

> The code was not very maintainable.

Although it was somewhat better than my previous project <a target="_blank" href="/project/bookshare/">Bookshare</a>, it was still full of bad practices.

You can find the Github repo <a href="https://github.com/virajvchavan/Game-of-Shares" class="project_linkouts" target='_blank'>here.</a>

For the good parts, it did have some modularity. I did create <a href="https://github.com/virajvchavan/Game-of-Shares/blob/master/classes.inc.php" target="_blank">some classes</a> to follow object oriented design.

But this is why the code was bad:
- No separation of Views and the logic
- The business logic was spread across multiple places
- Very inefficient database queries
- No caching, every request hit the database
- Direct database queries in random places across PHP files
- No way to track changes in database structure
- It probably has some SQL injection security issues (had not even checked!)
- No error monitoring for the deployed app
- Deployed on a free shared hosting platform(<a href="https://www.hostinger.in/">Hostinger</a>), deploying changes was a lot of manual work
- The shared hosting exhausted its daily limits multiple times, and just stopped working

---

Like any addictive game, people slowly stopped using it after some time, and I stopped maintaining it. After <a href="https://www.hostinger.in/">Hostinger</a> stopped their free service, it went offline.

Learned lots from it. Game of Shares introduced me to the joy of building products!
