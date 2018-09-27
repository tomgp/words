{% for post in site.posts %}
  {% if post.layout == book %}📚{% else %}💭{% endif %} {{ post.date | date_to_string }} <a href="{{ post.url | prepend:site.baseurl }}">{{ post.title }}</a> 
{% endfor %}
