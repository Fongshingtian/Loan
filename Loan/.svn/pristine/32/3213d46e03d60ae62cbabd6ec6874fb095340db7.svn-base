package com.ht.controller;

import com.ht.bean.myusers;
import com.ht.service.ILoginService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("/user")
public class LoginController {
    @Resource
    private ILoginService is;

    @RequestMapping("/tologin")
    //去登录页面
    public String tologin(){
        return "userlogin/login";
    }

    @RequestMapping("/login")
    public String login(myusers user, HttpSession session){
        List<myusers> u=is.selBypwd(user);
        System.out.println(u.size());
        for (myusers users:u){
            System.out.println(u);
        }
        if(u.size()!=0) {
            session.setAttribute("user",(myusers)u.get(0));
            System.out.println("登录成功！");

            return "redirect:/t2/test";
        }else{
            System.out.println("登录失败！用户名或密码错误.....");
            session.setAttribute("msg","登录失败！用户名或密码错误.....");
            return "userlogin/login";
        }

    }
}
