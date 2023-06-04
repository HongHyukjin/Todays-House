package photo_post;
/**
 * photoPostDAO
 */
public class PhotoPostDTO{

    private String user_email;
    private String pyeong;
    private String type;
    private String file;
    private String style;
    private String place;
    private String memo;
    private String write_date;

    public String getUser_email() {
        return this.user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getPyeong() {
        return this.pyeong;
    }

    public void setPyeong(String pyeong) {
        this.pyeong = pyeong;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStyle() {
        return this.style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public String getFile() {
        return this.file;
    }

    public void setFile(String file) {
        this.file = file;
    }

    public String getPlace() {
        return this.place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getMemo() {
        return this.memo;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }

    public String getWrite_date() {
        return this.write_date;
    }

    public void setWrite_date(String write_date) {
        this.write_date = write_date;
    }
    
}