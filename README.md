<article>
<div class="contents">
{% for post in site.posts %}
  <div class="postlink-link">
    <span>{{ post.date | date_to_string }}</span>
    <a href="{{ post.url | prepend:site.baseurl }}">{{post.title}}</a> 
  </div>
{% endfor %}
</div>
</article>