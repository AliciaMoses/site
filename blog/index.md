---
layout: index
title: Posts
---
<div class="blog-index-featured-posts">
  <div class="section-title"><img src="/assets/bookmark_star_50dp_E8EAED_FILL0_wght200_GRAD0_opsz48.svg" alt="featured post icon">Featured</div>
        {% for post in site.posts %}
            {% if post.featured %}
            <a href="{{ post.url }}">
                <div class="blog-index-post-summary-featured">
                    <p class="post-title">{{ post.title }}</p>
                    <div class="post-summary-footer">
                      <div class="post-tags">
                        {% for tag in post.tags %}
                            <span class="tag">{{ tag }}</span>
                        {% endfor %}
                    </div>
                    <time class="post-date">{{ post.date | date: "%Y.%m.%d" }}</time>
                    </div>
                </div>
            </a>
            {% endif %}
        {% endfor %}
    </div>
  <div class="blog-index-latest-posts">
    <div class="section-title"><img src="/assets/overview_50dp_E8EAED_FILL0_wght200_GRAD0_opsz48.svg" alt="featured post icon">Latest</div>
        {% for post in site.posts %}
            {% unless post.featured %}
            <a href="{{ post.url }}">
                <div class="blog-index-post-summary">
                    <p class="post-title">{{ post.title }}</p>
                     <div class="post-summary-footer">
                        <div class="post-tags">
                            {% for tag in post.tags %}
                                <span class="tag">{{ tag }}</span>
                            {% endfor %}
                        </div>
                    <time class="post-date">{{ post.date | date: "%Y.%m.%d" }}</time>
                    </div>
                </div>
                </a>
            {% endunless %}
        {% endfor %}
    </div>