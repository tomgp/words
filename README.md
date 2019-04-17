<div class="contents">
{% for post in site.posts %}
  <div class="postlink-link">
    <a href="{{ post.url | prepend:site.baseurl }}" class="post-title-link"><span class="post-title">{{post.title}}</span> <span class="post-date">{{ post.date | date_to_string }}</span></a>
  </div>
{% endfor %}
</div>