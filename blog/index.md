---
layout: index
title: Blog posts
---
<div class="featured-posts">
    {% for post in site.posts %}
        {% if post.featured  %}
        <p><a href="{{ post.url }}">{{ post.title }}</a></p>
        <time>{{ post.date | date: "%B %d, %Y" }}</time>
        {% if post.tags %}
            {% for tag in post.tags %}
                <span class="tag">{{ tag }}</span>
            {% endfor  %}
        {% endif %}
        <p>{{ post.excerpt }}</p>
        {% endif %}
    {% endfor %}
</div>


<div class="latest-posts">
    {% for post in site.posts limit:5 %}
        <p><a href="{{ post.url }}">{{ post.title }}</a></p>
        <time>{{ post.date | date: "%B %d, %Y" }}</time>
        {% if post.tags %}
            {% for tag in post.tags %}
                <span class="tag">{{ tag }}</span>
            {% endfor  %}
        {% endif %}
        <p>{{ post.excerpt }}</p>
    {% endfor %}
</div>