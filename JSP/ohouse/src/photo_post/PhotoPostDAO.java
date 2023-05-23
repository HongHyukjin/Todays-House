package photo_post;
import java.sql.*;
import java.util.*;

public class PhotoPostDAO {
    private Connection conn;
    private PreparedStatement ps;
    private Statement stmt;
    private ResultSet rs;

    public PhotoPostDAO(){
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
    public int post(PhotoPostDTO photoPostDTO){
        String SQL ="insert into photo_post(pyeong,type,style,file,place,memo) values(?,?,?,?,?,?)";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, photoPostDTO.getPyeong());
            ps.setString(2, photoPostDTO.getType());
            ps.setString(3, photoPostDTO.getStyle());
            ps.setString(4, photoPostDTO.getFile());
            ps.setString(5, photoPostDTO.getPlace());
            ps.setString(6, photoPostDTO.getMemo());

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

    public PhotoPostDTO select(){
        PhotoPostDTO photoPostDTO = new PhotoPostDTO();
        String SQL ="select file from photo_post where idx=1";
        try{
            // stmt  = conn.createStatement();
            stmt = conn.createStatement();
            rs = stmt.executeQuery(SQL);
            if(rs.next()){
                photoPostDTO.setFile(rs.getString("file"));
            }

           return photoPostDTO;
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
        return photoPostDTO;
    }



    
}
