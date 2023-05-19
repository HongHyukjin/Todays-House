package ohouse;
import java.sql.*;
import java.util.*;

/**
 * User_DAO
 */
public class UserDAO {

    private Connection conn;
    private PreparedStatement ps;
    private ResultSet rs;

    public UserDAO(){
        try{
            String URL = "jdbc:mysql://localhost:3306/ddulki";
            String ID = "root";
            String PW = "1234";
            // 1. 데이터베이스 드라이버(JDBC)
            Class.forName("com.mysql.jdbc.Driver");

            // 2. 데이터베이스 인증 & 인가 (URL, ID, PW)
            conn = DriverManager.getConnection(URL, ID, PW);
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }

    // 1. 회원가입 signup
    // 2. 회원로그인 signin
    // 3. 회원정보수정 update
    // 4. 회원탈퇴처리 delete 
    
    // user_email1;
    // user_email2;
    // user_pw;
    // user_pw_ok;
    // user_nick;
    // user_service;
  

    public int signup(UserDTO userDTO){
        String SQL = "INSERT INTO ohouse_member(user_email1, user_email2, user_pw, user_pw_ok, user_nick, user_service) VALUES(?,?,?,?,?,?)";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, userDTO.getUser_email1());
            ps.setString(2, userDTO.getUser_email2());
            ps.setString(3, userDTO.getUser_pw());
            ps.setString(4, userDTO.getUser_pw_ok());
            ps.setString(5, userDTO.getUser_nick());
            ps.setString(6, userDTO.getUser_service());
            return ps.executeUpdate();
        } cattch(Exception e){
            e.printStackTrace();
        }
        finally {
            try {
                if(rs!= null){rs.close();}
                if(ps!= null){ps.close();}
                is(conn!= null){conn.close();}
            }
            catch(Exception e){
                e.printStackTrace();
            }
        }
        return -1;
    }

        
    
}