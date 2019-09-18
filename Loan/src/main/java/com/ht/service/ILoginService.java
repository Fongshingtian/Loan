package com.ht.service;

import com.ht.bean.myusers;

import java.util.List;

public interface ILoginService {
    List<myusers> selBypwd(myusers user);
}
