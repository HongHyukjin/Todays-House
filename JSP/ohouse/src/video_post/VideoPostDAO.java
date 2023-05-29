package video_post;
import java.sql.*;
import java.util.*;

public class VideoPostDAO {
    private Connection conn;
    private PreparedStatement ps;
    private Statement stmt;
    private ResultSet rs;
    public VideoPostDAO(){
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

    public int post(VideoPostDTO videoPostDTO){
        String SQL ="insert into video_post(video_pyeong,video_type,video_style,video_file,video_place,video_memo) values(?,?,?,?,?,?)";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, videoPostDTO.getVideo_pyeong());
            ps.setString(2, videoPostDTO.getVideo_type()); 
            ps.setString(3, videoPostDTO.getVideo_style());
            ps.setString(4, videoPostDTO.getVideo_file());
            ps.setString(5, videoPostDTO.getVideo_place());
            ps.setString(6, videoPostDTO.getVideo_memo());

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

    public ArrayList<VideoPostDTO> select(){
        ArrayList<VideoPostDTO> videolist = new ArrayList<>();
        VideoPostDTO videoPostDTO = null;
        String SQL ="select * from video_post";
        try{
            // stmt  = conn.createStatement();
            stmt = conn.createStatement();
            rs = stmt.executeQuery(SQL);
            if(rs.next()){

                videoPostDTO = new VideoPostDTO();
                videoPostDTO.setVideo_pyeong(rs.getString("video_pyeong"));
                videoPostDTO.setVideo_type(rs.getString("video_type"));
                videoPostDTO.setVideo_style(rs.getString("video_style"));
                videoPostDTO.setVideo_file(rs.getString("video_file"));
                videoPostDTO.setVideo_place(rs.getString("video_place"));
                videoPostDTO.setVideo_memo(rs.getString("video_memo"));
                videoPostDTO.setWrite_date(rs.getString("video_memo"));
                
                videolist.add(videoPostDTO);
            }

           return videolist;
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
        return videolist;
    }

 
}
