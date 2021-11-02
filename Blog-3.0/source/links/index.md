---
title: 友人帐
date: 2021-11-02 12:28:45
---
<div id="links">
<div class="links-content">
<div class="link-navigation">
{% for link in site.data.links %}
<div class="card">
  <a href="{{ link.site }}" target="_blank">
  <img class="ava" src="{{ link.avatar }}"/></a>
  <div class="card-header">
  <div><a href="{{ link.site }}" target="_blank">{{ link.name }}</a>
  <a href="{{ link.site }}"><span class="focus-links"><i class="fa fa-plus" aria-hidden="true"></i>&nbsp;关注</span></a></div>
  <div class="info" title="{{ link.info }}">{{ link.info }}</div>
  </div>
</div>
{% endfor %}
</div>
</div>
</div>
<div class="no-icon note warning"><div class="link-info">😁欢迎与我交换友链</div></div>

------

<div style="text-align:center;"><span class="with-love" id="animate1">
    <i class="fa fa-heart"></i>
  </span>留言添加友链<span class="with-love" id="animate2">
    <i class="fa fa-heart"></i>
  </span></div>

------

{% note success %}

**友链格式：**

- 网站名称：雨轩阁
- 网站地址：https://yuxuange.top
- 网站描述：丢掉幻想，准备斗争
- 网站Logo/头像：https://cdn.jsdelivr.net/gh/gqgong/MyBlog/Images/avatar.png

{% endnote %}