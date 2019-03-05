<div class="contents">
{% for post in site.posts %}
  <div class="postlink-link">
    <a href="{{ post.url | prepend:site.baseurl }}" class="post-title-link">{{ post.date | date_to_string }}</a>
  </div>
{% endfor %}
</div>