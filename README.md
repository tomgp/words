{% for post in site.posts %}
  <a href="{{site.baseurl}}/{{ post.url }}">{{ post.title }} - {{ post.date | date_to_string }}</a>
{% endfor %}
