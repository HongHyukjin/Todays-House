<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="application/json; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import="house_post.HousePostDAO"%>
<%@ page import="house_post.HousePostDTO"%>
<%@ page import="java.util.*"%>

<% request.setCharacterEncoding("UTF-8");%>


<%
    String user_email = request.getParameter("user_email");
    HousePostDAO housePostDAO = new HousePostDAO();
    List<HousePostDTO> list = housePostDAO.select(user_email);
    
    String jsonData = "{ \"result\": [";
    int cnt = 0;
    for(HousePostDTO housePostDTO : list){
        cnt++;
        if(cnt < list.size()){
            jsonData += "{ \"idx\" : \"" + housePostDTO.getIdx() + "\","
                     +   "\"file\" : \"" + housePostDTO.getFile() + "\","
                     +   "\"house_title\" : \"" + housePostDTO.getHouse_title() + "\","
                     +   "\"house_content\" : \"" + housePostDTO.getHouse_content() + "\","
                     +   "\"place\" : \"" + housePostDTO.getPlace() + "\","
                     +   "\"pyeong\" : \"" + housePostDTO.getPyeong() + "\","
                     +   "\"category\" : \"" + housePostDTO.getCategory() + "\","
                     +   "\"worker\" : \"" + housePostDTO.getWorker() + "\","
                     +   "\"family\" : \"" + housePostDTO.getFamily() + "\","
                     +   "\"area\" : \"" + housePostDTO.getArea() + "\","
                     +   "\"area2\" : \"" + housePostDTO.getArea2() + "\","
                     +   "\"style\" : \"" + housePostDTO.getStyle() + "\""
                     + "},";
        }   
        else{
            jsonData += "{ \"idx\" : \"" + housePostDTO.getIdx() + "\","
                     +   "\"file\" : \"" + housePostDTO.getFile() + "\","
                     +   "\"house_title\" : \"" + housePostDTO.getHouse_title() + "\","
                     +   "\"house_content\" : \"" + housePostDTO.getHouse_content() + "\","
                     +   "\"place\" : \"" + housePostDTO.getPlace() + "\","
                     +   "\"pyeong\" : \"" + housePostDTO.getPyeong() + "\","
                     +   "\"category\" : \"" + housePostDTO.getCategory() + "\","
                     +   "\"worker\" : \"" + housePostDTO.getWorker() + "\","
                     +   "\"family\" : \"" + housePostDTO.getFamily() + "\","
                     +   "\"area\" : \"" + housePostDTO.getArea() + "\","
                     +   "\"area2\" : \"" + housePostDTO.getArea2() + "\","
                     +   "\"style\" : \"" + housePostDTO.getStyle() + "\""
                     + "}";
        }
    }
    jsonData += "]}";
    response.getWriter().write(jsonData);
%>