<div class="contents">
{% for post in site.posts %}
  <div class="postlink-date">
    {{ post.date | date_to_string }}
  </div>
  <div class="postlink-link">
    <a href="{{ post.url | prepend:site.baseurl }}" class="post-title-link">{{ post.title }}</a>
  </div>
{% endfor %}
</div>