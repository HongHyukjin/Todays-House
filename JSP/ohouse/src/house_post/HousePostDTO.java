package house_post;

/**
 * HousePostDTO
 */
public class HousePostDTO {

    private String user_email;
    private String file;
    private String house_title;
    private String house_content;
    private String write_date;

    public String getUser_email() {
        return this.user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getFile() {
        return this.file;
    }  

    public void setFile(String file) {
        this.file = file;
    }

    public String getHouse_title() {
        return this.house_title;
    }

    public void setHouse_title(String house_title) {
        this.house_title = house_title;
    }

    public String getHouse_content() {
        return this.house_content;
    }

    public void setHouse_content(String house_content) {
        this.house_content = house_content;
    }

    public String getWrite_date() {
        return this.write_date;
    }

    public void setWrite_date(String write_date) {
        this.write_date = write_date;
    }

}