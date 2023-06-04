package zzim;


public class ZzimPostDTO {

  private String user_email;
  private int id;
  private String imagepath;
  private String sub; 
  
  public String getUser_email() {
    return this.user_email;
  }

  public void setUser_email(String user_email) {
    this.user_email = user_email;
  }

  public int getId() {
    return this.id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getImagepath() {
    return this.imagepath;
  }

  public void setImagepath(String imagepath) {
    this.imagepath = imagepath;
  }

  public String getSub() {
    return this.sub;
  }

  public void setSub(String sub) {
    this.sub = sub;
  }
  
}