$(function(){$(".question_list_ul>li").each(function(){$(this).click(function(){var t=$(this).index();0!=t&&($(".product-qusetion-right-content>ul").hide(),$(".product-qusetion-right-content>ul").eq(t-1).show())})})});