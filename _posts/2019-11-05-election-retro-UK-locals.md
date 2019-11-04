UK Local elections (and Welsh assembly and Scotish parliament elections) lack the resources or public interest of general elections but they are more complex in some respects. The quality of coverage news orgs can offer on them is probably the main beneficiary of the general election [space program]() . 

The first local elections I worked on were the 2006 ones. This was a pretty straightforward repurposing to the map that I'd developed for the [2005 General election](). Subsequently I worked with Steven Connor on the 2007 local, Scotish parliemant & Welsh assemebly itterations of the same technology. We were able to turn around the results presentations a lot quicker but by this time things were begining to creak -- the code was becoming difficult to maintain and visually the graphics were out of step with the rest of the website.

So in 2008 we put together the next generation election maps.

![2008 council election map](https://www.toffeemilkshake.co.uk/words/assets/images/local-council-2008.png)

By this time I'd recieved a promotion and was in a postion to make decisions about what technology we should use. We were still operating under pretty tight performance and page weight constraints so SVG+JS wasn't an option yet even if cross browser support issues hadn't meant that was a non-starter.

In the Flash world [AS2](https://en.wikipedia.org/wiki/ActionScript#ActionScript_2.0) had been superceded by the significantly more performant [AS3](https://en.wikipedia.org/wiki/ActionScript#ActionScript_3.0) and we decided that it had enough reach that the switch was worth it. A futher advantage this switch brough† was an ability to write beter structured more clearly modularised code and to compile from the command line. Generally better tooling. Anyway, I feel like that was a good decision. Using Flex, Adobe's UI framework was a less good idea -- scaffolding and wireing up the UI was dead easy but the promise of styling never panned out and things just always looked a little janky, out of step with the rest of the page. At this point it became really clear to me how these kind of live data presentations should work, how they should live with the native web elements, the HTML and CSS and so on -- something that everyone might have clocked years ago I guess but a lot of the discourse around this stuff at the time was focused on high level design rather than the production craft so I never got the message. It also served to highlighight exactly where Flash was strong and where it was un-necessary -- I'm not going to turn this into a disection of the Flash era, I have thoughts though.

Anyway, reusing these maps turned out to be as straight-forward as hoped. The development time for putting together a new one was dominated by the map preparation -- which is probably how it should be. This is the point at which we had finally established some pretty strong technical design patterns for election maps within the BBC but I don't feel like it was till the 2010 general election that we really got grips with the implementaion.

![2009 council election map](https://www.toffeemilkshake.co.uk/words/assets/images/local-council-2009.jpg)

In parallel to this work was the [US presidental election work for 2008]().
