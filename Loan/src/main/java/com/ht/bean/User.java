package com.ht.bean;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@NoArgsConstructor
@Data
@Accessors(chain=true)
public class User {
    private int id;
    private String password;
    private String username;
}
