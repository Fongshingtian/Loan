package com.ht.controller;

import com.ht.bean.zbgj;
import com.ht.bean.zbgjson;
import com.ht.service.Ht_BiddService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/bidding")
public class Ht_BiddController {
    @Autowired
    private Ht_BiddService htbidd;

    //查看所有的标
    @RequestMapping("/bidd")
    public String bidd(Map map){
       List list = htbidd.SelBidd();
       map.put("list",list);
        System.out.println(list);
        return "Bidd/bidd";
    }


    //添加一个标
    @RequestMapping("/addbidd")
    public String addbidd(zbgj zbgj){
        htbidd.Addbid(zbgj);
        System.out.println(zbgj);
        return "forward:/bidding/bidd";
    }
    //删除一个招标

    @RequestMapping("/delbidd/{id}")
    public String Delbidd(@PathVariable("id")Integer id){
        htbidd.Delbidd(id);
        return  "forward:/bidding/bidd";
    }

    //查看一个标下的所有分期子表
    @RequestMapping("/zson/{id}")
    public String biddson(@PathVariable("id") Integer id, Map map){
        System.out.println(id);
        List list = htbidd.SelZson(id);
        System.out.println(list+"  s");
        map.put("list",list);
        map.put("ss",id);
        return "Bidd/zson";
    }


    //添加子表的利息等等
    @RequestMapping("addzson")
    public String addzson(zbgjson zbgjson){
        htbidd.addZson(zbgjson);
        Integer s = zbgjson.getZid();
        System.out.println(zbgjson.getZid()+"sdafas");
        return "forward:/bidding/zson/"+s;
    }

    //删除一条利息期数
    @RequestMapping("/delzson/{id}/{ids}")
    public String delzson(@PathVariable("id") Integer id,@PathVariable("ids") Integer ids){
        System.out.println(id+".id "+ids);
        htbidd.Delzson(id);
        return"forward:/bidding/zson/"+ids;

    }
}
