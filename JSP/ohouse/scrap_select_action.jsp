<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="application/json; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import="scrap.ScrapPostDAO"%>
<%@ page import="scrap.ScrapPostDTO"%>
<%@ page import="java.util.*"%>

<% request.setCharacterEncoding("UTF-8");%>


<%
    String user_email = request.getParameter("user_email");
    ScrapPostDAO scrapPostDAO = new ScrapPostDAO();
    List<ScrapPostDTO> list = scrapPostDAO.select(user_email);
    
    String jsonData = "{ \"result\": [";
    int cnt = 0;
    for(ScrapPostDTO scrapPostDTO : list){
        cnt++;
        if(cnt < list.size()){
            jsonData += "{ \"id\" : \"" + scrapPostDTO.getId() + "\","
                     +   "\"imagepath\" : \"" + scrapPostDTO.getImagepath() + "\","
                     +   "\"sub\" : \"" + scrapPostDTO.getSub() + "\""
                     + "},";
        }   
        else{
            jsonData += "{ \"id\" : \"" + scrapPostDTO.getId() + "\","
                     +   "\"imagepath\" : \"" + scrapPostDTO.getImagepath() + "\","
                     +   "\"sub\" : \"" + scrapPostDTO.getSub() + "\""
                     + "}";
        }
    }
    jsonData += "]}";
    response.getWriter().write(jsonData);
%>