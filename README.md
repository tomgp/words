{% for post in site.posts %}
  <a href="{{ post.url | prepend:site.baseurl }}">{{ post.title }} - {{ post.date | date_to_string }}</a>
{% endfor %}
