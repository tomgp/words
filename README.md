{% for post in site.posts %}
  <a href="words/{{ post.url }}">{{ post.title }} - {{ post.date | date_to_string }}</a>
{% endfor %}
