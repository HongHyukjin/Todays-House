package scrap;
import java.sql.*;
import java.util.*;

public class ScrapPostDAO {
    private Connection conn;
    private PreparedStatement ps;
    private Statement stmt;
    private ResultSet rs;

    public ScrapPostDAO(){
        try{
            String DBURL="jdbc:mysql://localhost:3306/Todays_House";
            String DBID="root";
            String DBPW="1234";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(DBURL, DBID, DBPW);
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
 
    // 1. post
    public int post(ScrapPostDTO scrapPostDTO){
        String SQL ="insert into scrap(user_email,id,imagepath,sub) values(?,?,?,?)";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, scrapPostDTO.getUser_email());
            ps.setInt(2, scrapPostDTO.getId());
            ps.setString(3, scrapPostDTO.getImagepath());
            ps.setString(4, scrapPostDTO.getSub());
    

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
            catch(Exception e){ }
          
        }
        return -1; 
    }

    // member table과 photo table join 해서 member의 이메일이 현재 로그인된 이메일인 photo를 불러옴
    public List<ScrapPostDTO> select(String user_email){
        ScrapPostDTO scrapPostDTO = null;
        List<ScrapPostDTO> list = new ArrayList<>();
        String SQL ="select * from ohouse_member m join scrap s where m.user_email=?";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_email);
            rs = ps.executeQuery(); 
            while(rs.next()){
                scrapPostDTO = new ScrapPostDTO();
                scrapPostDTO.setId(rs.getInt("id"));;
                scrapPostDTO.setImagepath(rs.getString("imagepath"));;
                scrapPostDTO.setSub(rs.getString("sub"));;
       
                list.add(scrapPostDTO);
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

    public int delete(ScrapPostDTO scrapPostDTO){
        String SQL = "delete from scrap where user_email=? && id=?";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, scrapPostDTO.getUser_email());
            ps.setInt(2, scrapPostDTO.getId());;
    
            return ps.executeUpdate();
        }
        catch(Exception e){}
        finally{
            try{
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}
            }
            catch(Exception e){ }
        }
        return -1;
    }


  
}