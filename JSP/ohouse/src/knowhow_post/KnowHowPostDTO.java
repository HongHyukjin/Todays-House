package knowhow_post;

/**
 * HousePostDTO
 */
public class KnowHowPostDTO {

	private int idx;
	private String user_email;
    private String file;
    private String knowhow_title;
    private String knowhow_content;
    private String write_date;

	public int getIdx() {
        return this.idx;
    }

    public void setIdx(int idx) {
        this.idx = idx;
    }


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

	public String getKnowhow_title() {
		return this.knowhow_title;
	}

	public void setKnowhow_title(String knowhow_title) {
		this.knowhow_title = knowhow_title;
	}

	public String getKnowhow_content() {
		return this.knowhow_content;
	}

	public void setKnowhow_content(String knowhow_content) {
		this.knowhow_content = knowhow_content;
	}

	public String getWrite_date() {
		return this.write_date;
	}

	public void setWrite_date(String write_date) {
		this.write_date = write_date;
	}




}