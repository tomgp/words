Between the General Election of 2005 and that of 2017 (inclusive) I worked on 19 (I think) election results systems. First for BBC News then later for the FT. Given the bulk of my professional life has been spent thinking about this stuff it may not surprie you to learn that I have some thoughts. Many of the things I made esp. for the BBC no longer work or rather would work but require some maintenance (I have some thoughts here too!)

What follows is a series of posts -- essentially for the purpose of orangising and annotating a bunch of scren grabs I have plus maybe some half-baked recollections/ reckons. 

Of course none of this stuff was done by me alone and I'll attempt to credit as many of my brilliant co-workers as I can.

--

I started at the BBC in late 2004 and it was known an election would be happening early/mid 2005. Planning was already underway and I was given responsibility for the interactive results map. 

![2005 general election results](https://www.toffeemilkshake.co.uk/words/assets/images/election-results-map-2005.jpg)

This was a relatively new thing, the BBCs first foray having been for the 2004 US presidential election. The difference here was the number of consituencies vs the number of states, for performance and navigation reasons this necesitated a multi stage navigation... click on a region zoom in to that, click on a constituency, zoom into that and then show the results. There was also a kind of pseudo-3D effect that raised the selected constituency above its neighbours. [Rob Bateman](https://twitter.com/robnet) who'd devised the US election map had written a parser in PHP to convert an SVG into a binary asset suitable for loading into Flash but because of the complexity of the UK coastline/ constituency outlines vs American states (and my novices desire to re-write stuff) I re-wrote this in Java which sped up the process of itterating map assets from the design team. 

Tech wise: the whole client application was written in AS2 and used a bespoke (undocumented) XML based component system which was a _bit_ of a pain. Most of my time not wrestling with that was spent eeking out performance and page weight improvements. The resulting SWF file was around 350kb and at the time the acceptable page weight for a BBC news page was if I remember correctly 75kb (INCLUDING IMAGES!)([eg](http://news.bbc.co.uk/1/hi/world/europe/4205208.stm) this one is ~60kb). We also had a tiny file on the server which would note the last time a data update occured and allow us to only download the data as an when it was required instead of polling for the whole file all the time. We really sweated this stuff. I guess most people were probably still on dial up?

Design wise: we used a bespoke pixel version of Verdana for the font and turned off all anti-aliasing (again driven by performance considerations as well as differnert font rendering accorss platforms meaning this was a good way to ensure baseline legibility), this apporach led to BBC graphics of the period having quite a distinctive crispy look and feel which I think you can kind of get even though I'm using a shitty JPG here.

At the time this was all very on-trend and our graphics for the 2005 election won the Peter Sulivan award at [Malofiej](http://www.malofiejgraphics.com/awards/). Looking back I can see much of this was a technical showcase rather than something attached to a clear user need.

One way I like to think about Election results projects is that they're kind of like a space program. Part of the job of a space program is to get to space and do some science but as a side effect you get a whole bunch of technologies -- teflon, comms satelites, [etc.](https://spinoff.nasa.gov/Spinoff2008/tech_benefits.html) which may be less glamorous but are for many people much more useful, day-to-day than someone walking on the moon. Part of the job of election results sytems for news sites is to report results but a valuable side effect is that the whole graphics team -- usually beholden to the daily production cycle -- is given time and space to work together on a long term project creating new technology and learning new skills. Elections are a chance for a team to level-up and to generate new tools and methods for communicating data. Futher there's a marketing dimension; in the cold war the US and the USSR used their space programs to represent their technological sophisitcaion. Election results sites perform a similar function for news web sites (I think this was way more pronounced back in 2005).

![The 2005 swingometer](https://www.toffeemilkshake.co.uk/words/assets/images/swingometer-2005.jpg)

The [swingometer](https://en.wikipedia.org/wiki/Swingometer) is an iconic part of the BBCs election coverage. I didn't have much to do with the 2005 iteration beyond sitting next to Mike Brown the guy who was developing it but I have a screen grab so dropping it in here. I remember Mike having similar performace headaches to those I was experiencing. Also Peter Snow came round to see us and was super enthusiasic and chatty.

![Seat calculator 2005](https://www.toffeemilkshake.co.uk/words/assets/images/seatcalculator-2005.jpg)

Of course a couple of well documented problems with the swingometer 1) it only deals with the movement of votes between two parties and 2) it ignores local peculiarities.  So we have the above image the 2005 seat calculator basically a form and a Perl script in the best tradion of early web interactivity. If you clicked on the "fine tune" button you can adjust how different constituency groups would behave but really the rate at which you get feedback and the opaque nature of the input and output (a table) meant that this was one squarely for psephplogy nerds.

--- 

Random recollections: 

I found this election pretty stressful (this will emerge as a pattern). I was new to the BBC and this was my first proper non-junior role and I felt kind of on my own. Coupled to this, the interactive map was very much the centerpiece of the online coverage, I felt a lot of pressure for it not to be terrible and for much of the 2 month developement time it really was terrible. My colleague Adam Rees who'd been a the BBC a couple of years at this point was really excellent support in terms of helping me to ask for help and putting things in perspective. 

Another source of stress was the broader editorial team -- people in my immediate office were all lovely but we'd get visits every so often from the editor of the news web site who'd make absurd demands for things he'd promised his colleagues in the TV part of the corporation and then when people politely pointed out that the ideas might not work or would jeopradise other commitments he'd rant and rave, on more than one occasion reducing people to tears, __WHAT A PRICK!__
