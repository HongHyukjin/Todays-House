package ohouse;
import java.sql.*;
import java.util.*;
import ohouse.UserDTO;
            
/**
 * User_DAO
 */
public class UserDAO {

    private Connection conn;
    private PreparedStatement ps;
    private ResultSet rs;

    public UserDAO(){
        try{
            String URL = "jdbc:mysql://localhost:3306/todays_house";
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
        String SQL = "INSERT INTO ohouse_member(user_email, user_pw, user_nick, user_service) VALUES(?,?,?,?)";
        try {   
            ps = conn.prepareStatement(SQL);
            ps.setString(1, userDTO.getUser_email1()+"@"+userDTO.getUser_email2());
            ps.setString(2, userDTO.getUser_pw());
            ps.setString(3, userDTO.getUser_nick());
            ps.setString(4, userDTO.getUser_service());
            return ps.executeUpdate();
        } catch(Exception e){
            e.printStackTrace();
        }
        finally {
            try {
                if(rs!= null){rs.close();}
                if(ps!= null){ps.close();}
                if(conn!= null){conn.close();}
            }
            catch(Exception e){
                e.printStackTrace();
            }
        }
        return -1;
    }

    public int signin(String user_email, String user_pw){
        String SQL = "SELECT user_pw FROM ohouse_member WHERE user_email = ?";
        try { 
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_email);

            rs = ps.executeQuery();
            if(rs.next()){
                if(rs.getString("user_pw").equals(user_pw)){
                    return 1;
                }
                else{
                    return 0;
                }
            }
            else {
                return -1;
            }
        } catch (Exception e){
            e.printStackTrace();
        }
        finally {
            try {
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}
            }
            catch(Exception e){
                e.printStackTrace();
            }
        }
        return -2;
    }



    public int update(UserDTO userDTO){
        String SQL = "UPDATE ohouse_member SET user_nick=?, user_url=?, user_gender=?, user_birth=?, user_profile=?, user_oneline=? WHERE user_email=?";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, userDTO.getUser_nick());
            ps.setString(2, userDTO.getUser_url());
            ps.setString(3, userDTO.getUser_gender());
            ps.setString(4, userDTO.getUser_birth());
            ps.setString(5, userDTO.getUser_profile());
            ps.setString(6, userDTO.getUser_oneline());
            ps.setString(7, userDTO.getUser_email1()+"@"+userDTO.getUser_email2());
            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally{
            try{
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}
            }
            catch(Exception e){
                e.printStackTrace();
            }
        }
        return -1; 
    }

    public int updatePw(String user_email, String user_pw){
        String SQL = "UPDATE ohouse_member SET user_pw=? WHERE user_email=?";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_pw);
            ps.setString(2, user_email);
            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally{
            try{
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}
            }
            catch(Exception e){
                e.printStackTrace();
            }
        }
        return -1; 
    }


    // 개인정보 수정 
    public UserDTO getJoin(String user_email){
        UserDTO userDTO = new UserDTO(); 

        String SQL = "SELECT * FROM ohouse_member WHERE user_email=?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_email);
            rs = ps.executeQuery();
            if(rs.next()){
                int index = rs.getString("user_email").indexOf("@");
                userDTO.setUser_email1(rs.getString("user_email").substring(0, index));
                userDTO.setUser_email2(rs.getString("user_email").substring(index+1));
                userDTO.setUser_nick(rs.getString("user_nick"));
                userDTO.setUser_url(rs.getString("user_url"));
                userDTO.setUser_gender(rs.getString("user_gender"));
                userDTO.setUser_birth(rs.getString("user_birth"));
                userDTO.setUser_profile(rs.getString("user_profile"));
                userDTO.setUser_oneline(rs.getString("user_oneline"));
            }
        } catch(Exception e){ 
            e.printStackTrace();
        }
        finally {
            try {
                if(rs!= null){rs.close();}
                if(ps!= null){ps.close();}
                if(conn!= null){conn.close();}
            }
            catch(Exception e){
                e.printStackTrace();
            }
        }
        return userDTO; 
    }

    // 가입 회원 전체리스트 목록 가져오기 
    public List<UserDTO> getJoinList(){
        UserDTO userDTO = new UserDTO();
        List<UserDTO> list = new ArrayList<>();

        String SQL = "SELECT * FROM ohouse_member";
        try {
            ps = conn.prepareStatement(SQL);
            rs = ps.executeQuery();
            while(rs.next()){
                int index = rs.getString("user_email").indexOf("@");
                userDTO.setIdx(rs.getInt("idx"));
                userDTO.setUser_email1(rs.getString("user_email1").substring(0, index));
                userDTO.setUser_email2(rs.getString("user_email2").substring(index+1));
                userDTO.setUser_pw(rs.getString("user_pw"));
                userDTO.setUser_nick(rs.getString("user_nick"));
                userDTO.setUser_service(rs.getString("user_service"));
                userDTO.setUser_url(rs.getString("user_url"));
                userDTO.setUser_gender(rs.getString("user_gender"));
                userDTO.setUser_birth(rs.getString("user_birth"));
                userDTO.setUser_profile(rs.getString("user_image"));
                userDTO.setUser_oneline(rs.getString("user_oneline"));
                userDTO.setCreate_date(rs.getString("create_date"));
                list.add(userDTO);
            }
        } catch(Exception e){
            e.printStackTrace();
        }
        finally {
            try{
                if(rs!= null){ rs.close(); }
                if(ps!= null){ ps.close(); }
                if(conn!= null){ conn.close(); }
            }
            catch(Exception e){
                e.printStackTrace();
            }
        }
        return list;
        
    }
        
    
}