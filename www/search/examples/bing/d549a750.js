var ExpandableInlineContainer;(function(){function u(n){return Lib.CssClass.contains(n,t)}function f(n){Lib.CssClass.add(n,t)}function e(n){Lib.CssClass.remove(n,t)}function o(t){function c(r){r.target==t&&(sj_ue(t,n,c),Lib.CssClass.remove(t,i),t.style.height="",sj_evt.fire("exp_animation_end",t.id),WireUp.setValue(t,"ao",h),e(t))}var h=Lib.CssClass.contains(t,"b_hide"),o;if(n==""){Lib.CssClass.toggle(t,"b_hide");sj_evt.fire("exp_animation_end",t.id);WireUp.setValue(t,"ao",h);return}u(t)||(f(t),Lib.CssClass.add(t,i),o=s(t),Lib.CssClass.contains(t,"b_hide")?(r(t),Lib.CssClass.remove(t,"b_hide"),t.style.height=o+"px"):(t.style.height=o+"px",r(t),t.style.height="",Lib.CssClass.add(t,"b_hide")),sj_be(t,n,c))}function r(n){void n.offsetTop}function s(n){var t=n.clientHeight;return t==0&&Lib.CssClass.contains(n,"b_hide")&&(Lib.CssClass.remove(n,"b_hide"),t=n.clientHeight,Lib.CssClass.add(n,"b_hide")),t}function h(){return"transition"in _d.documentElement.style?"transitionend":""}var n=h(),i="state_toggler_slide",t="b_exp_inaction";WireUp.init("expici",function(n){WireUp.onUpdate(n,"a",function(n){o(n)})})})(ExpandableInlineContainer||(ExpandableInlineContainer={}))