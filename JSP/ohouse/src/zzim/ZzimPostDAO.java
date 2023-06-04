package zzim;
import java.sql.*;
import java.util.*;

public class ZzimPostDAO {
    private Connection conn;
    private PreparedStatement ps;
    private Statement stmt;
    private ResultSet rs;

    public ZzimPostDAO(){
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
    public int post(ZzimPostDTO zzimPostDTO){
        String SQL ="insert into zzim(user_email,id,imagepath,sub) values(?,?,?,?)";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, zzimPostDTO.getUser_email());
            ps.setInt(2, zzimPostDTO.getId());
            ps.setString(3, zzimPostDTO.getImagepath());
            ps.setString(4, zzimPostDTO.getSub());
    

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
    public List<ZzimPostDTO> select(String user_email){
        ZzimPostDTO zzimPostDTO = null;
        List<ZzimPostDTO> list = new ArrayList<>();
        String SQL ="select * from ohouse_member m join zzim s where m.user_email=?";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_email);
            rs = ps.executeQuery(); 
            while(rs.next()){
                zzimPostDTO = new ZzimPostDTO();
                zzimPostDTO.setId(rs.getInt("id"));;
                zzimPostDTO.setImagepath(rs.getString("imagepath"));;
                zzimPostDTO.setSub(rs.getString("sub"));;
       
                list.add(zzimPostDTO);
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

    public int delete(ZzimPostDTO zzimPostDTO){
        String SQL = "delete from zzim where user_email=? && id=?";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, zzimPostDTO.getUser_email());
            ps.setInt(2, zzimPostDTO.getId());;
    
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