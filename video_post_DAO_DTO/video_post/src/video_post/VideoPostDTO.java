package video_post;

/**
 * VideoPostDTO
 */
public class VideoPostDTO {

    private String user_email;
    private String video_pyeong;
    private String video_type;
    private String video_style;  
    private String video_file;
    private String video_place;
    private String video_memo;
    private String write_date;

    public String getUser_email() {
        return this.user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getVideo_pyeong() {
        return this.video_pyeong;
    }

    public void setVideo_pyeong(String video_pyeong) {
        this.video_pyeong = video_pyeong;
    }

    public String getVideo_type() {
        return this.video_type;
    }

    public void setVideo_type(String video_type) {
        this.video_type = video_type;
    }

    public String getVideo_style() {
        return this.video_style;
    }

    public void setVideo_style(String video_style) {
        this.video_style = video_style;
    }

    public String getVideo_file() {
        return this.video_file;
    }

    public void setVideo_file(String video_file) {
        this.video_file = video_file;
    }

    public String getVideo_place() {
        return this.video_place;
    }

    public void setVideo_place(String video_place) {
        this.video_place = video_place;
    }

    public String getVideo_memo() {
        return this.video_memo;
    }

    public void setVideo_memo(String video_memo) {
        this.video_memo = video_memo;
    }

    public String getWrite_date() {
        return this.write_date;
    }

    public void setWrite_date(String write_date) {
        this.write_date = write_date;
    }

}