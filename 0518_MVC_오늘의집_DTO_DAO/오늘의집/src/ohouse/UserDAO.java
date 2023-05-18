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

    public int signup(UserDTO userDTO){
        String SQL = "INSERT INTO member()"
    }
        
    
}