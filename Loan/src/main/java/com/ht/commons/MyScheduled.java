package com.ht.commons;

import com.ht.bean.Task;
import com.ht.controller.InvestController;
import com.ht.service.IVipCenterService;
import org.springframework.context.annotation.Lazy;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

//定时器方法
@Component
@Lazy(false)
public class MyScheduled {
    @Resource
    private IVipCenterService ivcs;
    @Resource
    private InvestController ints;

    //每月1号重置用户每月任务
    @Scheduled(cron = "0 0 0 1 * ?")
    public void resetUserMonthlyTask(){
        ivcs.resetUserMonthlyTask();
        System.out.println("每月1号重置用户每月任务完成状态");
    }

    //每天0点xxxxx
    @Scheduled(cron = "0 0 0 * * ?")
    public void doSmoethingEveryDay(){

    }

    //每天凌晨执行一次
//    @Scheduled(cron = "0 0 0 * * ? ")
//    //一秒一次
    @Scheduled(cron = "0/30 * * * * ? ")
    public void processUpdateApplyStatus(){
            ints.sellx();
        System.out.println("每天执行一次");
    }

}
