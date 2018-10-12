---
layout: image
title: Electoral college dot map
originalURL: http://www.toffeemilkshake.co.uk/electoral-college-clusters/
primaryImageURL: /words/assets/images/2012-results-dot-map-logo.png
---

[demo](http://www.toffeemilkshake.co.uk/electoral-college-clusters/demo.html) [source](https://github.com/tomgp/electoral-college-clusters)

## What?

The picture above is the map I developed for the FT's 2016 US election results coverage — in this case I've taken off the state names and coloured it in using 2012 results.

In designing this graphic our aim was to retain the geographical cues of traditional election results maps whilst giving a clearer idea of the relative importance of various bits of the country with respect to the electoral college. Trade offs are still made but I'm more comfortable with them than the standard [cartogram vs topographical](http://www.toffeemilkshake.co.uk/electoral-college-clusters/cartcube.png) accuracy extremes. A notable problem is that it doesn't shrink very well, so for smaller screen sizes we went with the industry standard [Albers USA](http://bl.ocks.org/mbostock/2869946) choropleth.

## How ?

The map was produced by working out a center point for each state (initially the center point of the states bounding box, later tweaked by hand) and using [D3s force module](https://github.com/d3/d3/blob/master/API.md#forces-d3-force) to layout the correct number of electoral college circles for a given state in a neat way around this point. This layout was then edited by hand to give a bit more separation in the crowded North East whilst aiming to retain the visual density of individual state groups. The votes for a given state tend to form a regular grid, this helps with counting, and size comparisons, there's a temptation to try to squeeze points within state boundaries but I resisted where possible in order to preserve these affordances. I think I'm least satisfied with Massachusetts and Maryland.

My code for the initial sketch of this map is [available on Github](https://github.com/tomgp/electoral-college-clusters) and you can see [a demo](http://www.toffeemilkshake.co.uk/electoral-college-clusters/demo.html) here complete with transitions which we never used (we went for delivering it as a flat SVG to the client).

Also: My colleague Martin Stabe has written in depth about the reasoning behind this: [The search for a better US election map](https://www.ft.com/content/3685bf9e-a4cc-11e6-8b69-02899e8bd9d1)