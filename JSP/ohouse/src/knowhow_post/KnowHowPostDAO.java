package knowhow_post;

import java.sql.*;
import java.util.*;

public class KnowHowPostDAO {
    private Connection conn;
    private PreparedStatement ps;
    private ResultSet rs;

    public KnowHowPostDAO() {
        try {
            String DBURL = "jdbc:mysql://localhost:3306/Todays_House";
            String DBID = "root";
            String DBPW = "1234";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(DBURL, DBID, DBPW);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // 1. post
    public int post(KnowHowPostDTO knowHowPostDTO) {
        String SQL = "insert into knowhow_post(user_email,file,knowhow_title,knowhow_content) values(?,?,?,?)";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, knowHowPostDTO.getUser_email());
            ps.setString(2, knowHowPostDTO.getFile());
            ps.setString(3, knowHowPostDTO.getKnowhow_title());
            ps.setString(4, knowHowPostDTO.getKnowhow_content());

            return ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
                if (ps != null) {
                    ps.close();
                }
                if (conn != null) {
                    conn.close();
                }
            } catch (Exception e) {
            }

        } 
        return -1;
    } 

    public List<KnowHowPostDTO> select(String user_email){
        KnowHowPostDTO knowHowPostDTO = null;
        List<KnowHowPostDTO> list = new ArrayList<>();
        String SQL ="select * from ohouse_member m join knowhow_post k where m.user_email=? && k.user_email=?";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_email);
            ps.setString(2, user_email);
            rs = ps.executeQuery();
            while(rs.next()){
                knowHowPostDTO = new KnowHowPostDTO();
                knowHowPostDTO.setFile(rs.getString("file"));
                knowHowPostDTO.setKnowhow_title(rs.getString("knowhow_title"));
                knowHowPostDTO.setKnowhow_content(rs.getString("knowhow_content"));
                list.add(knowHowPostDTO);
            }

           return list;
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
            catch(Exception e){ }
          
        }
        return list;
    }
}
