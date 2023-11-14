package com.vu.Sodinukas.Service;

import com.vu.Sodinukas.DTO.UserDTO;
import com.vu.Sodinukas.DTO.LoginDTO;
import com.vu.Sodinukas.response.LoginResponse;

public interface UserService {
    String addUser(UserDTO userDTO);

    LoginResponse loginUser(LoginDTO loginDTO);

}
