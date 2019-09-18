package com.ht.commons;

import org.apache.tomcat.util.json.JSONParser;
import org.springframework.util.ResourceUtils;

import java.io.*;
import java.util.*;

public class GetCitys {
    //省市区三级联动位置选择
    public static   Map getProvinces(){
        try {
            //解析json文件
            File file= ResourceUtils.getFile("classpath:city.json");
            FileReader fr=new FileReader(file);
            BufferedReader br=new BufferedReader(fr);
            String line;
            StringBuffer sb=new StringBuffer();

            while((line=br.readLine())!=null){
                    sb.append(line);
            }
            InputStream is=new FileInputStream(file);
            JSONParser jp=new JSONParser(is,"utf-8");
            ArrayList list= jp.parseArray();
            Iterator it= list.iterator();
            Map<String,Map<String,ArrayList<String>>> province=new HashMap();

            while (it.hasNext()){
                //获取省
                Map m=(Map) it.next();
                List l=(List) m.get("city");
                Iterator it2= l.iterator();
                Map<String,ArrayList<String>> city=new HashMap();
                while(it2.hasNext()){
                    Map m2=(Map)it2.next();
                    ArrayList<String> area=(ArrayList<String>) m2.get("area");
                    //获取区
                    city.put(m2.get("name").toString(),area);
                }
                //获取市
                province.put(m.get("name").toString(),city);
            }
            return province;
        }catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }
}
