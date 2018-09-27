{% for post in site.posts %}
  {% if post.layout == "book" %}📚{% else %}💭{% endif %} <a href="{{ post.url | prepend:site.baseurl }}" class="post-title-link">{{ post.title }}</a> <span class="date">{{ post.date | date_to_string }}</span>
{% endfor %}
