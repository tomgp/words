By 2010 the writing was very much on the wall for Flash as a widespread web technology. There are a number of reasons for this but the killing blow was Steve Job's [_thought on Flash_](https://www.apple.com/hotnews/thoughts-on-flash/) memo. Whilst some of the arguments are disengenuous -- Adobe and Mozilla had lobied to make ECMA script 4 the sucessor to the then standard JS (AS3 being a pretty full implementation of that spec) which would have allowed the Flash authoring environment to export web native "Open Web" content they were blocked from doing so by Apple -- the problems of battery life and security were real though and Adobe dragged their feet.

However! The performance of SVG and Javascript still wasn't there when it came to rendering dynamic content (and it would be another 5 years before it got close to what Flash was pulling off a decade earlier). If 2010 had been a US election year we might have attempted it (2012 was the first use of SVG on the BBC election results) as it was we had to deal with the coast of Scotland so we stuck with Flash.

That said we moved designed the system around the idea that the Flash bit shgould be replacable -- The SWF file became a presentaiotn layer that the HTML/JS page pushed data to rather than fetching it's own data, this was possible largely becasue we had developed a better understanding of communication between JS and AS3 from the US 2008 election and that my colleague Martyn Rees and I had spend time developing a thematic mapping toolkit allowing for easy creation of choropleth maps.

eg. here's a map coloured by the the shade of the leaders ties

![tie map](https://www.toffeemilkshake.co.uk/words/assets/images/tie-map.jpg)

Our toolkit allowed us to knock this stuff out very easily so the map graphics were properly comodified by this point. We could very easily deploy them within an HTML page which served to highlight how the technology was never the determining factor in the quality of the output, the work still needed to be done to contextualise and explain.

![2010 seat calculator](https://www.toffeemilkshake.co.uk/words/assets/images/seat-calculator-2010.jpg)

2006
